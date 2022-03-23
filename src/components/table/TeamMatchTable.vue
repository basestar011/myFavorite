<template>
  <ul>
    <li v-for="match in matches" :key="match.id">
      <p>
        {{ `league.${match.competition.id}` | translate }}
        {{ match.matchday }}경기
      </p>
      <p>{{ match.status }}</p>
      <p>
        홈 | {{ `teams.${match.homeTeam.id}` | translate }} :
        {{ match.score.fullTime.homeTeam }}
      </p>
      <p>
        원정 | {{ `teams.${match.awayTeam.id}` | translate }} :
        {{ match.score.fullTime.awayTeam }}
      </p>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import { TEAM, MATCHES } from "@/store/team/types";

export default {
  name: "TeamMatch",
  computed: {
    ...mapState(TEAM, [MATCHES]),
  },
};
</script>

<style></style>
