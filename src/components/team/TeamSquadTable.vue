<template>
  <ul>
    <li v-for="player in squad" :key="player.id">
      <p>이름: {{ player.name }}</p>
      <p>포지션: {{ player.position }}</p>
      <p>생년월일: {{ player.dateOfBirth | formatDate("LL") }}</p>
      <p>국적: {{ player.nationality }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TeamSquad",
  props: {
    squad: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
