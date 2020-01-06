<template>
  <view class="page-wrap">
    <NavBarSelect>
      <NavBarSelectItem @click='showAll' title="全部"></NavBarSelectItem>
      <NavBarSelectItem title="创建时间"></NavBarSelectItem>
      <NavBarSelectItem @click="showSearchFilter" title="上报时间"></NavBarSelectItem>
    </NavBarSelect>
    <MPopup ref="mPopup2" type="bottom" title="标题2">
      弹窗内容 bottom
    </MPopup>
    <MFadBtn @click.native="addOrderBtnClick">新建</MFadBtn>
    <view class="container">
      <view class="base-scroll-inner" v-for="i in dataSource" :key="i">
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
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dataSource: [0, 1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    showAll() {
      this.$refs.mPopup2.open()
    },
    showSearchFilter() {}
  }
};
</script>

<style lang="scss">
.container {
  padding: 20rpx;
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
