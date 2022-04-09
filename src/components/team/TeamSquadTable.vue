<template>
  <v-simple-table class="elevation-1">
    <template #default>
      <thead>
        <tr>
          <th class="text-left">이름</th>
          <th class="text-left">나이</th>
          <th class="text-left">국적</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in squad" :key="player.id">
          <td>
            {{ player.name }}
          </td>
          <td>
            {{ getAge(player.dateOfBirth) }}
          </td>
          <td>
            {{ player.nationality }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import moment from "moment";
export default {
  name: "TeamSquad",
  props: {
    squad: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getAge(birth) {
      return moment().diff(moment(birth), "years");
    },
  },
};
</script>

<style></style>
