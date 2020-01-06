<template>
  <view class="page-wrap">
    <view class="topFilter">  
    <search-filter ref="searchFilter">
      <SearchForm @confirm="searchFormConfirm"></SearchForm>
    </search-filter>
    </view>
    <NavBarSelect class="top">
      <NavBarSelectItem @click='showAll' title="全部"></NavBarSelectItem>
      <NavBarSelectItem title="创建时间"></NavBarSelectItem>
      <NavBarSelectItem @click="showSearchFilter" title="上报时间"></NavBarSelectItem>
    </NavBarSelect>
    <MPopup ref="mPopup2" type="bottom" title="请选择检查单状态">
      弹窗内容 bottom
    </MPopup>
    <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
        <swiper-item>
          <baseScroll
            :top="0"
            :fetchApi="fetchApi"
            :fetchParams="fetchParams"
            @listChange="
              arr => {
                this.dataSource = arr;
              }
            "
          >
            <view @click="scrollCellClick" v-for="(data, i) in dataSource" :key="i">
              <view class="content">
                <view class="m-flex m-align-center m-height-80 content-top">已上报 2019/11/27 11:32</view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">车主姓名</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">石玉林</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">车牌号</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">渝A023ME</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">VIN</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">LJXDJ3CB8JTU39588</view>
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
      dataSource: [],
      fetchParams: {}
    };
  },
  methods: {
    showAll() {
      this.$refs.mPopup2.open()
    },
    showSearchFilter() {},
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
  .page-wrap{
    position: relative;
    height: 100%;
  }
.topFilter{
  position: absolute;
  top: 0;
  z-index: 99;
  width: 100%;
}
.top {
  position: fixed;
  top: 55px;
  z-index: 9;
  background-color: #FFFFFF;
}
.swiper-wrap{
  position: absolute;
  top: 180rpx;
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
</style>
