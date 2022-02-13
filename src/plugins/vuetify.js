import Vue from "vue";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";
import "vuetify/dist/vuetify.min.css";
import en from "vuetify/lib/locale/en";
import ko from "vuetify/lib/locale/ko";

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  en: {
    $vuetify: {
      en,
    },
  },
  ko: {
    $vuetify: {
      ko,
    },
  },
};

const i18n = new VueI18n({
  locale: "ko", // set locale
  messages, // set locale messages
});

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#007BFF",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
});
