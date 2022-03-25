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
          <v-col cols="6">
            <span class="text-subtitle-1" style="display: block">대회</span>
            <v-chip
              v-for="competition in info.activeCompetitions"
              :key="competition.id"
              small
              color="primary"
              text-color="white"
              class="mr-1"
            >
              {{ `league.${competition.id}` | translate(competition.name) }}
            </v-chip>
          </v-col>
          <v-col cols="8">
            <v-card>
              <v-card-title class="text-center">일정</v-card-title>
              <v-card-text>
                <TeamMatchTable :matches="matches" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
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
import { TeamHeader, TeamMatchTable, TeamSquadTable } from "@team";

export default {
  name: "TeamPage",
  components: {
    BasicSpinner,
    FetchTeamData,
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
