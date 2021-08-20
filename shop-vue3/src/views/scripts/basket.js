import { mapState } from "vuex";

export default {
  name: "Basket",

  methods: {
    orderTotal() {
      var total = 0;
      this.productInBag.forEach((items) => {
        total += items.price * items.quantity;
      });
      total = total.toFixed(2);
      return total;
    },
  },

  computed: mapState(["productInBag"]),
};
