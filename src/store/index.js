import Vue from "vue";
import Vuex from "vuex";
import league from "./league";
import { LEAGUE } from "./league/types";
import team from "./team";
import { TEAM } from "./team/types";
import { storageService } from "@/services";
import { SET_SUBSCRIPTION, INIT_DATA } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subscription: [],
  },
  mutations: {
    [SET_SUBSCRIPTION](state, subscription) {
      state.subscription = subscription;
    },
  },
  actions: {
    async [INIT_DATA]({ commit }) {
      // localstorage에 있는 구독리그 데이터 set
      if (storageService.has("subscription")) {
        commit(SET_SUBSCRIPTION, storageService.get("subscription"));
      }
    },
    /*
    addLeague({ state, commit }, leagueCode) {
      const { leagues } = state;
      leagues.push(leagueCode);
      commit("setLeagues", leagues);
      storageService.set("league", leagues);
    },
    removeLeague({ state, commit }, leagueCode) {
      const newLeagues = state.leagues.filter(
        (league) => league !== leagueCode
      );
      commit("setLeagues", newLeagues);
      storageService.set("leagues", newLeagues);
    },
    */
  },
  modules: {
    [LEAGUE]: league,
    [TEAM]: team,
  },
});
