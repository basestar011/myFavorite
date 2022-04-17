import { footballApi } from "@/api";
import { HAS_DATA, GET_DATA, SET_DATA, FETCH_DATA, SET_REFRESH } from "./types";

export default {
  namespaced: true,
  state: () => ({
    // 리그 데이터를 다시 가져와야 하는지 여부
    shouldRefresh: false,
    /**
     * leagueCode : [ info, standings ]
     */
  }),
  getters: {
    [HAS_DATA](state) {
      return (leagueCode) =>
        state[leagueCode] !== undefined &&
        state[leagueCode].info !== undefined &&
        state[leagueCode].standings.length != 0;
    },
    [GET_DATA](state) {
      return (leagueCode) => state[leagueCode];
    },
  },
  mutations: {
    [SET_DATA](state, { id, info, standings }) {
      state[id] = { info, standings };
    },
    [SET_REFRESH](state, refresh) {
      state.shouldRefresh = refresh;
    },
  },
  actions: {
    async [FETCH_DATA]({ commit, getters }, leagueCode) {
      if (getters[HAS_DATA](leagueCode)) {
        return getters[GET_DATA](leagueCode);
      }

      const { data } = await footballApi.get(
        `competitions/${leagueCode}/standings`
      );
      const { standings, competition } = data;
      const leagueData = standings[0].table.map((data) => ({
        ...data,
        // team: data.team.id,
        id: data.team.id,
        logo: data.team.crestUrl,
      }));
      commit(SET_DATA, {
        id: leagueCode,
        info: competition,
        standings: leagueData,
      });
      return leagueData;
    },
  },
};
