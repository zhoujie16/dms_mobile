<template>
  <uni-popup ref="popup" :type="type" @change="popupChange">
    <view class="m-popup-wrap" :class="[type]">
      <view v-if="type == 'bottom'">
        <view class="m-popup-title">
          <view class="title">{{ title }}</view>
          <view class="icon">
            <text class="m-iconfont iconfont" @click="deleteHandleCLICK">&#xe720;</text>
          </view>
        </view>
      </view>
      <view v-else>
        <view class="m-popup-title">{{ title }}</view>
      </view>
      
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
    popupChange() {},
    deleteHandleCLICK() {
      this.$refs.popup.close();
    }
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
  .m-popup-bottom {
    display: flex;
    padding: 26rpx 30rpx;
    overflow: hidden;
    .title {
      flex: 1;
      font-size: $uni-m-font-size-f2;
      color: $uni-m-color-c1;
      line-height: 80rpx;
    }
    .icon {
      flex: 0 0 140rpx;
      text-align: right;
      .iconfont {
        font-size: 70rpx;
        color: $uni-m-color-c3;
      }
    }
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
  height: 70vh;
  .m-popup-title {
    display: flex;
    padding: 26rpx 30rpx;
    overflow: hidden;
    .title {
      flex: 1;
      font-size: $uni-m-font-size-f2;
      color: $uni-m-color-c1;
      line-height: 80rpx;
    }
    .icon {
      flex: 0 0 140rpx;
      text-align: right;
      .iconfont {
        font-size: 70rpx;
        color: $uni-m-color-c3;
      }
    }
  }
  // .m-popup-title {
  //   color: #333333;
  //   font-size: $uni-font-size-lg;
  //   border-bottom: solid 1px #888888;
  // }
  .m-popup-content {
    position: relative;
    height: calc(70vh - 80rpx);
    background: $uni-m-color-white-pressed;
    // padding: 20rpx;
  }
}
</style>
