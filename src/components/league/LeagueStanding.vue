<template>
  <v-card outlined>
    <LeagueStandingTitle :leagueCode="code" />
    <v-divider></v-divider>
    <LeagueStandingTableSimple v-if="simple" :loading="loading" :data="data" />
    <LeagueStandingTable
      v-else
      :headers="headers"
      :loading="loading"
      :data="data"
    />
  </v-card>
</template>

<script>
import LeagueStandingTitle from "./LeagueStandingTitle.vue";
import LeagueStandingTable from "./LeagueStandingTable.vue";
import LeagueStandingTableSimple from "./LeagueStandingTableSimple.vue";

export default {
  name: "LeagueStanding",
  components: {
    LeagueStandingTitle,
    LeagueStandingTable,
    LeagueStandingTableSimple,
  },
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    code: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
    simple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "순위",
          value: "position",
          align: "center",
          class: "table-col",
        },
        { text: "팀명", class: "table-col", value: "team" },
        {
          text: "경기수",
          value: "playedGames",
          align: "center",
          class: "table-col",
        },
        { text: "승점", value: "points", align: "center", class: "table-col" },
        { text: "승", value: "won", align: "center", class: "table-col" },
        { text: "무", value: "draw", align: "center", class: "table-col" },
        { text: "패", value: "lost", align: "center", class: "table-col" },
        { text: "득", value: "goalsFor", align: "center", class: "table-col" },
        {
          text: "실",
          value: "goalsAgainst",
          align: "center",
          class: "table-col",
        },
        {
          text: "득실차",
          value: "goalDifference",
          align: "center",
          class: "table-col",
        },
      ],
    };
  },
};
</script>

<style scoped>
.table-col {
  padding: 0 8px !important;
  text-align: center !important;
}
</style>
