<template>
  <ul>
    <li v-for="competition in competitions" :key="competition.id">
      <p>
        {{ `league.${competition.id}` | translate(competition.name) }}
        ({{ competition.area.name }})
      </p>
    </li>
  </ul>
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
