module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  publicPath: "./",
  outputDir: "html",
  // 添加 loader
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule("url")
      .test(/\.pdf$/)
      .use("url-loader")
      .loader("url-loader")
      .end();
  }
};
