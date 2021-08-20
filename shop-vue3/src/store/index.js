import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    productInBag: [],
  },
  mutations: {
    loadProduct(state, products) {
      state.products = products;
    },
    loadBag(state, products) {
      state.productInBag = products;
    },
    addToBag(state, product) {
      state.productInBag.push(product);
      localStorage.setItem("productInBag", JSON.stringify(state.productInBag));
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productInBag.filter(
        (Item) => productId != Item.id
      );
      state.productInBag = updatedBag;
      localStorage.setItem("productInBag", JSON.stringify(state.productInBag));
    },
  },
  actions: {
    loadProduct({ commit }) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => commit("loadProduct", res.data));
    },

    loadBag({ commit }) {
      if (localStorage.getItem("productInBag")) {
        commit("loadBag", JSON.parse(localStorage.getItem("productInBag")));
      }
    },

    addToBag({ commit }, product) {
      commit("addToBag", product);
    },

    removeFromBag({ commit }, productId) {
      if (confirm("Are you sure ? you want to remove the item from bag ?")) {
        commit("removeFromBag", productId);
      }
    },
  },
  modules: {},
});
