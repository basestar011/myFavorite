<template>
  <v-data-table
    :headers="headers"
    :items="matches"
    item-key="id"
    dense
    disable-sort
    disable-filtering
    disable-pagination
    hide-default-footer
    hide-default-header
  >
    <template #header="{ props: { headers } }">
      <thead>
        <tr>
          <th v-for="(header, i) in headers" :key="i" :class="header.class">
            <span v-if="header.value === 'date_league'">날짜/리그</span>
            <span v-if="header.value === 'match'">경기</span>
          </th>
        </tr>
      </thead>
    </template>
    <template #[`item.date_league`]="{ item }">
      <div class="d-flex flex-column">
        <span>{{ item.utcDate | formatDate("YYYY.MM.DD (dd) a h:mm") }}</span>
        <span>{{ `league.${item.competition.id}` | translate }}</span>
      </div>
    </template>
    <template #[`item.match`]="{ item }">
      <div class="d-flex">
        <span>{{ `teams.${item.homeTeam.id}` | translate }}</span>
        <span v-if="isMatchFinished(item)" class="match_score">
          {{ item.score.fullTime.homeTeam }} :
          {{ item.score.fullTime.awayTeam }}
        </span>
        <span v-else class="match_versus">vs</span>
        <span>{{ `teams.${item.awayTeam.id}` | translate }}</span>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from "vuex";
import { TEAM, MATCHES } from "@/store/team/types";

export default {
  name: "TeamMatch",
  data() {
    return {
      headers: [
        {
          text: "",
          value: "date_league",
          align: "center",
          class: "table-col",
        },
        {
          text: "경기",
          value: "match",
          align: "center",
          class: "table-col",
        },
      ],
    };
  },
  computed: {
    ...mapState(TEAM, [MATCHES]),
  },
  methods: {
    isMatchFinished(match) {
      return match.status === "FINISHED";
    },
  },
};
</script>

<style scoped>
.match_score,
.match_versus {
  font-weight: 700;
  margin: 0 5px;
}

.table-col {
  text-align: center !important;
}
</style>
