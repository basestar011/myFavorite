<template>
  <v-row>
    <v-col cols="6">
      <league-table></league-table>
    </v-col>
    <v-col cols="6">
      <league-table></league-table>
    </v-col>
    <v-col cols="6">
      <league-table></league-table>
    </v-col>
    <v-col cols="6">
      <league-table></league-table>
    </v-col>
  </v-row>
</template>

<script>
import LeagueTable from "@/components/LeagueTable.vue";
export default {
  name: "MainPage",
  components: {
    LeagueTable,
  },
};
</script>
<style></style>
