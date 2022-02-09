<template>
  <v-sheet outlined>
    <v-data-table
      :headers="headers"
      :items="items"
      caption="프리미어리그"
      disable-sort
      disable-filtering
      disable-pagination
      hide-default-footer
      :loading="loading"
      loading-text="로딩중!!"
    ></v-data-table>
  </v-sheet>
</template>

<script>
export default {
  name: "LeagueTable",
  data() {
    return {
      loading: true,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      items: [],
    };
  },
};
</script>

<style></style>
