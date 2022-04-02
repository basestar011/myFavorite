<template>
  <v-card>
    <v-card-title>내 관심 리그 설정</v-card-title>
    <v-card-subtitle>관심있는 리그를 설정하여 간편하게 보세요!</v-card-subtitle>
    <v-card-text>
      <v-list subheader dense>
        <v-subheader>등록된 리그</v-subheader>
        <v-list-item v-for="league in leagues" :key="league.id">
          <v-list-item-icon
            class="my-0 mr-2 align-self-center"
            style="height: 40px; width: 40px"
          >
            <v-img :src="league.emblemUrl" contain />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{
              `league.${league.id}` | translate(league.name)
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              `area.${league.area.id}` | translate(league.area.name)
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>x</v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-autocomplete
        v-model="selectedLeague"
        :items="availableList"
        item-text="name"
        item-value="id"
        dense
        filled
        label="가능한 리그 목록"
        @focus="fetchData"
        :loading="loading"
      >
        <template #no-data>
          <BasicSpinner color="primary" style="width: 100%" />
        </template>
      </v-autocomplete>
    </v-card-actions>
  </v-card>
</template>

<script>
import BasicSpinner from "@common/BasicSpinner.vue";
import { footballApi } from "@/api";
import { mapGetters } from "vuex";
import { LEAGUE, GET_DATA } from "@/store/league/types";

export default {
  name: "SettingsLeague",
  components: {
    BasicSpinner,
  },
  data() {
    return {
      selectedLeague: "",
      loading: false,
      availableList: [],
    };
  },
  computed: {
    ...mapGetters(LEAGUE, { getData: GET_DATA }),
    leagues() {
      return this.$store.state.leagues.map(
        (leagueCode) => this.getData(leagueCode).info
      );
    },
  },
  methods: {
    async fetchData() {
      this.loading = true;
      const { data } = await footballApi.get("competitions?plan=TIER_ONE");
      this.availableList = data.competitions.filter((competition) => {
        return !this.leagues.includes(competition.id);
      });
      this.loading = false;
    },
  },
};
</script>

<style></style>
