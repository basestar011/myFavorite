<template>
  <FetchTeamData :code="id">
    <h1>{{ `teams.${id}` | translate }}</h1>
    <template v-slot="{ loading }">
      <div v-if="loading">로딩중.....</div>
      <div v-else>로딩완료!</div>
    </template>
  </FetchTeamData>
</template>

<script>
import FetchTeamData from "@data/FetchTeamData.vue";

export default {
  name: "TeamPage",
  components: {
    FetchTeamData,
  },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style></style>
