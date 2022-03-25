<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="league in leagues" :key="league">
        <FetchLeagueData :code="league">
          <template v-slot="{ loading, code, data }">
            <!-- TODO: LeagueTableSimple 컴포넌트 추가 (simple props로 적용하도록) -->
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
};
</script>

<style></style>
