<template>
  <SettingsLeague :available-leagues="competitions" />
</template>

<script>
import { footballApi } from "@/api";
import { SettingsLeague } from "@settings";

export default {
  name: "SettingsPage",
  components: {
    SettingsLeague,
  },
  data() {
    return {
      competitions: [],
    };
  },
  async created() {
    const { data } = await footballApi.get("competitions?plan=TIER_ONE");
    this.competitions = data.competitions;
  },
};
</script>

<style></style>
