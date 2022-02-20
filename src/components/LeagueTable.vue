<template>
  <v-card outlined>
    <v-card-title class="d-flex justify-center">
      {{ `league.${name}` | translate }}
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :item-key="items.id"
      dense
      disable-sort
      disable-filtering
      disable-pagination
      hide-default-footer
      hide-default-header
      :loading="loading"
      loading-text="로딩중!!"
    >
      <template #header="{ props: { headers } }">
        <thead>
          <tr>
            <th v-for="(header, i) in headers" :key="i" :class="header.class">
              <span>{{ header.text }}</span>
            </th>
          </tr>
        </thead>
      </template>
      <template #item.team="{ item }">
        <div class="d-flex">
          <img :src="item.logo" width="20px" height="20px" class="mr-2" />
          {{ `teams.${item.team}` | translate }}
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "LeagueTable",
  props: {
    name: {
      type: String,
      default: () => "리그",
    },
    items: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "순위",
          value: "position",
          align: "center",
          class: "table-col",
        },
        { text: "팀명", class: "table-col", value: "team" },
        {
          text: "경기수",
          value: "playedGames",
          align: "center",
          class: "table-col",
        },
        { text: "승점", value: "points", align: "center", class: "table-col" },
        { text: "승", value: "won", align: "center", class: "table-col" },
        { text: "무", value: "draw", align: "center", class: "table-col" },
        { text: "패", value: "lost", align: "center", class: "table-col" },
        { text: "득", value: "goalsFor", align: "center", class: "table-col" },
        {
          text: "실",
          value: "goalsAgainst",
          align: "center",
          class: "table-col",
        },
        {
          text: "득실차",
          value: "goalDifference",
          align: "center",
          class: "table-col",
        },
      ],
    };
  },
};
</script>

<style scoped>
.table-col {
  padding: 0 8px !important;
  text-align: center !important;
}
</style>
