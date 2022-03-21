import { footballApi } from "@/api";

export default {
  namespaced: true,
  state: () => ({
    id: "",
    matches: [],
  }),
  getters: {},
  mutations: {
    setId(state, id) {
      state.id = id;
    },
    setMatches(state, matches) {
      state.matches = matches;
    },
  },
  actions: {
    async fetchAllData({ commit, dispatch }, teamId) {
      commit("setId", teamId);

      await dispatch("fetchMatchData", teamId);
      return true;
    },
    async fetchMatchData({ commit }, teamId) {
      const { data } = await footballApi.get(`teams/${teamId}/matches`);
      commit("setMatches", data.matches);
      return data;
    },
  },
};
