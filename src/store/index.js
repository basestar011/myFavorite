import Vue from "vue";
import Vuex from "vuex";
import league from "./league";
import { LEAGUE } from "./league/types";
import team from "./team";
import competition from "./competition";
import { COMPETITION } from "./competition/types";
import { TEAM } from "./team/types";
import { storageService } from "@/services";
import { SET_SUBSCRIPTION } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subscription: storageService.get("subscription") || [],
  },
  getters: {},
  mutations: {
    [SET_SUBSCRIPTION](state, subscription) {
      state.subscription = subscription;
    },
  },
  actions: {},
  modules: {
    [LEAGUE]: league,
    [TEAM]: team,
    [COMPETITION]: competition,
  },
});
