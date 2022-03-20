<template>
  <div>
    <slot :loading="loading"></slot>
  </div>
</template>

<script>
export default {
  name: "fetchTeamMatchData",
  async created() {
    await this.$store.dispatch("team/fetchAllData", this.$route.params.id);
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
