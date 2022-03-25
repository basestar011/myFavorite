<template>
  <div class="d-flex justify-start align-center">
    <v-img :src="info.crestUrl" alt="팀로고" class="team_logo flex-grow-0 mr-3">
      <template #placeholder>
        <BasicSkeletonLoader type="image" />
      </template>
    </v-img>
    <div class="flex-grow-1">
      <h1>{{ `teams.${code}` | translate(info.name) }}</h1>
      <BasicSkeletonLoader type="text" v-if="loading" />
      <span v-else class="caption">최근 업데이트 {{ lastUpdated }}</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/util";
import BasicSkeletonLoader from "@common/BasicSkeletonLoader.vue";

export default {
  name: "TeamHeader",
  components: {
    BasicSkeletonLoader,
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    info: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    lastUpdated() {
      return this.loading ? "" : formatDate(this.info.lastUpdated, "LL");
    },
  },
};
</script>

<style scoped>
.team_logo {
  width: 60px;
  height: 60px;
}
</style>
