<template>
  <v-row>
    <v-col
      :cols="$store.state.small"
      :sm="$store.state.wide"
      :md="$store.state.wide"
      :lg="$store.state.wide"
      :xl="$store.state.wide"
    >
      <SettingsLeague />
    </v-col>
  </v-row>
</template>

<script>
import { SettingsLeague } from "@settings";

export default {
  name: "SettingsPage",
  components: {
    SettingsLeague,
  },
};
</script>

<style></style>
