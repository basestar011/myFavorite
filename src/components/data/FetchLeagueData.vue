<template>
  <v-card outlined>
    <slot :loading="loading" :code="code"></slot>
  </v-card>
</template>

<script>
export default {
  name: "FetchLeagueData",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  async created() {
    await this.$store.dispatch("league/fetchData", this.code);
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
