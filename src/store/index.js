import Vue from "vue";
import Vuex from "vuex";
import league from "./league";
import { LEAGUE, FETCH_DATA } from "./league/types";
import team from "./team";
import { TEAM } from "./team/types";
import { storageService } from "@/services";
import { SET_LEAGUES, INIT_LEAGUE } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagues: [],
  },
  mutations: {
    [SET_LEAGUES](state, leagues) {
      state.leagues = leagues;
    },
  },
  actions: {
    async [INIT_LEAGUE]({ commit, dispatch }) {
      if (storageService.has("leagues")) {
        const leagues = storageService.get("leagues");
        const promises = [];
        for (const league of leagues) {
          const promise = dispatch(`${LEAGUE}/${FETCH_DATA}`, league, {
            root: true,
          });
          promises.push(promise);
        }

        await Promise.all(promises);
        commit(SET_LEAGUES, leagues);
      }
      return true;
    },
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
