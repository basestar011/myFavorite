<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <span class="text-h5">내 관심 축구 리그</span>
        <span>
          <router-link to="/settings" class="d-flex align-center">
            설정&nbsp;
            <v-icon small>mdi-cog</v-icon>
          </router-link>
        </span>
      </v-col>
      <v-col
        :cols="small"
        :sm="small"
        :md="cols"
        :lg="cols"
        :xl="cols"
        v-for="league in leagues"
        :key="league"
      >
        <FetchLeagueData :code="league">
          <template v-slot="{ loading, code, data }">
            <LeagueStanding
              :loading="loading"
              :code="code"
              :data="data"
              :simple="simple"
            />
          </template>
        </FetchLeagueData>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FetchLeagueData from "@data/FetchLeagueData.vue";
import LeagueStanding from "./LeagueStanding.vue";

export default {
  name: "LeagueStandings",
  data() {
    return {
      small: 12,
      wide: 6,
    };
  },
  props: {
    leagues: {
      type: Array,
      default: () => [],
    },
    simple: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FetchLeagueData,
    LeagueStanding,
  },
  computed: {
    cols() {
      return this.simple ? this.wide : this.small;
    },
  },
};
</script>

<style></style>
