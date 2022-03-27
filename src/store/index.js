import Vue from "vue";
import Vuex from "vuex";
import league from "./league";
import { LEAGUE } from "./league/types";
import team from "./team";
import { TEAM } from "./team/types";
import { storageService } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagues: storageService.has("leagues") ? storageService.get("leagues") : [],
  },
  mutations: {
    setLeagues(state, leagues) {
      state.leagues = leagues;
    },
  },
  actions: {
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
  },
  modules: {
    [LEAGUE]: league,
    [TEAM]: team,
  },
});
