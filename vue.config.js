const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
        "@views": path.join(__dirname, "src/views"),
        "@data": path.join(__dirname, "src/components/data"),
        "@common": path.join(__dirname, "src/components/common"),
        "@league": path.join(__dirname, "src/components/league"),
        "@team": path.join(__dirname, "src/components/team"),
        "@settings": path.join(__dirname, "src/components/settings"),
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
