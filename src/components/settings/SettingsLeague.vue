<template>
  <v-card>
    <v-card-title>내 관심 리그 설정</v-card-title>
    <v-card-subtitle>관심있는 리그를 설정하여 간편하게 보세요!</v-card-subtitle>
    <v-card-text>
      <v-autocomplete
        v-model="leagueToAdd"
        :items="autocompleteList"
        item-value="id"
        :loading="loading"
        @input="addSubscription"
        no-data-text=""
        ref="leagueSelectBox"
        label="리그 목록"
        dense
        filled
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
            <v-list-item-title>{{
              `league.${item.id}` | translate(item.name)
            }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-autocomplete>
      <v-list subheader dense>
        <v-subheader>등록된 리그</v-subheader>
        <template v-if="subscribedList.length > 0">
          <v-list-item
            v-for="competition in subscribedList"
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
              <v-list-item-subtitle v-if="competition.area">{{
                `area.${competition.area.id}` | translate(competition.area.name)
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon
                color="red"
                class="mouse-pointer"
                @click="removeSubscription(competition.id)"
              >
                mdi-minus-circle
              </v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>등록된 리그가 없습니다.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn :disabled="!modified" @click="saveSubscription">저장</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import BasicSpinner from "@common/BasicSpinner.vue";
import {
  COMPETITION,
  FETCH_COMPETITIONS,
  GET_LIST_EXCEPT,
  GET_COMPETITION_BY_IDS,
} from "@/store/competition/types";
import { CHANGE_SUBSCRIPTION, GET_SUBSCRIPTION } from "@/store/types";
import { mapGetters } from "vuex";

export default {
  name: "SettingsLeague",
  components: {
    BasicSpinner,
  },
  data() {
    return {
      loading: false, // autocomplete loading 여부
      leagueToAdd: "", // autocomplete select 값
      newSubscription: this.$store.state.subscription,
    };
  },
  async created() {
    // 선택할 수 있는 리그 목록이 없다면 fetch competition
    if (this.$store.state.competition.list.length === 0) {
      this.loading = true;
      await this.$store.dispatch(`${COMPETITION}/${FETCH_COMPETITIONS}`);
      this.loading = false;
    }
  },
  computed: {
    // 기존 subscription 리스트
    ...mapGetters({ originalSubscription: GET_SUBSCRIPTION }),
    ...mapGetters(COMPETITION, {
      // store competition list에서 특정 competition 가져올때 사용
      getCompetitionByIds: GET_COMPETITION_BY_IDS,
      // store competition list에서 특정 competition 제외하고 가져올때 사용
      getCompetitionsExcept: GET_LIST_EXCEPT,
    }),
    // autocomplete 에서 나타나는 list
    autocompleteList() {
      return this.getCompetitionsExcept(this.subscription);
      // return this.$store.state.competition.list;
    },
    // 처음에는 originalSubscription 이었다가 추가나 삭제한 후에는 변경된 리스트.
    subscription() {
      return this.modified ? this.newSubscription : this.originalSubscription;
    },
    // 현재 subscription에 해당하는 리그들
    subscribedList() {
      return this.getCompetitionByIds(this.subscription);
    },
    isEqualLength() {
      return this.newSubscription.length === this.originalSubscription.length;
    },
    isEqualValue() {
      return this.newSubscription.every(
        (id, index) => id === this.originalSubscription[index]
      );
    },
    // 기존의 subscription과 동일 여부
    modified() {
      return !this.isEqualLength || !this.isEqualValue;
    },
  },
  methods: {
    addSubscription() {
      // 1. 선택한 값 유효성 검사
      if (typeof this.leagueToAdd !== "number") {
        alert("선택한 리그가 올바르지 않습니다.");
        return;
      }

      // 2. newSubscription에 추가
      this.newSubscription = [...this.subscription, this.leagueToAdd];

      // 4. 초기화
      this.$nextTick(() => {
        this.leagueToAdd = "";
        this.$refs.leagueSelectBox.blur();
      });
    },
    removeSubscription(leagueId) {
      this.newSubscription = this.subscription.filter((id) => id !== leagueId);
    },
    saveSubscription() {
      this.$store.dispatch(CHANGE_SUBSCRIPTION, this.newSubscription);
      this.newSubscription = this.$store.state.subscription;
    },
  },
};
</script>

<style scoped>
.mouse-pointer {
  cursor: pointer;
}
</style>
