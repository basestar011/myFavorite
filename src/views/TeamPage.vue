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
          <v-col cols="12" md="6" lg="6" xl="6" sm="12">
            <BasicSkeletonLoader type="table" />
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6" sm="12">
            <BasicSkeletonLoader type="table" />
          </v-col>
        </v-row>
        <template v-else>
          <v-row>
            <v-col cols="12" md="12" lg="12" xl="12" sm="12">
              <div class="mb-2">
                <span class="text-h5 mb-3">참가 중인 대회</span>
                <TeamCompetition :competitions="info.activeCompetitions" />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" lg="6" xl="6" sm="12">
              <div class="pt-2 mb-2">
                <span class="text-h5">최근 10경기</span>
                <TeamMatchTable
                  :matches="recent10Matches(filterMatch(matches, 'FINISHED'))"
                  :teamId="info.id"
                />
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="6" xl="6" sm="12">
              <div class="pt-2">
                <span class="text-h5">이후 경기 일정</span>
                <TeamMatchTable
                  :matches="
                    scheduled10Matches(filterMatch(matches, 'SCHEDULED'))
                  "
                  :teamId="info.id"
                />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" lg="12" xl="12" sm="12">
              <div class="text-h5 mr-2 my-2">선수단</div>
              <TeamSquadTable :squad="sortPosition(info.squad)" />
            </v-col>
          </v-row>
        </template>
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
  },
  methods: {
    filterMatch(matches, status) {
      return matches.filter((match) => match.status === status);
    },
    recent10Matches(matches) {
      return matches.slice(-10);
    },
    scheduled10Matches(matches) {
      return matches.slice(0, 10);
    },
    sortPosition(squad) {
      const newSquad = [...squad];
      return newSquad.sort((a, b) => {
        if (a.position === null && b.position === null) {
          return (
            a.name.toLowerCase().charCodeAt(0) -
            b.name.toLowerCase().charCodeAt(0)
          );
        }

        if (a.position === null) {
          return 1;
        }

        if (b.position === null) {
          return -1;
        }

        const sorting = {
          Goalkeeper: 1,
          Defence: 2,
          Midfield: 3,
          Attacker: 4,
        };

        return sorting[a.position] - sorting[b.position];
      });
    },
  },
};
</script>

<style scoped></style>
