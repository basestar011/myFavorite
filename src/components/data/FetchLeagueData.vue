<template>
  <v-sheet>
    <slot :loading="loading" :code="code"></slot>
  </v-sheet>
</template>

<script>
import { LEAGUE, FETCH_DATA } from "@/store/league/types";

export default {
  name: "FetchLeagueData",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  async created() {
    await this.$store.dispatch(`${LEAGUE}${FETCH_DATA}`, this.code);
    this.loading = false;
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style></style>
