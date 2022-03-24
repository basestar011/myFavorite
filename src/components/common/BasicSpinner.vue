<template>
  <v-progress-circular indeterminate :color="color" />
</template>

<script>
export default {
  name: "BasicSpinner",
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style></style>
