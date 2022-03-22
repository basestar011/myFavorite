import { footballApi } from "@/api";
import {
  ID,
  INFO,
  MATCHES,
  GET_LAST_UPDATED,
  GET_SQUAD,
  GET_ACTIVE_COMPETS,
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
  getters: {
    [GET_LAST_UPDATED](state) {
      return state[INFO].lastUpdated;
    },
    [GET_SQUAD](state) {
      return state[INFO].squad;
    },
    [GET_ACTIVE_COMPETS](state) {
      return state[INFO].activeCompetitions;
    },
  },
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
      await dispatch(FETCH_INFO_DATA, teamId);
      await dispatch(FETCH_MATCH_DATA, teamId);
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
