<template>
  <view class="wrap-contanier">
    <view class="k-title">
      <text>关键信息</text>
      <uni-icons type="closeempty" size="26" color="#fff" class="close" @click="close"></uni-icons>
    </view>
    <view>
      <view class="uni-flex uni-row k-box1">
        <view class="flex-item text-color">距保险到期天数</view>
        <view class="flex-item">无</view>
      </view>
      <view class="uni-flex uni-row k-box2">
        <view class="flex-item text-color">距首保天数</view>
        <view class="flex-item">已超期2212天</view>
      </view>
      <view class="uni-flex uni-row k-box1">
        <view class="flex-item text-color">距二保天数</view>
        <view class="flex-item">已超期2031天</view>
      </view>
      <view class="uni-flex uni-row k-box2">
        <view class="flex-item text-color">距定保天数</view>
        <view class="flex-item">177天</view>
      </view>
      <view class="uni-flex uni-row k-box1">
        <view class="flex-item text-color">距质保过期天数</view>
        <view class="flex-item">2020-01-19</view>
      </view>
      <view class="uni-flex uni-row k-box2">
        <view class="flex-item text-color">剩余SSP次数</view>
        <view class="flex-item">0</view>
      </view>
    </view>
    
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close(){
      console.log("111")
      this.$emit('close')
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap-contanier {
  border-radius: 20rpx;
  background: #fff;
  width: 90vw;
  margin: 0 auto;
  height: 70vh;
  .k-title {
    border-radius: 20rpx 20rpx 0 0;
    text-align: center;
    background: $uni-bg-color-page;
    color: #fff;
    height: 100rpx;
    line-height: 100rpx;
    position: relative;
    .close {
      position: absolute;
      right: 10rpx;
    }
  }
  .k-box1 {
    background: #f5fffa;
    border-top: 1px solid #ccc;
  }
  .k-box2 {
    border-top: 1px solid #ccc;
  }
  .text-color{
    color: #929292;
  }
}
.flex-item {
  width: 50%;
  height: 90rpx;
  line-height: 90rpx;
  padding: 0 20rpx;
}
</style>
