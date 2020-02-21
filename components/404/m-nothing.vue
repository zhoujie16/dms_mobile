<template>
  <view class="m-nothing-box">
    <image src="../../static/image/bg_NoRecord.png" class="m-img"></image>
    <view class="m-text">暂无记录</view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.m-nothing-box {
  .m-img {
    width: 400rpx;
    height: 230rpx;
    display: block;
    margin: 0 auto;
    will-change: transform;
  }
  .m-text {
    text-align: center;
    font-size: $uni-m-font-size-f3;
    color: $uni-m-color-c2;
  }
}
</style>
