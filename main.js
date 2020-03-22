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

import Speech from '@/common/speech/index.js';
Vue.prototype.$speech = Speech;

import Dict from '@/common/dict/index.js';
Vue.prototype.$dict = Dict;

Vue.config.productionTip = false;

Vue.prototype.$sleep = timeout => {
  return new Promise((resolve, resject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

import Auth from "@/common/auth/index.js";
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

import uniSection from "@/libs/uni-ui/uni-section/uni-section.vue";
Vue.component("uniSection", uniSection);

import UniSwipeAction from "@/libs/uni-ui/uni-swipe-action/uni-swipe-action.vue";
Vue.component("UniSwipeAction", UniSwipeAction);

import UniSwipeActionItem from "@/libs/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue";
Vue.component("UniSwipeActionItem", UniSwipeActionItem);

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

import MFormBottom from "@/components/search-filter/m-form-bottom.vue";
Vue.component("MFormBottom", MFormBottom);


import MLabel from "@/components/search-filter/m-label.vue";
Vue.component("MLabel", MLabel);

import MInput from "@/components/search-filter/m-input.vue";
Vue.component("MInput", MInput);

import MTextArea from "@/components/search-filter/m-textarea.vue";
Vue.component("MTextArea", MTextArea);

import MSwitch from "@/components/search-filter/m-switch.vue";
Vue.component("MSwitch", MSwitch);

import MCheckbox from "@/components/search-filter/m-checkbox.vue";
Vue.component("MCheckbox", MCheckbox);

import MCheckboxPanel from "@/components/search-filter/m-checkbox-panel.vue";
Vue.component("MCheckboxPanel", MCheckboxPanel);

import MPopup from "@/components/m-popup/m-popup.vue";
Vue.component("MPopup", MPopup);

import MFadBtn from '@/components/m-fad-btn/m-fad-btn.vue'
Vue.component("MFadBtn", MFadBtn);

import FaIcon from '@/libs/fa-icon/fa-icon.vue'
Vue.component("FaIcon", FaIcon);

import MCheckboxPopup from "@/components/search-filter/m-checkbox-popup.vue";
Vue.component("MCheckboxPopup", MCheckboxPopup);

import AjaxButton from "@/components/search-filter/ajax-button.vue";
Vue.component("AjaxButton", AjaxButton);

import MDatePickerPopup from "@/components/search-filter/m-date-picker-popup.vue";
Vue.component("MDatePickerPopup", MDatePickerPopup);

import MDatePicker from "@/components/search-filter/m-date-picker.vue";
Vue.component("MDatePicker", MDatePicker);

import CollapsePanel from '@/components/collapse-panel/collapse-panel.vue';
Vue.component("CollapsePanel", CollapsePanel);

import SwiperTab from '@/components/swiper-tab/swiper-tab.vue'
Vue.component("SwiperTab", SwiperTab);

import NavBarSelect from '@/components/nav-bar-select/nav-bar-select.vue'
Vue.component("NavBarSelect", NavBarSelect);

import NavBarSelectItem from '@/components/nav-bar-select/nav-bar-select-item.vue'
Vue.component("NavBarSelectItem", NavBarSelectItem);

import MPicker from '@/components/search-filter/m-picker.vue';
Vue.component("MPicker", MPicker);

import MPickerPopup from '@/components/search-filter/m-picker-popup.vue';
Vue.component("MPickerPopup", MPickerPopup);

import MPage from '@/components/m-page/m-page.vue';
Vue.component("MPage", MPage);

import NavDateRangePicker from '@/components/nav-date-range-picker/nav-date-range-picker.vue';
Vue.component("NavDateRangePicker", NavDateRangePicker);

import ZTable from '@/libs/z-table/z-table.vue';
Vue.component("ZTable", ZTable);


import MNothing from '@/components/404/m-nothing.vue';
Vue.component("MNothing", MNothing);

// 按钮
import MButton from '@/components/m-button/m-button.vue';
Vue.component('MButton', MButton);

// 车牌号
import MLicense from '@/components/search-filter/m-license.vue';
Vue.component('MLicense', MLicense);

// 拨号
import MtelephoneCall from '@/components/m-telephoneCall/m-telephoneCall.vue';
Vue.component('MtelephoneCall', MtelephoneCall);

// 弹窗
import MModal from '@/components/m-modal/m-modal.vue';
Vue.component("MModal", MModal);

// m-actionsheet
import MActionSheet from '@/components/m-actionsheet/m-actionsheet.vue';
Vue.component("MActionSheet", MActionSheet);

// 车辆检查项 MCheckCell
import MVehicleCheckCell from '@/components/m-vehicle-check-cell/m-vehicle-check-cell.vue';
Vue.component("MVehicleCheckCell", MVehicleCheckCell);

// 滑动单元格 m-swipe-cell
import MSwipeCell from '@/components/m-swipe-cell/m-swipe-cell.vue';
Vue.component("MSwipeCell", MSwipeCell);

// 虚拟键盘 m-keyboard
import MKeyboard from '@/components/m-keyboard/m-keyboard.vue';
Vue.component("MKeyboard", MKeyboard);

/** 绑定公共组件 E */

/**
 * 公共方法混入  所有Vue组件均可使用
 */
Vue.mixin({
  methods: {
    // 修改Vue实例Data方法，当 this.xxx=xxx 界面不生效时使用
    setData: function(obj, callback) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function(key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function(key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }
          data = data[key2];
        })
      });
      callback && callback();
    },
    SLEEP(timeout) {
      return new Promise((resolve, resject) => {
        setTimeout(() => {
          resolve();
        }, timeout);
      });
    },
    async TEST() {
      console.log(('mixin test'))
    },
    // 显示提示信息
    async SHOW_TOAST(message) {
      await uni.showToast({
        title: message,
        position: 'bottom',
        icon: 'none'
      });
    },
    // 显示等待提示
    async SHOW_LOADING(message) {
      await uni.showLoading({
        title: message,
        mask: true
      });
    },
    // 关闭等待提示
    async HIDE_LOADING() {
      await uni.hideLoading()
    },
    // 显示弹窗选择
    async SHOW_PICKER(params) {
      return await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'selector',
        selectList: params.itemList,
        defaultVal: params.value.length ? params.value[0] : ''
      });
    },
    // 显示弹窗日期选择
    async SHOW_TIME_PICKER(params) {
      return await this.$root.$refs.MPage.MPickerPopup.showPicker(params);
    },
    /**
     * 显示模态弹窗
     * @example 
      const res = await this.SHOW_MODAL({
        title: '提示的标题',
        content: '提示的内容',
        showCancel: true, // 是否显示取消按钮，默认为 true
        cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      @property {String} res = ['confirm' | 'cancel']
     */
    async SHOW_MODAL(params) {
      return await this.$root.$refs.MPage.MModal.showModal(params);
    },
    // 
    /**
     * 显示操作菜单
     * @example 
       const res = await this.SHOW_ACTION_SHEET({
         itemList: [
           { text: '选项1', value: '1' },
           { text: '选项2', value: '2' },
           { text: '选项3', value: '3' },
           { text: '选项4', value: '4' },
           { text: '选项5', value: '5' }
         ]
       });
     * @param {type} res = { text: '选项5', value: '5' } 
     */
    async SHOW_ACTION_SHEET(params) {
      return await this.$root.$refs.MPage.MActionSheet.showActionSheet(params);
    },
    /**
     * 选择地址
     * @example
       const res = await this.SHOW_ADDRESS_PICKER({
         value:['code','code','code'] // 默认值
       });
     * @param {type} res = 
     */
    async SHOW_ADDRESS_PICKER(params) {
      return await this.$root.$refs.MPage.MPickerPopup.showAddressPicker(params);
    }
  }
});

App.mpType = "app";

const app = new Vue({
  ...App
});
app.$mount();
