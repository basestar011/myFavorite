<template>
  <v-row>
    <v-col cols="12">
      <LeagueStandings :leagues="leagues" />
    </v-col>
  </v-row>
</template>

<script>
import LeagueStandings from "@/components/LeagueStandings.vue";

export default {
  name: "MainPage",
  components: {
    LeagueStandings,
  },
  data() {
    return {
      leagues: ["PD", "PL", "SA", "FL1"],
    };
  },
};
</script>
<style></style>
