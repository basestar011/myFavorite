import { footballApi } from "@/api";
import {
  LIST,
  SET_LIST,
  GET_COMPETITION,
  GET_COMPETITIONS,
  FETCH_COMPETITIONS,
  HAS_COMPETITION,
  GET_LIST_EXCEPT,
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
    // 특정 리그 제외한 리그 목록 가져올 수 있는 함수 반환
    // except : 제외하고 싶은 리그 코드 배열
    [GET_LIST_EXCEPT](state) {
      return (except) => state[LIST].filter((c) => !except.includes(c.id));
    },
  },
  mutations: {
    [SET_LIST](state, competitions) {
      state[LIST] = competitions;
    },
  },
  actions: {
    async [FETCH_COMPETITIONS]({ commit }, query = "?plan=TIER_ONE") {
      const { data } = await footballApi.get(`competitions${query}`);
      const competitions = data.competitions;
      commit(SET_LIST, competitions);
      return competitions;
    },
  },
};
