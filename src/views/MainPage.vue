<template>
  <v-row>
    <v-col cols="12" class="main_col">
      <LeagueStandings simple />
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
};
</script>
<style>
.main_col {
  min-width: 400px;
}
</style>
