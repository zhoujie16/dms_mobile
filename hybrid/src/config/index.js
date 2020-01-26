/**
 * 配置文件
 * 在Vue组件中 可通过 this.$appConfig.xxx 访问
 */
const devConfig = {
  requsetUrl: "http://127.0.0.1:7001", // 请求地址
  webUrl: "" // h5页面 地址
};

//生产环境
const proConfig = {
  requsetUrl: "http://vpn.zoujie16.cn:7001",
  webUrl: ""
};

let config = devConfig;
// let config = proConfig;

module.exports = config;
