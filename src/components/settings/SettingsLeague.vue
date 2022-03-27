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
        no-data-text="해당하는 리그가 없습니다."
        label="가능한 리그 목록"
      ></v-autocomplete>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SettingsLeague",
  props: {
    availableLeagues: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedLeague: "",
    };
  },
  computed: {
    leagues() {
      return this.availableLeagues.length === 0
        ? []
        : this.$store.state.leagues.map((leagueCode) => {
            return this.availableLeagues.find(
              (league) => league.id === leagueCode
            );
          });
    },
    availableList() {
      return this.availableLeagues.filter(
        (league) => !this.leagues.includes(league.id)
      );
    },
  },
};
</script>

<style></style>
