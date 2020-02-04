/**
 * 配置文件
 * 在Vue组件中 可通过 this.$appConfig.xxx 访问
 */
const devConfig = {
  requsetUrl: "https://mock.yonyoucloud.com/mock/3597", // 请求地址
  // requsetUrl: "http://cscyx.yycsy.com",
  webUrl: "https://lincoln-mp-dev.yonyouauto.com" // h5页面 地址
};

//生产环境
const proConfig = {
  requsetUrl: "https://lincoln-mp.yonyouauto.com",
  webUrl: "https://lincoln-mp.yonyouauto.com"
};

let config = devConfig;
// let config = proConfig;

module.exports = config;
