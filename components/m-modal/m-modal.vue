<template>
  <uni-popup ref="popup" type="center" :maskClick="false">
    <view v-if="isShowPopup" class="m-modal-wrap">
      <view class="m-modal-inner">
        <view class="m-modal-title">{{ title }}</view>
        <view class="m-modal-content">{{ content }}</view>
      </view>
      <!-- 按钮 -->
      <view class="m-modal-bottom">
        <view
          @click="cancelHandleClick"
          v-if="showCancel"
          class="m-modal-btn"
          hover-class="hover"
          hover-stay-time="50"
        >
          {{ cancelText }}
        </view>
        <view v-if="showCancel" class="m-modal-bottom-line"></view>
        <view
          @click="confirmHandleClick"
          class="m-modal-btn primary"
          hover-class="hover"
          hover-stay-time="50"
        >
          {{ confirmText }}
        </view>
      </view>
    </view>
  </uni-popup>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isShowPopup: false,
      title: '',
      content: '',
      showCancel: true,
      cancelText: '',
      confirmText: ''
    };
  },
  computed: {},
  methods: {
    showModal({ title, content, showCancel = true, cancelText = '取消', confirmText = '确定' }) {
      return new Promise(reslove => {
        this.isShowPopup = true;
        this.title = title;
        this.content = content;
        this.showCancel = showCancel;
        this.cancelText = cancelText;
        this.confirmText = confirmText;
        this.$refs.popup.open();
        this.confirm = async value => {
          await this.$sleep(100);
          this.$refs.popup.close();
          // 延时 300 为了不影响动画的连贯性
          await this.$sleep(300);
          this.isShowPopup = false;
          reslove(value);
        };
      });
    },
    confirmHandleClick() {
      this.confirm('confirm');
    },
    cancelHandleClick() {
      this.confirm('cancel');
    }
  }
};
</script>

<style lang="scss" scoped>
.m-modal-wrap {
  width: 560rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  overflow: hidden;
  .m-modal-inner {
    padding: 50rpx 40rpx;
    border-bottom: solid 1rpx #efefef;
    .m-modal-title {
      color: #17212e;
      font-size: 34rpx;
      text-align: center;
      margin-bottom: 16rpx;
    }
    .m-modal-content {
      color: #70767f;
      font-size: 26rpx;
      text-align: center;
      max-height: 60vh;
      overflow: auto;
    }
  }
  .m-modal-bottom {
    height: 88rpx;
    display: flex;
    font-size: 34rpx;
    .m-modal-bottom-line {
      height: 100%;
      flex: 0 0 1rpx;
      background-color: #efefef;
    }
    .m-modal-btn {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #70767f;
      &.hover {
        // 点击态样式
        background-color: #f1f1f1;
      }
      &.primary {
        color: #1371f7;
      }
    }
  }
}
</style>
