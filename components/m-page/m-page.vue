<template>
  <view class="m-page-wrap" :class="type">
    <view v-if="type == primary">
      <view class="status-bar-wrap">
        <view class="m-status-bar"></view>
        <uni-nav-bar class="nav-bar" left-icon="arrowleft" :title="title" @clickLeft="back" />
        <view class="status-bar-bg"></view>
      </view>
    </view>
    <view v-else class="nav">
      <view class="status-bar-wrap">
        <view class="m-status-bar"></view>
        <uni-nav-bar
          class="nav-bar"
          left-icon="arrowleft"
          :title="title"
          @clickLeft="back"
          @clickRight="handClick"
        >
          <block slot="right" v-if="isRight">
            <view>
              <text class="m-iconfont icon">{{ rightIcon }}</text>
            </view>
          </block>
        </uni-nav-bar>
        <view class="status-bar-bg"></view>
      </view>
    </view>
    <div class="content"><slot></slot></div>
    <view class="m-page-popup-group">
      <MPickerPopup ref="MPickerPopup"></MPickerPopup>
      <MCheckboxPopup ref="MCheckboxPopup"></MCheckboxPopup>
      <MDatePickerPopup ref="MDatePickerPopup"></MDatePickerPopup>
      <MModal ref="MModal"></MModal>
      <MActionSheet ref="MActionSheet"></MActionSheet>
      <MKeyboard ref="MKeyboard"></MKeyboard>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-page',
  props: {
    // 页面背景色，可选值 primary  default
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: 'uniApp'
    },
    isRight: {
      type: Boolean,
      default: false
    },
    rightIcon: {
      type: String,
      default: '&#xe721;'
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.MPickerPopup = this.$refs.MPickerPopup;
    this.MCheckboxPopup = this.$refs.MCheckboxPopup;
    this.MDatePickerPopup = this.$refs.MDatePickerPopup;
    this.MModal = this.$refs.MModal;
    this.MActionSheet = this.$refs.MActionSheet;
    this.MKeyboard = this.$refs.MKeyboard;
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    handClick() {
      this.$emit('rightClick');
    }
  }
};
</script>

<style lang="scss">
.m-page-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  &.default {
    background-color: $uni-m-color-white-pressed;
    .nav {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      height: 100rpx;
    }
    .content {
      margin-top: 110rpx;
    }
  }
  &.primary {
    background-color: $uni-m-color-white-pressed;
    .status-bar-wrap {
      position: relative;
      background: #ffffff;
      /deep/ .nav-bar {
        .uni-navbar__content {
          z-index: 1;
          background-color: initial !important;
          .uni-navbar__header {
            background-color: initial !important;
          }
        }
        .uni-icons,
        .uni-nav-bar-text {
          color: #ffffff !important;
        }
      }
      .status-bar-bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(to right, #41c5ff, #1371f7);
        z-index: 0;
      }
    }
  }
}
</style>
