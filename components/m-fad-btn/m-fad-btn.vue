<template>
  <!-- 底部悬浮按钮 -->
  <view class="m-fad-btn" :class="[type]"><slot></slot></view>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'center'
    }
  }
};
</script>

<style lang="scss">
.m-fad-btn {
  height: 90rpx;
  border-radius: 50rpx;
  width: 400rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50rpx;
  font-size: $uni-font-size-lg;
  color: #ffffff;
  background-color: $uni-bg-color-navbar;
  &.left {
    left: 50rpx;
  }
  &.center {
    left: 175rpx;
  }
  &.right {
    right: 50rpx;
  }
}
</style>
