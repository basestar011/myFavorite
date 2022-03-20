const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
        "@views": path.join(__dirname, "src/views"),
        "@data": path.join(__dirname, "src/components/data"),
        "@team": path.join(__dirname, "src/components/team"),
        "@table": path.join(__dirname, "src/components/table"),
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: "ko",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
