import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
  },
  mutations: {
    search(state, payload) {
      state.search = payload
        .toLowerCase()
        .replace(/[.?,!@#$%&*0123456789]/g, "")
        .trim();
    },
  },
  actions: {},
  modules: {},
});
