<template>
  <v-card-title class="d-flex justify-center">
    {{ `league.${leagueCode}` | translate }}
  </v-card-title>
</template>

<script>
export default {
  name: "LeagueStandingTitle",
  props: {
    leagueCode: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
