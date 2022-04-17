<template>
  <v-card>
    <v-card-title>내 관심 리그 설정</v-card-title>
    <v-card-subtitle>관심있는 리그를 설정하여 간편하게 보세요!</v-card-subtitle>
    <v-card-text>
      <v-autocomplete
        v-model="selectedLeague"
        :items="availableList"
        item-text="name"
        item-value="id"
        dense
        filled
        label="리그 목록"
        @focus="getCompetitionData"
        @input="addSubscription"
        :loading="loading"
        no-data-text=""
      >
        <template #no-data>
          <template v-if="loading">
            <BasicSpinner color="primary" style="width: 100%" />
          </template>
          <template v-else>
            <v-subheader>해당 리그가 없습니다.</v-subheader>
          </template>
        </template>
        <template #item="{ item }">
          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>
      <v-list subheader dense>
        <v-subheader>등록된 리그</v-subheader>
        <v-list-item
          v-for="competition in getCompetitionInfo"
          :key="competition.id"
        >
          <v-list-item-icon
            class="my-0 mr-2 align-self-center"
            style="height: 40px; width: 40px"
          >
            <v-img :src="competition.emblemUrl" contain />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{
              `league.${competition.id}` | translate(competition.name)
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              `area.${competition.area.id}` | translate(competition.area.name)
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="red">mdi-minus-circle</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn>저장</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import BasicSpinner from "@common/BasicSpinner.vue";
import {
  COMPETITION,
  FETCH_COMPETITIONS,
  GET_LIST_EXCEPT,
  GET_COMPETITION,
} from "@/store/competition/types";
import { mapGetters } from "vuex";

export default {
  name: "SettingsLeague",
  components: {
    BasicSpinner,
  },
  data() {
    return {
      selectedLeague: "", // 관심리그에서 리그를 선택한 값
      availableList: [], // 선택할 수 있는 리그 목록
      loading: false,
    };
  },
  async created() {
    // 선택할 수 있는 리그 목록이 없다면 api call
    if (this.$store.state.competition.list.length === 0) {
      this.loading = true;
      await this.$store.dispatch(`${COMPETITION}/${FETCH_COMPETITIONS}`);
      this.getCompetitionData();
      this.loading = false;
    }
  },
  computed: {
    ...mapGetters(COMPETITION, {
      getCompetition: GET_COMPETITION,
    }),
    getCompetitionInfo() {
      return this.$store.state.competition.list.length > 0
        ? this.$store.state.subscription.map((code) =>
            this.getCompetition(code)
          )
        : [];
    },
  },
  methods: {
    // competition store에서 subscription 을 제외한 리그 목록 가져오기
    getCompetitionData() {
      this.availableList = this.$store.getters[
        `${COMPETITION}/${GET_LIST_EXCEPT}`
      ](this.$store.state.subscription);
    },
    addSubscription() {
      alert(this.selectedLeague);
    },
  },
};
</script>

<style></style>
