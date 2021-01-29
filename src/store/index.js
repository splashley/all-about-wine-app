import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: undefined,
  },
  getters: {
    results: (state) => state.results,
  },
  mutations: {
    setResults(state, payload) {
      state.results = payload;
    },
  },
});
