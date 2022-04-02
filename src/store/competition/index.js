import { footballApi } from "@/api";
import {
  LIST,
  INIT,
  SET_LIST,
  GET_COMPETITION,
  GET_COMPETITIONS,
  FETCH_COMPETITIONS,
  HAS_COMPETITION,
} from "./types";

export default {
  namespaced: true,
  state: () => ({
    [LIST]: [],
  }),
  getters: {
    [HAS_COMPETITION](state) {
      return (id) => state[LIST].some((c) => c.id === id);
    },
    [GET_COMPETITION](state) {
      return (id) => state[LIST].find((c) => c.id === id);
    },
    [GET_COMPETITIONS](state) {
      return (ids) => state[LIST].filter((c) => ids.includes(c.id));
    },
  },
  mutations: {
    [SET_LIST](state, competitions) {
      state[LIST] = competitions;
    },
  },
  actions: {
    async [INIT]({ dispatch }) {
      await dispatch(FETCH_COMPETITIONS);
      return true;
    },
    async [FETCH_COMPETITIONS]({ commit }, query = "?plan=TIER_ONE") {
      const { data } = await footballApi.get(`competitions${query}`);
      const competitions = data.competitions;
      commit(SET_LIST, competitions);
      return competitions;
    },
  },
};
