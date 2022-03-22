<template>
  <v-sheet>
    <slot :loading="loading" :code="code"></slot>
  </v-sheet>
</template>

<script>
import { TEAM, FETCH_ALL_DATA } from "@/store/team/types";

export default {
  name: "fetchTeamMatchData",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  async created() {
    await this.$store.dispatch(`${TEAM}${FETCH_ALL_DATA}`, this.code);
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
