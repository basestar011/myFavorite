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
        import(/* webpackChunkName: "main" */ "@/views/MainPage.vue"),
    },
  ],
});

export default router;
