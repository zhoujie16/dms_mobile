<template>
  <!-- 快速工单 -->
  <MPage ref="MPage">
    <view class="m-status-bar"></view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar left-icon="arrowleft" title="快速工单" @clickLeft="back" />
    <!-- 筛选组件 -->
    <search-filter ref="searchFilter">
      <!-- 自定义面板 -->
      <template slot="panel">
        <view class="m-flex m-justify-center m-align-center">自定义区域</view>
      </template>
      <!-- 弹窗的表单 -->
      <template slot="form">
        <SearchForm @confirm="searchFormConfirm"></SearchForm>
      </template>
    </search-filter>
    <!-- 数据列表 -->
    <view>
      <BaseScroll
        :height="scrollHeight"
        :fetchApi="fetchApi"
        :fetchParams="fetchParams"
        @listChange="
          arr => {
            this.dataSource = arr;
          }
        "
      >
        <view slot="scroll" style="padding: 20rpx;">
          <ScrollCell
            @click.native="scrollCellClick(data)"
            v-for="(data, i) in dataSource"
            :key="i"
          ></ScrollCell>
        </view>
      </BaseScroll>
      <!--  <view class="" style="padding: 20rpx;"><ScrollCell></ScrollCell></view> -->
    </view>
    <!-- 弹窗内容 -->
    <view class="popup-group">
      
      <MPopup ref="mPopup_addorder" type="center" title="新建工单">
        <OrderCell v-for="item in [1, 2]" @click.native="orderCellClick"></OrderCell>
      </MPopup>
    </view>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from './components/scroll-cell.vue';
import OrderCell from './components/order-cell.vue';
import SearchForm from './components/search-form.vue';
export default {
  components: {
    ScrollCell,
    OrderCell,
    SearchForm
  },
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 86 + 'px';
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: []
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    searchFormConfirm() {
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
    // 新建工单按钮
    addOrderBtnClick() {
      this.$refs.mPopup_addorder.open();
    },
    // 工单点击按钮
    async orderCellClick() {
      await uni.navigateTo({
        url: '/pages/rapid-order/order-detail'
      });
    },
    showSearchFilter() {
      this.$refs.searchFilter.showDrawer();
    },
    // 列表点击事件
    async scrollCellClick(cell) {
      console.log('cellClick', cell);
      await uni.navigateTo({
        url: '/pages/rapid-order/order-detail'
      });
    },
    // 选择 交车状况
    async showPickerSelect() {
      const res = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'selector',
        selectList: [{ label: '是', value: '1' }, { label: '否', value: '2' }],
        defaultVal: '1'
      });
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
    // 选择 开单日期
    async showPickerDate() {
      const res_date = await this.$root.$refs.MPage.MDatePickerPopup.showPicker();
      console.log('选择的日期', res_date);
      this.fetchParams = {
        t: new Date().getTime()
      };
    }
  }
};
</script>

<style lang="scss"></style>
