<template>
  <v-list class="d-flex overflow-auto">
    <v-list-item
      v-for="competition in competitions"
      :key="competition.id"
      class="list-item px-1"
    >
      <v-list-item-content class="py-0">
        <v-list-item-title>
          <v-chip small color="grey" text-color="white" class="mr-1">
            {{ `league.${competition.id}` | translate(competition.name) }}
          </v-chip>
        </v-list-item-title>
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

<style>
.list-item {
  min-height: 30px !important;
  flex: 0 0 0;
}
</style>
