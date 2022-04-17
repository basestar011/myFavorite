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
      <template v-if="hasSubscriptions">
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
      </template>
      <template v-else>
        <v-col :cols="small" :sm="small" :md="cols" :lg="cols" :xl="cols">
          <v-subheader>관심 있는 리그를 구독해보세요!!</v-subheader>
        </v-col>
      </template>
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
      leagues: this.$store.state.subscription,
    };
  },
  props: {
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
    hasSubscriptions() {
      return this.leagues.length > 0;
    },
    cols() {
      return this.simple ? this.wide : this.small;
    },
  },
};
</script>

<style></style>
