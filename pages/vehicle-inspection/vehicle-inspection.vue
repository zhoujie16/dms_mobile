<template>
   <MPage ref="MPage" type="primary">
  <view class="page-wrap" >
    <SearchFilter ref="searchFilter"><searchForm @confirm="searchFormConfirm"></searchForm></SearchFilter>
    <view class="container">
      <view v-for="item in dataSource" :key="item" @click="detailClick(item)">
        <view class="content" >
          <view class="m-flex m-align-center m-height-80 content-top">预交车时间：2020-01-02 15:30:03</view>
          <view>
            <text class="label-pad label-color m-height-80">姓名：</text>
            <text class="label-pad label-color m-height-80">何红</text>
            <text class="label-pad label-color m-height-80">|</text>
            <text class="label-pad label-color m-height-80">车牌：</text>
            <text class="label-color m-height-80">川AFH892</text>
          </view>
          <view>
            <text class="label-pad label-color m-height-80">状态：</text>
            <text class="label-pad label-color m-height-80">已派工</text>
            <text class="label-pad label-color m-height-80">|</text>
            <text class="label-pad label-color m-height-80">工单号：</text>
            <text class="label-color m-height-80">RO20010200006</text>
          </view>
          <view>
            <text class="label-pad label-color m-height-80">车型：</text>
            <text class="label-color m-height-80">全新福克斯三厢 1.6MT</text>
          </view>
          <view class="uni-flex uni-row">
            <view class="flex-item m-height-80">服务顾问：WYL1</view>
            <view class="flex-item m-height-80">技师：拉纳兰</view>
          </view>
        </view>
      </view>
    </view>
  </view>
  </MPage>
</template>

<script>
import searchForm from '@/pages/vehicle-inspection/components/search-form.vue';
import { AjaxScrollData } from '@/api/test/index.js';
export default {
  components: {
    searchForm
  },
  data() {
    return {
      dataSource: [0, 1, 2,3,4,5]
    };
  },
  methods: {
    detailClick(i){
      uni.navigateTo({
        url: `/pages/vehicle-inspection/vehicle-detail`
      });
    },
    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = { t: new Date().getTime() };
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  background-color: $uni-bg-color-page;
  overflow: hidden;
  .container {
    padding: 20rpx;
    max-height: 1200rpx;
    overflow: scroll;
    .content {
      background-color: #ffffff;
      margin: 20rpx 0 60rpx 0;
      border-radius: 20rpx;
      padding: 0 20rpx;
      .content-top {
        border-bottom: 1px solid #cccccc;
        padding-right: 10rpx;
        height: 80rpx;
        line-height: 80rpx;
        font-size: 30rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}
.label-color {
  color: #777777;
}
.label-pad {
  display: inline-block;
  padding-right: 20rpx;
}
.flex-item {
  width: 50%;
  color: #17A2B8;
}
</style>
