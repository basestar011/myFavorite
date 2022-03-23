<template>
  <!-- TODO: dynamic component로 변경할 것 -->
  <v-sheet>
    <slot :loading="loading" :code="code" :data="leagueData"></slot>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
import { LEAGUE, HAS_DATA, GET_DATA, FETCH_DATA } from "@/store/league/types";

export default {
  name: "FetchLeagueData",
  props: {
    code: {
      type: Number,
      required: true,
    },
  },
  async created() {
    if (this.hasData(this.code)) {
      this.loading = false;
      return;
    }

    await this.$store.dispatch(`${LEAGUE}/${FETCH_DATA}`, this.code);
    this.loading = false;
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(LEAGUE, {
      hasData: HAS_DATA,
      getData: GET_DATA,
    }),
    leagueData() {
      return this.loading ? [] : this.getData(this.code);
    },
  },
};
</script>

<style></style>
