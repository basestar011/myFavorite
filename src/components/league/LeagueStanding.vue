<template>
  <v-card outlined>
    <template v-if="loading">
      <BasicSpinner color="primary" style="width: 100%" />
    </template>
    <template v-else>
      <LeagueStandingTitle :league="data.info" />
      <v-divider></v-divider>
      <LeagueStandingTableSimple
        v-if="simple"
        :headers="simpleHeaders"
        :loading="loading"
        :data="data.standings"
        :maxStanding="10"
      />
      <LeagueStandingTable
        v-else
        :headers="headers"
        :loading="loading"
        :data="data.standings"
      />
    </template>
  </v-card>
</template>

<script>
import BasicSpinner from "@common/BasicSpinner.vue";
import LeagueStandingTitle from "./LeagueStandingTitle.vue";
import LeagueStandingTable from "./LeagueStandingTable.vue";
import LeagueStandingTableSimple from "./LeagueStandingTableSimple.vue";

export default {
  name: "LeagueStanding",
  components: {
    BasicSpinner,
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
      type: Object,
      default: () => {},
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
      simpleHeaders: ["순위", "팀명", "경기수", "승", "무", "패", "승점"],
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
