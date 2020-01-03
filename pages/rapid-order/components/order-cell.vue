<template>
  <view class="cell-wrap">
    <view class="order-title">YJ202012345</view>
    <view class="order-detail-item">
      <view class="t">沪ADC10086</view>
      <view class="c">新福克斯</view>
    </view>
    <view class="order-detail-item">
      <view class="t">王大锤</view>
      <view class="c">LVSHCAME445567734874365</view>
    </view>
  </view>
</template>

<script></script>

<style lang="scss">
.cell-wrap {
  padding: 0 20rpx;
  border-bottom: solid 20rpx #EEEEEE;
  .order-title {
    padding: 10rpx 0;
    font-size: $uni-font-size-base;
  }
  .order-detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rpx 0;
    font-size: $uni-font-size-sm;
    .t {
    }
    .c {
    }
  }
}
</style>
