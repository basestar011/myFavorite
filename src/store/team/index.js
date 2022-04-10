import { footballApi } from "@/api";
import {
  ID,
  INFO,
  MATCHES,
  SET_ID,
  SET_INFO,
  SET_MATCHES,
  FETCH_ALL_DATA,
  FETCH_INFO_DATA,
  FETCH_MATCH_DATA,
} from "./types";

export default {
  namespaced: true,
  state: () => ({
    [ID]: "",
    [INFO]: {},
    [MATCHES]: [],
  }),
  getters: {},
  mutations: {
    [SET_ID](state, id) {
      state[ID] = id;
    },
    [SET_INFO](state, info) {
      state[INFO] = info;
    },
    [SET_MATCHES](state, matches) {
      state[MATCHES] = matches;
    },
  },
  actions: {
    async [FETCH_ALL_DATA]({ commit, dispatch }, teamId) {
      commit(SET_ID, teamId);
      const infoPromise = dispatch(FETCH_INFO_DATA, teamId);
      const matchPromise = dispatch(FETCH_MATCH_DATA, teamId);
      await Promise.all([infoPromise, matchPromise]);

      return true;
    },
    async [FETCH_INFO_DATA]({ commit }, teamId) {
      const { data } = await footballApi.get(`teams/${teamId}`);
      commit(SET_INFO, data);
      return data;
    },
    async [FETCH_MATCH_DATA]({ commit }, teamId) {
      const { data } = await footballApi.get(`teams/${teamId}/matches`);
      commit(SET_MATCHES, data.matches);
      return data;
    },
  },
};
