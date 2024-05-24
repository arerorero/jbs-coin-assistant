module.exports = {
  lintOnSave: false,
  devServer: {
    port: 1999,
  },
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
    },
  },
};
