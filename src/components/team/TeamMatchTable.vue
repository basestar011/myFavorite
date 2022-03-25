<template>
  <v-simple-table>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">날짜/리그</th>
          <th class="text-left">경기</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.id">
          <td>
            <div>{{ match.utcDate | formatDate("YYYY.MM.DD. HH:mm") }}</div>
            <div>{{ `league.${match.competition.id}` | translate }}</div>
          </td>
          <td>
            <span>{{
              `teams.${match.homeTeam.id}` | translate(match.homeTeam.name)
            }}</span>
            <span v-if="isMatchFinished(match)" class="match_score">
              {{ match.score.fullTime.homeTeam }} :
              {{ match.score.fullTime.awayTeam }}
            </span>
            <span v-else class="match_versus">vs</span>
            <span>{{
              `teams.${match.awayTeam.id}` | translate(match.awayTeam.name)
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
  },
  methods: {
    isMatchFinished(match) {
      return match.status === "FINISHED";
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
</style>
