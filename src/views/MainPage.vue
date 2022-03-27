<template>
  <v-row>
    <v-col cols="12" class="main_col">
      <LeagueStandings :leagues="leagues" simple />
    </v-col>
  </v-row>
</template>

<script>
import { LeagueStandings } from "@league";

export default {
  name: "MainPage",
  components: {
    LeagueStandings,
  },
  data() {
    return {
      leagues: [2014, 2021, 2002, 2019, 2015],
    };
  },
};
</script>
<style>
.main_col {
  min-width: 400px;
}
</style>
