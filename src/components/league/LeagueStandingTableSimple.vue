<template>
  <v-simple-table dense>
    <template #default>
      <thead>
        <tr>
          <th v-for="(header, i) in headers" :key="i" class="text-center px-1">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in simpleData" :key="item.position">
          <td class="text-center px-3">{{ item.position }}</td>
          <td class="text-left pr-0 d-flex align-center">
            <img :src="item.logo" width="20px" height="20px" class="mr-2" />
            <router-link :to="`/team/${item.id}`">
              {{ `teams.name.${item.id}` | translate(item.team.name) }}
            </router-link>
          </td>
          <td class="text-center px-4">{{ item.playedGames }}</td>
          <td class="text-center px-1">{{ item.won }}</td>
          <td class="text-center px-1">{{ item.draw }}</td>
          <td class="text-center px-1">{{ item.lost }}</td>
          <td class="text-center px-3">{{ item.points }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "LeagueStandingTableSimple",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
    maxStanding: {
      type: Number,
      required: false,
    },
  },
  computed: {
    simpleData() {
      return this.maxStanding !== undefined
        ? this.data.slice(0, this.maxStanding)
        : this.data;
    },
  },
};
</script>

<style></style>
