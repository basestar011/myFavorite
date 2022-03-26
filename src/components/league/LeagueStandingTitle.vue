<template>
  <v-card-title class="d-flex justify-center">
    {{ `league.${league.id}` | translate(league.name) }}
  </v-card-title>
</template>

<script>
export default {
  name: "LeagueStandingTitle",
  props: {
    league: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
