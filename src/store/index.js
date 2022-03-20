import Vue from "vue";
import Vuex from "vuex";
import league from "./league";
import team from "./team";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    league,
    team,
  },
});
