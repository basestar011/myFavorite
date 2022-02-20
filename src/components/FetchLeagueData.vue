<template>
  <league-table
    :items="fetchedData"
    :name="leagueCode"
    :loading="loading"
  ></league-table>
</template>

<script>
import axios from "axios";
import LeagueTable from "./LeagueTable.vue";

export default {
  name: "FetchLeagueData",
  components: { LeagueTable },
  props: {
    leagueCode: {
      type: String,
      required: true,
    },
  },
  created() {
    const config = {
      headers: {
        "X-Auth-Token": "444df22fc4ac49fc98030bc4953b230d",
      },
    };
    axios
      .get(
        `http://api.football-data.org/v2/competitions/${this.leagueCode}/standings`,
        config
      )
      .then(({ data }) => {
        const { competition, standings } = data;
        this.league = competition.name;
        this.fetchedData = standings[0].table.map((data) => ({
          ...data,
          team: data.team.id,
          id: data.team.id,
          logo: data.team.crestUrl,
        }));
        this.loading = false;
      });
  },
  data() {
    return {
      fetchedData: [],
      loading: true,
    };
  },
};
</script>

<style></style>
