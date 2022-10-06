import { createStore } from "vuex";
import DB from "@/state/data";
export default createStore({
  state: {
    Data: DB,
    Cart: [],
  },
  getters: {},
  mutations: {
    addToCart(state, props) {
      state.Cart.push(props);
      alert("added");
    },
    updateCartItems(state, props) {
      state.Cart.find((state) => state.id === props.id).value = props.value;
      alert("updated");
    },
    emptyCart(state) {
      state.Cart = [];
      alert(state.Cart.length);
    },
    deletItem(state, props) {
      state.Cart = state.Cart.filter((state) => state.id !== props);
    },
  },
  actions: {
    addToCart({ commit, state }, props) {
      const ExistingCart = state.Cart.find((state) => state.id === props.id);
      if (ExistingCart) {
        commit("updateCartItems", props);
      } else {
        commit("addToCart", props);
      }
    },
    emptyCart({ commit }) {
      commit("emptyCart");
    },
    deleteItem({ commit, state }, props) {
      const ExistingItem = state.Cart.find((state) => state.id === props.id);
      if (ExistingItem) {
        commit("deletItem");
      }
    },
  },
  modules: {},
});
