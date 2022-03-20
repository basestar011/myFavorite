import axios from "axios";

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
      const config = {
        headers: {
          "X-Auth-Token": "444df22fc4ac49fc98030bc4953b230d",
        },
      };
      const { data } = await axios.get(
        `https://api.football-data.org/v2/teams/${teamId}/matches`,
        config
      );
      commit("setMatches", data.matches);
      return data;
    },
  },
};
