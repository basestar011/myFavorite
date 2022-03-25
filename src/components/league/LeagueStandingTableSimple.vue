<template>
  <v-simple-table dense>
    <template #default>
      <thead>
        <tr>
          <th>z</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>z</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "LeagueStandingTableSimple",
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
