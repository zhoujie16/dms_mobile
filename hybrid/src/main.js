import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;

// 绑定配置
import AppConfig from "@/config/index.js";
Vue.prototype.$appConfig = AppConfig;

// 绑定公共方法
import Util from "@/common/util.js";
Vue.prototype.$util = Util;

import moment from "moment";
Vue.prototype.$moment = moment;

Vue.prototype.$sleep = timeout => {
  return new Promise((resolve, resject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};


import { Toast } from 'vant';
Vue.prototype.$toast = Toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
