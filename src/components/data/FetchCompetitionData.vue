<template>
  <v-sheet>
    <slot></slot>
  </v-sheet>
</template>

<script>
export default {
  name: "FetchAllCompetitionData",
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style></style>
