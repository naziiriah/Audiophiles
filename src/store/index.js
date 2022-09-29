import { createStore } from "vuex";
import DB from "@/state/data";
export default createStore({
  state: {
    Data: DB,
    Cart: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
