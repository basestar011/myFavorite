import Vue from "vue";
import Vuex from "vuex";
import league from "./league";
import { LEAGUE } from "./league/types";
import team from "./team";
import { TEAM } from "./team/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [LEAGUE]: league,
    [TEAM]: team,
  },
});
