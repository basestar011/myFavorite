<template>
  <v-row>
    <v-col cols="6">
      <SettingsLeague />
    </v-col>
  </v-row>
</template>

<script>
import { SettingsLeague } from "@settings";
import { INIT_DATA } from "@/store/types";

export default {
  name: "SettingsPage",
  components: {
    SettingsLeague,
  },
  async created() {
    await this.$store.dispatch(INIT_DATA);
  },
};
</script>

<style></style>
