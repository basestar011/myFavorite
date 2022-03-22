import { footballApi } from "@/api";
import {
  ID,
  MATCHES,
  SET_ID,
  SET_MATCHES,
  FETCH_ALL_DATA,
  FETCH_MATCH_DATA,
} from "./types";

export default {
  namespaced: true,
  state: () => ({
    [ID]: "",
    [MATCHES]: [],
  }),
  getters: {},
  mutations: {
    [SET_ID](state, id) {
      state.id = id;
    },
    [SET_MATCHES](state, matches) {
      state.matches = matches;
    },
  },
  actions: {
    async [FETCH_ALL_DATA]({ commit, dispatch }, teamId) {
      commit(SET_ID, teamId);
      await dispatch(FETCH_MATCH_DATA, teamId);
      return true;
    },
    async [FETCH_MATCH_DATA]({ commit }, teamId) {
      const { data } = await footballApi.get(`teams/${teamId}/matches`);
      commit(SET_MATCHES, data.matches);
      return data;
    },
  },
};
