<template>
  <view class="drawer-wrap">
    <view class="user-panel m-flex m-justify-center m-align-center">系统管理员</view>
    <view class="menu-wrap">
      <view class="menu-item m-flex m-align-center">
        <image
          class="menu-item-icon"
          src="../../../static/demo/60x60.png"
          mode="scaleToFill"
        ></image>
        <view class="menu-item-text">个人名片</view>
      </view>
      <view class="menu-item m-flex m-align-center">
        <image
          class="menu-item-icon"
          src="../../../static/demo/60x60.png"
          mode="scaleToFill"
        ></image>
        <view class="menu-item-text">版本更新</view>
      </view>
      <view class="menu-item m-flex m-align-center">
        <image
          class="menu-item-icon"
          src="../../../static/demo/60x60.png"
          mode="scaleToFill"
        ></image>
        <view class="menu-item-text">修改密码</view>
      </view>
      <view class="menu-item m-flex m-align-center">
        <image
          class="menu-item-icon"
          src="../../../static/demo/60x60.png"
          mode="scaleToFill"
        ></image>
        <view class="menu-item-text">客服热线</view>
      </view>
      <view class="menu-item m-flex m-align-center">
        <image
          class="menu-item-icon"
          src="../../../static/demo/60x60.png"
          mode="scaleToFill"
        ></image>
        <view class="menu-item-text">操作手册</view>
      </view>
      <view class="menu-item m-flex m-align-center">
        <image
          class="menu-item-icon"
          src="../../../static/demo/60x60.png"
          mode="scaleToFill"
        ></image>
        <view class="menu-item-text">退出</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.drawer-wrap {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.user-panel {
  height: 400rpx;
  background-color: rgb(60, 80, 100);
  color: $uni-text-color-inverse;
}
.menu-wrap {
  flex: 1;
  padding: 50rpx 0;
  background-color: rgb(53, 59, 78);
  color: $uni-text-color-inverse;
}
.menu-item {
  height: 80rpx;
  padding: 0 60rpx;
}
.menu-item-icon {
  width: 40rpx;
  height: 40rpx;
}
.menu-item-text {
  padding-left: 30rpx;
}
</style>
