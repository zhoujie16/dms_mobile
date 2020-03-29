/**
 * 配置文件
 * 在Vue组件中 可通过 this.$appConfig.xxx 访问
 */
const devConfig = {
  requsetUrl: "https://mock.yonyoucloud.com/mock/3597", // 请求地址
  // requsetUrl: "https://cscyx.yycsy.com",  
};

//生产环境
const proConfig = {
  requsetUrl: "", 
};

let config = devConfig;
// let config = proConfig;

module.exports = config;
