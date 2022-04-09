<template>
  <div>
    <div class="d-flex">
      <v-chip x-small color="grey" text-color="white" class="mr-1 px-1">
        {{
          `league.${match.competition.id}` | translate(match.competition.name)
        }}
      </v-chip>
    </div>
    <div class="d-flex align-center">
      <span class="mr-2 red--text">vs</span>
      <span class="mr-1">
        {{ `teams.name.${opponent.id}` | translate(opponent.name) }}
      </span>
      <template v-if="isFinished">
        <span class="mr-1 font-weight-bold">
          {{ ourTeam.score }} : {{ opponent.score }}
        </span>
        <v-chip
          x-small
          :color="result.color"
          text-color="white"
          class="mx-1 px-1 font-weight-bold"
        >
          {{ result.text }}
        </v-chip>
      </template>
      <!-- <v-chip
        v-else
        x-small
        color="orange"
        text-color="white"
        class="mx-1 px-1 font-weight-bold"
      >
        예정
      </v-chip> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMatchTableDetail",
  props: {
    match: {
      type: Object,
      required: true,
    },
    isHome: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isFinished() {
      return this.match.status === "FINISHED";
    },
    ourTeam() {
      const homeAway = this.isHome ? "homeTeam" : "awayTeam";
      return {
        homeAway,
        score: this.match.score.fullTime[homeAway],
      };
    },
    opponent() {
      const homeAway = this.isHome ? "awayTeam" : "homeTeam";
      return {
        ...this.match[homeAway], // id, name
        score: this.match.score.fullTime[homeAway],
      };
    },
    result() {
      const winner = this.match.score.winner;
      const result = {};
      switch (winner) {
        case "DRAW":
          result.text = "무";
          result.color = "orange";
          break;
        case "HOME_TEAM":
          result.text = this.isHome ? "승" : "패";
          result.color = this.isHome ? "blue" : "red";
          break;
        case "AWAY_TEAM":
          result.text = this.isHome ? "패" : "승";
          result.color = this.isHome ? "red" : "blue";
          break;
      }
      return result;
    },
  },
};
</script>

<style scoped></style>
