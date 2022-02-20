<template>
  <v-row>
    <v-col cols="12" v-for="code in league" :key="code">
      <fetch-league-data :league-code="code" />
    </v-col>
  </v-row>
</template>

<script>
import FetchLeagueData from "@/components/FetchLeagueData.vue";
export default {
  name: "MainPage",
  components: {
    FetchLeagueData,
  },
  data() {
    return {
      league: ["PD", "PL", "SA", "FL1"],
    };
  },
};
</script>
<style></style>
