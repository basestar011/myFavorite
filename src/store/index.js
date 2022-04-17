import Vue from "vue";
import Vuex from "vuex";
import league from "./league";
import { LEAGUE } from "./league/types";
import team from "./team";
import competition from "./competition";
import { COMPETITION } from "./competition/types";
import { TEAM } from "./team/types";
import { storageService } from "@/services";
import {
  SET_SUBSCRIPTION,
  CHANGE_SUBSCRIPTION,
  GET_SUBSCRIPTION,
} from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subscription: storageService.get("subscription") || [],
  },
  getters: {
    [GET_SUBSCRIPTION](state) {
      return state.subscription;
    },
  },
  mutations: {
    [SET_SUBSCRIPTION](state, subscription) {
      state.subscription = subscription;
    },
  },
  actions: {
    [CHANGE_SUBSCRIPTION]({ commit }, subscription) {
      // subscription 변경
      commit(SET_SUBSCRIPTION, subscription);
      storageService.set("subscription", subscription);
    },
  },
  modules: {
    [LEAGUE]: league,
    [TEAM]: team,
    [COMPETITION]: competition,
  },
});
