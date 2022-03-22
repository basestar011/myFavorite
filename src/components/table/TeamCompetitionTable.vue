<template>
  <ul>
    <li v-for="competition in competitions" :key="competition.id">
      <p>{{ competition.name }} ({{ competition.area.name }})</p>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import { TEAM, GET_ACTIVE_COMPETS } from "@/store/team/types";

export default {
  name: "TeamCompetition",
  computed: {
    ...mapGetters(TEAM, {
      competitions: GET_ACTIVE_COMPETS,
    }),
  },
};
</script>

<style></style>
