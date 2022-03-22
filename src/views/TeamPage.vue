<template>
  <FetchTeamData :code="id">
    <template v-slot="{ loading }">
      <v-container>
        <v-row v-if="loading">
          <v-col cols="12">loading...</v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12">
            <h1>{{ `teams.${id}` | translate }}</h1>
            <h5>마지막 업데이트일 : {{ lastUpdated | formatDate("LL") }}</h5>
          </v-col>
          <v-col cols="12">
            <h1>팀 선수단</h1>
            <TeamSquadTable />
          </v-col>
          <v-col cols="12">
            <h1>일정</h1>
            <TeamMatchTable />
          </v-col>
          <v-col cols="12">
            <h1>진행중인 대회</h1>
            <TeamCompetitionTable />
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
import { mapGetters } from "vuex";
import { TEAM, GET_LAST_UPDATED } from "@/store/team/types";

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
  computed: {
    ...mapGetters(TEAM, {
      lastUpdated: GET_LAST_UPDATED,
    }),
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style></style>
