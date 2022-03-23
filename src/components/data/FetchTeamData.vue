<template>
  <!-- TODO: dynamic component로 변경할 것 -->
  <v-sheet>
    <slot
      :loading="loading"
      :code="code"
      :info="info"
      :matches="matches"
    ></slot>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
import { TEAM, INFO, MATCHES, FETCH_ALL_DATA } from "@/store/team/types";

export default {
  name: "fetchTeamMatchData",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  async created() {
    await this.$store.dispatch(`${TEAM}/${FETCH_ALL_DATA}`, this.code);
    this.loading = false;
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(TEAM, [INFO, MATCHES]),
  },
};
</script>

<style></style>
