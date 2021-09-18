document.addEventListener("alpine:init", () => {
  Alpine.directive(
    "active-page",
    (el, { expression }, { effect, evaluateLater }) => {
      const onAvticeChange = evaluateLater(expression);

      effect(() => {
        onAvticeChange((active) => {
          if (active) {
            el.classList.add("active");
            el.setAttribute("aria-current", "page");
          } else {
            el.classList.remove("active");
            el.removeAttribute("aria-current");
          }
        });
      });
    }
  );

  Alpine.data("tabs", (defaultTab) => ({
    tab: defaultTab,
    toogleTab(e) {
      this.tab = e.target.getAttribute("href").replace("#", "");
    },
    isActive(tab) {
      return tab === this.tab;
    },
  }));

  Alpine.store("posts", {
    loading: false,
    posts: [],
    loaded: false,
    loadPost() {
      if (this.loaded) {
        return;
      }
      this.loading = true;
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
        .then((data) => data.json())
        .then((json) => {
          this.posts = json;
          this.loaded = true;
          this.loading = false;
        });
    },
  });

  Alpine.data("posts", () => ({
    init() {
      this.$store.posts.loadPost();
    },
  }));
});
