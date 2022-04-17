<template>
  <v-row>
    <v-col cols="6">
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
