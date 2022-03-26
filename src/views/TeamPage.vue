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
          <v-col cols="12">
            <BasicSpinner color="primary" style="width: 100%" />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="9">
            <span class="text-h5">대회 일정</span>
            <TeamMatchTable :matches="matches" :teamId="info.id" />
          </v-col>
          <v-col cols="3">
            <TeamCompetition :competitions="info.activeCompetitions" />
          </v-col>
          <v-col cols="12">
            <span class="text-h5">선수단</span>
            <TeamSquadTable :squad="info.squad" />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </FetchTeamData>
</template>

<script>
import BasicSpinner from "@/components/common/BasicSpinner.vue";
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
    BasicSpinner,
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
  },
};
</script>

<style scoped></style>
