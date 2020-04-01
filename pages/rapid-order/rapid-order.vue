<template>
  <!-- 快速工单 -->
  <MPage ref="MPage">
    <!-- 筛选组件 -->
    <search-filter ref="searchFilter">
      <!-- 自定义面板 -->
      <view slot="panel" class="panel-box">
        <view v-for="(item, index) in itemList" :key="index" @click="changeIndex(index)">
          <view
            :class="[
              { 'panel-tab-pressed': activeindex == index },
              { 'panel-tab': activeindex !== index }
            ]"
          >
            {{ item.title }}
            <text>{{ item.count }}</text>
          </view>
        </view>
      </view>
      <!-- 弹窗的表单 -->
      <template slot="form">
        <SearchForm @confirm="searchFormConfirm"></SearchForm>
      </template>
    </search-filter>
    <!-- 数据列表 -->
    <view class="wrap">
      <!-- <BaseScroll
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
      </BaseScroll> -->
      <ScrollCell
        @click.native="scrollCellClick(data)"
        v-for="(data, i) in dataSource"
        :key="i"
      ></ScrollCell>
      <!--  <view class="" style="padding: 20rpx;"><ScrollCell></ScrollCell></view> -->
    </view>
    <!-- 弹窗内容 -->
    <view class="popup-group">
      <view class="add-btn" @click="addOrderBtnClick">
        <image class="add-btn" src="/static/image/add_btn.svg" mode="scaleToFill"></image>
      </view>
      <MPopup ref="mPopup_addorder" type="bottom" title="新建工单">
        <view class="order-box">
          <!-- <serviceActivities v-for="item in [1, 2]" :key="item"></serviceActivities> -->
          <OrderCell v-for="item in [1, 2]" :key="item" @click.native="orderCellClick"></OrderCell>
        </view>
      </MPopup>
    </view>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from './components/scroll-cell.vue';
import OrderCell from './components/order-cell.vue';
import serviceActivities from './components/service-activities.vue';
import SearchForm from './components/search-form.vue';
export default {
  components: {
    ScrollCell,
    OrderCell,
    SearchForm
  },
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 20 + 'px';
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: [2],
      activeindex: 0,
      itemList: [
        {
          title: '未交车',
          count: 0
        },
        {
          title: '已交车',
          count: 4
        }
      ]
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    //已交车 未交车切换
    changeIndex(index) {
      this.activeindex = index;
    },
    searchFormConfirm() {
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
    // 新建工单按钮
    async addOrderBtnClick() {
      this.$refs.mPopup_addorder.open();
      // await uni.navigateTo({
      //   url: '/pages/rapid-order/order-detail-edit'
      // });
    },
    // 工单点击按钮
    async orderCellClick() {
      await uni.navigateTo({
        url: '/pages/rapid-order/order-detail-edit'
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

<style lang="scss" scoped>
  .wrap {
    margin-top: 84rpx;
  }
.panel-box {
  display: flex;
  flex: 3;
  .panel-tab {
    width: 140rpx;
    height: 40rpx;
    line-height: 40rpx;
    border-radius: $uni-m-border-radius-b4;
    background-color: $uni-m-color-c5;
    color: $uni-m-color-c1;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 30rpx;
  }
  .panel-tab-pressed {
    width: 140rpx;
    height: 55rpx;
    line-height: 55rpx;
    border-radius: $uni-m-border-radius-b4;
    background-color: $uni-m-color-c11;
    color: $uni-m-color-cwhite;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 20rpx;
  }
}
.add-btn {
  position: fixed;
  width: 120rpx;
  height: 120rpx;
  right: 20rpx;
  bottom: 20rpx;
}
.order-box{
  padding: 20rpx;
}
</style>
