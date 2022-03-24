<template>
  <v-skeleton-loader v-bind="$attrs" :class="className"></v-skeleton-loader>
</template>

<script>
export default {
  name: "BasicSkeletonLoader",
  props: {
    className: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
