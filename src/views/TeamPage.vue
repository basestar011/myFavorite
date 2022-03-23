<template>
  <FetchTeamData :code="id">
    <template v-slot="{ loading, code, info, matches }">
      <v-container>
        <v-row>
          <v-col cols="12" class="pa-0">
            <!-- TeamPage Header -->
            <div class="d-flex justify-start align-center">
              <v-img
                :src="loading ? '' : info.crestUrl"
                alt="팀로고"
                class="team_logo flex-grow-0 mr-3"
              />
              <div class="flex-grow-1">
                <h1>{{ `teams.${code}` | translate(info.name) }}</h1>
                <span class="caption">
                  최종 업데이트일 :
                  {{ loading ? "" : info.lastUpdated | formatDate("LL") }}
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="px-0">
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row v-if="loading">
          <v-col cols="12">loading...</v-col>
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
import FetchTeamData from "@data/FetchTeamData.vue";
import TeamMatchTable from "@table/TeamMatchTable.vue";
import TeamSquadTable from "@table/TeamSquadTable.vue";
import TeamCompetitionTable from "@table/TeamCompetitionTable.vue";

export default {
  name: "TeamPage",
  components: {
    FetchTeamData,
    TeamSquadTable,
    TeamMatchTable,
    TeamCompetitionTable,
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

<style scoped>
.team_logo {
  width: 60px;
  height: 60px;
}
</style>
