import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },

  computed: mapState(["products", "productInBag"]),

  methods: {
    addToBag(product) {
      product.quantity = 1;
      this.$store.dispatch("addToBag", product);
    },

    isInBag(product) {
      return this.productInBag.find((item) => item.id == product.id);
    },

    removeFromBag(id) {
      return this.$store.dispatch("removeFromBag", id);
    },
  },
};
