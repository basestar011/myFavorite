<template>
  <SettingsLeague />
</template>

<script>
import { SettingsLeague } from "@settings";
import { INIT_LEAGUE } from "@/store/types";

export default {
  name: "SettingsPage",
  components: {
    SettingsLeague,
  },
  async created() {
    await this.$store.dispatch(INIT_LEAGUE);
  },
};
</script>

<style></style>
