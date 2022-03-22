<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :item-key="data.id"
    dense
    disable-sort
    disable-filtering
    disable-pagination
    hide-default-footer
    hide-default-header
    :loading="loading"
    loading-text=""
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
        <router-link :to="`/team/${item.team}`">
          {{ `teams.${item.team}` | translate }}
        </router-link>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import { LEAGUE, GET_DATA } from "@/store/league/types";

export default {
  name: "LeagueData",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    leagueCode: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters(LEAGUE, {
      leagueData: GET_DATA,
    }),
    data() {
      return this.loading ? [] : this.leagueData(this.leagueCode);
    },
  },
};
</script>

<style></style>
