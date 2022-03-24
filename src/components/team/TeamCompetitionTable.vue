<template>
  <v-list dense>
    <v-list-item-title>대회 정보</v-list-item-title>
    <v-divider></v-divider>
    <v-list-item v-for="competition in competitions" :key="competition.id">
      <v-list-item-content>
        <v-list-item-subtitle>
          {{ `league.${competition.id}` | translate(competition.name) }}
          ({{ competition.area.name }})
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "TeamCompetition",
  props: {
    competitions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
