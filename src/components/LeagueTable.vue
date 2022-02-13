<template>
  <v-card outlined>
    <v-card-title class="d-flex justify-center">
      {{ $vuetify.lang.t(`$vuetify.league.${name}`) }}
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
      :loading="loading"
      loading-text="로딩중!!"
    >
      <template #item.team="{ item }">
        <div class="d-flex align-center">
          <img :src="item.logo" width="20px" height="20px" class="mr-2" />
          {{ item.team }}
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
        { text: "순위", value: "position", align: "center" },
        { text: "팀명", value: "team" },
        { text: "경기수", value: "playedGames", align: "center" },
        { text: "승", value: "won", align: "center" },
        { text: "무", value: "draw", align: "center" },
        { text: "패", value: "lost", align: "center" },
        { text: "승점", value: "points", align: "center" },
        { text: "득", value: "goalsFor", align: "center" },
        { text: "실", value: "goalsAgainst", align: "center" },
        { text: "득실차", value: "goalDifference", align: "center" },
      ],
    };
  },
  // created() {
  //   this.$vuetify.lang.current = "ko";
  //   console.log(this.$vuetify.lang);
  // },
};
</script>

<style></style>
