<template>
  <v-simple-table class="elevation-1">
    <template #default>
      <thead>
        <tr>
          <th class="text-left">날짜/대회</th>
          <th class="text-left">경기</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.id">
          <td>
            <div>{{ match.utcDate | formatDate("YYYY.MM.DD. HH:mm") }}</div>
            <div>
              {{
                `league.${match.competition.id}`
                  | translate(match.competition.name)
              }}
            </div>
          </td>
          <td>
            <span :class="match.score.winner === 'HOME_TEAM'">{{
              `teams.fullname.${match.homeTeam.id}`
                | translate(match.homeTeam.name)
            }}</span>
            <span v-if="isMatchFinished(match)" class="match_score">
              <span>{{ match.score.fullTime.homeTeam }}</span> :
              <span>{{ match.score.fullTime.awayTeam }}</span>
            </span>
            <span v-else class="match_versus">vs</span>
            <span>{{
              `teams.fullname.${match.awayTeam.id}`
                | translate(match.awayTeam.name)
            }}</span>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "TeamMatch",
  props: {
    matches: {
      type: Array,
      default: () => [],
    },
    teamId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    isMatchFinished(match) {
      return match.status === "FINISHED";
    },
    isHomeWin(match) {
      return match.score.winner === "HOME_TEAM";
    },
    isAwayWin(match) {
      return match.score.winner === "AWAY_TEAM";
    },
    computed: {
      matchInfo() {
        return this.matches.map((match) => {
          const {
            id,
            competition,
            utcDate,
            status,
            score,
            homeTeam,
            awayTime,
          } = match;

          return {
            id,
            competition: {
              id: competition.id,
              name: competition.name,
            },
            date: utcDate,
            isFinished: status === "FINISHED",
          };
        });
      },
    },
  },
};
</script>

<style>
.match_score,
.match_versus {
  font-weight: 700;
  margin: 0 5px;
}

.winner {
  color: red;
}
</style>
