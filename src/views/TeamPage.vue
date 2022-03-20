<template>
  <div>
    <h1>팀 페이지</h1>
    <div>
      <FetchTeamData>
        <template v-slot="{ loading }">
          <div v-if="loading">로딩중.....</div>
          <div v-else>로딩완료!</div>
        </template>
      </FetchTeamData>
    </div>
  </div>
</template>

<script>
import FetchTeamData from "@data/FetchTeamData.vue";

export default {
  name: "TeamPage",
  components: {
    FetchTeamData,
  },
};
</script>

<style></style>
