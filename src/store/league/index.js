import axios from "axios";

export default {
  namespaced: true,
  state: () => ({}),
  getters: {
    hasData(state) {
      return (leagueCode) =>
        state[leagueCode] !== undefined && state[leagueCode].length > 0;
    },
    getData(state) {
      return (leagueCode) => state[leagueCode];
    },
  },
  mutations: {
    setLeague(state, { id, data }) {
      state[id] = data;
    },
  },
  actions: {
    async fetchData({ commit, getters }, leagueCode) {
      if (getters.hasData(leagueCode)) {
        return getters.getData(leagueCode);
      }

      const config = {
        headers: {
          "X-Auth-Token": "444df22fc4ac49fc98030bc4953b230d",
        },
      };
      const { data } = await axios.get(
        `https://api.football-data.org/v2/competitions/${leagueCode}/standings`,
        config
      );
      const { standings } = data;
      const leagueData = standings[0].table.map((data) => ({
        ...data,
        team: data.team.id,
        id: data.team.id,
        logo: data.team.crestUrl,
      }));
      commit("setLeague", { id: leagueCode, data: leagueData });
      return leagueData;
    },
  },
};
