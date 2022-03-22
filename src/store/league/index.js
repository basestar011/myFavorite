import { footballApi } from "@/api";
import { HAS_DATA, GET_DATA, SET_DATA, FETCH_DATA } from "./types";

export default {
  namespaced: true,
  state: () => ({
    /**
     * leagueCode : [ ...team standings ]
     */
  }),
  getters: {
    [HAS_DATA](state) {
      return (leagueCode) =>
        state[leagueCode] !== undefined && state[leagueCode].length > 0;
    },
    [GET_DATA](state) {
      return (leagueCode) => state[leagueCode];
    },
  },
  mutations: {
    [SET_DATA](state, { id, data }) {
      state[id] = data;
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
      const { standings } = data;
      const leagueData = standings[0].table.map((data) => ({
        ...data,
        team: data.team.id,
        id: data.team.id,
        logo: data.team.crestUrl,
      }));
      commit(SET_DATA, { id: leagueCode, data: leagueData });
      return leagueData;
    },
  },
};
