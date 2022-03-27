import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Main",
      component: () =>
        import(/* webpackChunkName: "main" */ "@views/MainPage.vue"),
    },
    {
      path: "/team/:id",
      name: "Team",
      component: () =>
        import(/* webpackChunkName: "team" */ "@views/TeamPage.vue"),
    },
    {
      path: "/settings",
      name: "Setting",
      component: () =>
        import(/* webpackChunkName: "settings" */ "@views/SettingsPage.vue"),
    },
  ],
});

export default router;
