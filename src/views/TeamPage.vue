<template>
  <FetchTeamData :code="id">
    <template v-slot="{ loading, code, info, matches }">
      <v-container>
        <v-row>
          <v-col cols="12" class="pa-0">
            <!-- TeamPage Header -->
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
            <BasicSpinner />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12">
            <!-- TeamPage Competitions -->
            <h1>진행중인 대회</h1>
            <TeamCompetitionTable :competitions="info.activeCompetitions" />
          </v-col>
          <v-col cols="12">
            <!-- TeamPage Matches -->
            <h1>일정</h1>
            <TeamMatchTable :matches="matches" />
          </v-col>
          <v-col cols="12">
            <!-- TeamPage Squad -->
            <h1>팀 선수단</h1>
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
  TeamCompetitionTable,
  TeamMatchTable,
  TeamSquadTable,
} from "@team";

export default {
  name: "TeamPage",
  components: {
    BasicSpinner,
    FetchTeamData,
    TeamSquadTable,
    TeamMatchTable,
    TeamCompetitionTable,
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
