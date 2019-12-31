/**
 * 这里绑定的全局变量和公共组件在nvue中不生效
 * App.vue里globalData和vuex是生效的
 */

import Vue from "vue";
import App from "@/App";

// 这里 vuex 只需绑定到 Vue.prototype 即可，无需挂载到 new Vue 实例
import store from "@/store";
Vue.prototype.$store = store;

// 绑定配置
import AppConfig from "@/config/config.js";
Vue.prototype.$appConfig = AppConfig;

import Auth from "@/common/auth.js";
Vue.prototype.$auth = Auth;

// 绑定公共方法
import Util from "@/common/util.js";
Vue.prototype.$util = Util;

import moment from "moment";
Vue.prototype.$moment = moment;

// 绑定数据校验
import Validate from "@/common/validate.js";
Vue.prototype.$validate = Validate;

// 绑定数据存储方法
import Localforage from "@/common/localforage.js";
Vue.prototype.$localforage = Localforage;

/** 注册 uni-ui 拓展组件 S */
import UniBadge from "@/libs/uni-ui/uni-badge/uni-badge.vue";
Vue.component("UniBadge", UniBadge);

import UniCalendar from "@/libs/uni-ui/uni-calendar/uni-calendar.vue";
Vue.component("UniCalendar", UniCalendar);

import UniCard from "@/libs/uni-ui/uni-card/uni-card.vue";
Vue.component("BaseScroll", UniCard);

import UniCollapse from "@/libs/uni-ui/uni-collapse/uni-collapse.vue";
Vue.component("UniCollapse", UniCollapse);

import UniCollapseItem from "@/libs/uni-ui/uni-collapse-item/uni-collapse-item.vue";
Vue.component("UniCollapseItem", UniCollapseItem);

import UniCountdown from "@/libs/uni-ui/uni-countdown/uni-countdown.vue";
Vue.component("UniCountdown", UniCountdown);

import UniDrawer from "@/libs/uni-ui/uni-drawer/uni-drawer.vue";
Vue.component("UniDrawer", UniDrawer);

import UniFab from "@/libs/uni-ui/uni-fab/uni-fab.vue";
Vue.component("UniFab", UniFab);

import UniFav from "@/libs/uni-ui/uni-fav/uni-fav.vue";
Vue.component("UniFav", UniFav);

import UniGoodsNav from "@/libs/uni-ui/uni-goods-nav/uni-goods-nav.vue";
Vue.component("UniGoodsNav", UniGoodsNav);

import UniGrid from "@/libs/uni-ui/uni-grid/uni-grid.vue";
Vue.component("UniGrid", UniGrid);

import UniIcons from "@/libs/uni-ui/uni-icons/uni-icons.vue";
Vue.component("UniIcons", UniIcons);

import UniIndexedList from "@/libs/uni-ui/uni-indexed-list/uni-indexed-list.vue";
Vue.component("UniIndexedList", UniIndexedList);

import UniList from "@/libs/uni-ui/uni-list/uni-list.vue";
Vue.component("UniList", UniList);

import UniLoadMore from "@/libs/uni-ui/uni-load-more/uni-load-more.vue";
Vue.component("UniLoadMore", UniLoadMore);

import UniNavBar from "@/libs/uni-ui/uni-nav-bar/uni-nav-bar.vue";
Vue.component("UniNavBar", UniNavBar);

import UniNoticeBar from "@/libs/uni-ui/uni-notice-bar/uni-notice-bar.vue";
Vue.component("UniNoticeBar", UniNoticeBar);

import UniNumberBox from "@/libs/uni-ui/uni-number-box/uni-number-box.vue";
Vue.component("UniNumberBox", UniNumberBox);

import UniPagination from "@/libs/uni-ui/uni-pagination/uni-pagination.vue";
Vue.component("UniPagination", UniPagination);

import UniPopup from "@/libs/uni-ui/uni-popup/uni-popup.vue";
Vue.component("UniPopup", UniPopup);

import UniRate from "@/libs/uni-ui/uni-rate/uni-rate.vue";
Vue.component("UniRate", UniRate);

import UniSearchBar from "@/libs/uni-ui/uni-search-bar/uni-search-bar.vue";
Vue.component("UniSearchBar", UniSearchBar);

import UniSegmentedControl from "@/libs/uni-ui/uni-segmented-control/uni-segmented-control.vue";
Vue.component("UniSegmentedControl", UniSegmentedControl);

import UniSteps from "@/libs/uni-ui/uni-steps/uni-steps.vue";
Vue.component("UniSteps", UniSteps);

import UniSwipeAction from "@/libs/uni-ui/uni-swipe-action/uni-swipe-action.vue";
Vue.component("UniSwipeAction", UniSwipeAction);

import UniSwiperDot from "@/libs/uni-ui/uni-swiper-dot/uni-swiper-dot.vue";
Vue.component("UniSwiperDot", UniSwiperDot);

import UniTag from "@/libs/uni-ui/uni-tag/uni-tag.vue";
Vue.component("UniTag", UniTag);

/** 注册 uni-ui 拓展组件 E */

/** 注册公共组件 S */
import DemoPage from "@/components/demo-page/demo-page.vue";
Vue.component("DemoPage", DemoPage);

import MescrollUni from "@/libs/mescroll-uni/mescroll-uni.vue";
Vue.component("MescrollUni", MescrollUni);

import BaseScroll from "@/components/base-scroll/base-scroll.vue";
Vue.component("BaseScroll", BaseScroll);

import SearchFilter from "@/components/search-filter/search-filter.vue";
Vue.component("SearchFilter", SearchFilter);

import MLabel from "@/components/search-filter/m-label.vue";
Vue.component("MLabel", MLabel);

import MInput from "@/components/search-filter/m-input.vue";
Vue.component("MInput", MInput);

import MCheckbox from "@/components/search-filter/m-checkbox.vue";
Vue.component("MCheckbox", MCheckbox);


import MCheckboxPopup from "@/components/search-filter/m-checkbox-popup.vue";
Vue.component("MCheckboxPopup", MCheckboxPopup);

import MDatePickerPopup from "@/components/search-filter/m-date-picker-popup.vue";
Vue.component("MDatePickerPopup", MDatePickerPopup);

import MDatePicker from "@/components/search-filter/m-date-picker.vue";
Vue.component("MDatePicker", MDatePicker);


/** 绑定公共组件 E */

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App
});
app.$mount();
