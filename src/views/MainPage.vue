<template>
  <v-row>
    <v-col cols="12" v-for="code in league" :key="code">
      <FetchLeagueData :code="code">
        <template v-slot="{ loading }">
          <LeagueTable :code="code" :loading="loading" />
        </template>
      </FetchLeagueData>
    </v-col>
  </v-row>
</template>

<script>
import FetchLeagueData from "@data/FetchLeagueData.vue";
import LeagueTable from "@table/LeagueTable.vue";

export default {
  name: "MainPage",
  components: {
    FetchLeagueData,
    LeagueTable,
  },
  data() {
    return {
      league: ["PD", "PL", "SA", "FL1"],
    };
  },
};
</script>
<style></style>
