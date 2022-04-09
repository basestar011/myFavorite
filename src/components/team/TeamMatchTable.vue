<template>
  <v-simple-table class="elevation-1">
    <template #default>
      <thead>
        <tr>
          <th class="text-left match-header1">날짜/대회</th>
          <th class="text-left match-header2">경기</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.id">
          <td class="text-caption px-1">
            {{ match.utcDate | formatDate("YYYY.MM.DD. HH:mm (dd)") }}
            <v-icon v-if="isHome(match)" small>mdi-home</v-icon>
          </td>
          <td>
            <TeamMatchTableDetail :match="match" :isHome="isHome(match)" />
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import TeamMatchTableDetail from "./TeamMatchTableDetail.vue";
export default {
  name: "TeamMatch",
  components: {
    TeamMatchTableDetail,
  },
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
    isHome(match) {
      return match.homeTeam.id === this.teamId;
    },
  },
};
</script>

<style>
.match-header1 {
  min-width: 165px;
}

.match-header2 {
  min-width: 245px;
}
.match_score {
  font-weight: 700;
  margin: 0 5px;
}

.winner {
  color: red;
}
</style>
