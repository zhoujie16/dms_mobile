<template>
  <view class="cell-wrap">
    <view class="left">
      <text class="vin">沪10001</text>
      <text class="name">笑笑</text>
    </view>
    <view class="right">YJ2002180006</view>
  </view>
</template>

<script></script>

<style lang="scss">
.cell-wrap {
  display: flex;
  background: $uni-m-color-cwhite;
  padding: 26rpx 30rpx;
  margin-bottom: 20rpx;
  border-radius: $uni-m-border-radius-b8;
  .left {
    flex: 1;
    // margin-bottom: 20rpx;
    .vin {
      font-weight: 800;
      font-size: $uni-m-font-size-f2;
    }
    .name {
      display: inline-block;
      margin-left: 20rpx;
      border: 2rpx dashed $uni-m-color-c3;
      background-color: $uni-m-color-c4;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
  }
  .right {
    color: $uni-m-color-c1;
  }
}
</style>
