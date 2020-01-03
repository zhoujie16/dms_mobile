<template>
  <uni-popup ref="popup" :type="type" @change="popupChange">
    <view class="m-popup-wrap" :class="[type]">
      <view class="m-popup-title">{{ title }}</view>
      <view class="m-popup-content"><slot></slot></view>
    </view>
  </uni-popup>
</template>

<script>
export default {
  name: 'm-popup',
  mounted() {},
  props: {
    title: {
      type: String,
      default: '标题'
    },
    type: {
      type: String,
      default: 'center'
    }
  },
  watch: {},
  data() {
    return {};
  },
  methods: {
    open() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    popupChange() {}
  }
};
</script>

<style lang="scss">
.m-popup-wrap {
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  .m-popup-title {
    height: 80rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.m-popup-wrap.center {
  width: 600rpx;
  height: 70vh;
  border-radius: 30rpx;
  .m-popup-title {
    color: #ffffff;
    font-size: $uni-font-size-lg;
    background-color: $uni-bg-color-navbar;
  }
  .m-popup-content {
    position: relative;
    height: calc(70vh - 80rpx);
  }
}
.m-popup-wrap.bottom {
  width: 750rpx;
  height: 60vh;
  .m-popup-title {
    color: #333333;
    font-size: $uni-font-size-lg;
    border-bottom: solid 1px #888888;
  }
  .m-popup-content {
    position: relative;
    height: calc(60vh - 80rpx); 
  }
}
</style>
