<template>
  <v-row>
    <v-col cols="12" v-for="code in league" :key="code">
      <LeagueTable :code="code" />
    </v-col>
  </v-row>
</template>

<script>
import LeagueTable from "@table/LeagueTable.vue";

export default {
  name: "MainPage",
  components: {
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
