<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="title">
        <router-link :to="{ name: 'Main' }">My Favorite</router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
a {
  text-decoration: none !important;
  color: black !important;
}
</style>
