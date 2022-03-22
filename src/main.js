import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import { formatDate } from "@/util";

Vue.config.productionTip = false;

Vue.filter("translate", (key) => {
  return i18n.t(key);
});

Vue.filter("formatDate", formatDate);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
