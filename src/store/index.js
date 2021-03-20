import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    typePokemon: "",
  },
  mutations: {
    typePokemon(state, payload) {
      state.typePokemon = payload;
      console.log(payload);
    },
  },
  actions: {},
  modules: {},
});
