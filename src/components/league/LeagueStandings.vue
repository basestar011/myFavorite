<template>
  <v-container>
    <v-row>
      <v-col :cols="cols" v-for="league in leagues" :key="league">
        <FetchLeagueData :code="league">
          <template v-slot="{ loading, code, data }">
            <LeagueStanding
              :loading="loading"
              :code="code"
              :data="data"
              :simple="simple"
            />
          </template>
        </FetchLeagueData>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FetchLeagueData from "@data/FetchLeagueData.vue";
import LeagueStanding from "./LeagueStanding.vue";

export default {
  name: "LeagueStandings",
  props: {
    leagues: {
      type: Array,
      default: () => [],
    },
    simple: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FetchLeagueData,
    LeagueStanding,
  },
  computed: {
    cols() {
      return this.simple ? 6 : 12;
    },
  },
};
</script>

<style></style>
