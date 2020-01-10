<template>
  <view class="page-wrap">
    <NavBarSelect class="top">
      <NavBarSelectItem @click='showAll' title="全部"></NavBarSelectItem>
      <NavBarSelectItem title="创建时间" @click="showCreateTime"></NavBarSelectItem>
      <NavBarSelectItem @click="showCreateTime" title="上报时间"></NavBarSelectItem>
    </NavBarSelect>
    <MPage ref="MPage">
      <MPopup ref="mPopup2" type="bottom" title="请选择检查单状态">
        <view class="timeContent">
          <view class="time">全部</view>
          <view class="time">未提交</view>
          <view class="time">已提交</view>
          <view class="time">审核完成</view>
        </view>
          <view class="close">关闭</view>
      </MPopup>
    </MPage>
    <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
        <swiper-item>
          <baseScroll
            :top="0"
            :fetchApi="fetchApi"
            :fetchParams="fetchParams_0"
            @listChange="
              arr => {
                this.dataSource_0 = arr;
              }
            "
          >
            <view @click="scrollCellClick" v-for="(data, i) in dataSource_0" :key="i">
              <view class="content">
                <view class="m-flex m-align-center m-height-80 content-top">未提交</view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">检查类别</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">任务名称</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查-201912</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">审核状态</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">未上报</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">服务经理</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">QWE2</view>
                </view>
              </view>
            </view>
          </baseScroll>
        </swiper-item>
      </swiper>
  </view>
</template>

<script>
  import { AjaxScrollData } from '@/api/test/index.js';
export default {
  data() {
    return {
      fetchApi: AjaxScrollData,
      dataSource_0: []
    };
  },
  methods: {
    showAll() {
      this.$refs.mPopup2.open()
    },
    showSearchFilter() {},
    async showCreateTime() {
      const res_p = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'range',
        startYear: '2017',
        endYear: '2010',
        defaultVal: ['2019-12-30', '2020-01-07']
      });
      console.log('res_p', res_p);
    }
  }
};
</script>

<style lang="scss">
  .page-wrap{
    position: relative;
    height: 100%;
  }
.container {
  padding: 20rpx;
  margin-top: 44rpx;
}
.top {
  position: fixed;
  top: 0;
  z-index: 999;
  margin-bottom: 44rpx;
  background-color: #FFFFFF;
}
.swiper-wrap{
  position: absolute;
  top: 80rpx;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
}
.content {
  background-color: #f7f7f7;
  margin: 20rpx;
  border-radius: 20rpx;
  padding-left: 20rpx;
}

.content-top {
  border-bottom: 1px solid #cccccc;
  padding-right: 10rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  margin-bottom: 20rpx;
}

.content-left {
  flex: 0 0 200rpx;
  color: #c0c0c0;
  font-size: 28rpx;
}

  .timeContent {
    .time {
      height: 70rpx;
      line-height: 70rpx;
      border-bottom: 1rpx solid #ccc;
      font-size: 30rpx;
      padding-left: 5rpx;
      text-align: center;
      color: #0A98D5;
    }
  }
  .close {
    height: 70rpx;
    line-height: 70rpx;
    text-align: center;
    font-size: 30rpx;
    color: #0A98D5;
  }
</style>
