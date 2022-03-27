<template>
  <FetchTeamData :code="id">
    <template v-slot="{ loading, code, info, matches }">
      <v-container>
        <v-row>
          <v-col cols="12" class="pa-0">
            <TeamHeader :loading="loading" :code="code" :info="info" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="px-0">
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row v-if="loading">
          <v-col cols="12" md="7" lg="7" xl="7" sm="12">
            <BasicSkeletonLoader type="table" />
          </v-col>
          <v-col cols="12" md="5" lg="5" xl="5" sm="12">
            <BasicSkeletonLoader type="table" />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12" md="7" lg="7" xl="7" sm="12">
            <div>
              <span class="text-h5">대회 일정</span>
              <TeamCompetition :competitions="info.activeCompetitions" />
            </div>
            <TeamMatchTable :matches="matches" :teamId="info.id" />
          </v-col>
          <v-col cols="12" md="5" lg="5" xl="5" sm="12">
            <div class="text-h5 mr-2 my-2">선수단</div>
            <TeamSquadTable :squad="info.squad" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </FetchTeamData>
</template>

<script>
import BasicSkeletonLoader from "@/components/common/BasicSkeletonLoader.vue";
import FetchTeamData from "@data/FetchTeamData.vue";
import {
  TeamHeader,
  TeamMatchTable,
  TeamSquadTable,
  TeamCompetition,
} from "@team";

export default {
  name: "TeamPage",
  components: {
    BasicSkeletonLoader,
    FetchTeamData,
    TeamCompetition,
    TeamSquadTable,
    TeamMatchTable,
    TeamHeader,
  },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.$vuetify.breakpoint);
  },
};
</script>

<style scoped></style>
