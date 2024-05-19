module.exports = {
  lintOnSave: false,
  devServer: {
    port: 1698,
  },
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
    },
  },
};
