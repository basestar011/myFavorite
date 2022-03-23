<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="league in leagues" :key="league">
        <FetchLeagueData :code="league">
          <template v-slot="{ loading }">
            <LeagueTable :code="league" :loading="loading" />
          </template>
        </FetchLeagueData>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FetchLeagueData from "@data/FetchLeagueData.vue";
import LeagueTable from "@table/LeagueTable.vue";

export default {
  name: "LeagueStandings",
  props: {
    leagues: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    FetchLeagueData,
    LeagueTable,
  },
};
</script>

<style></style>
