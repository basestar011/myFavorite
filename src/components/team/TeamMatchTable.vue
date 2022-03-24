<template>
  <v-data-table
    :headers="headers"
    :items="matches"
    item-key="id"
    disable-sort
    disable-filtering
    disable-pagination
    hide-default-footer
    class="elevation-2"
  >
    <template #[`item.date_league`]="{ item }">
      <div>{{ item.utcDate | formatDate("YYYY.MM.DD HH:mm") }}</div>
      <div>{{ `league.${item.competition.id}` | translate }}</div>
    </template>
    <template #[`item.match`]="{ item }">
      <span>{{
        `teams.${item.homeTeam.id}` | translate(item.homeTeam.name)
      }}</span>
      <span v-if="isMatchFinished(item)" class="match_score">
        {{ item.score.fullTime.homeTeam }} :
        {{ item.score.fullTime.awayTeam }}
      </span>
      <span v-else class="match_versus">vs</span>
      <span>{{
        `teams.${item.awayTeam.id}` | translate(item.awayTeam.name)
      }}</span>
    </template>
  </v-data-table>
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
  data() {
    return {
      headers: [
        {
          text: "날짜/리그",
          value: "date_league",
          align: "center",
          divider: true,
          width: "10%",
        },
        {
          text: "경기",
          value: "match",
          align: "center",
          width: "30%",
        },
      ],
    };
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

.table-col {
  text-align: center !important;
}
</style>
