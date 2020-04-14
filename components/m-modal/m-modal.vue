<template>
  <!-- 模态框组件 -->
  <uni-popup ref="popup" type="center" :maskClick="false">
    <view v-if="isShowPopup" class="m-modal">
      <view class="m-modal__inner">
        <view class="m-modal__title">{{ title }}</view>
        <view class="m-modal__content">{{ content }}</view>
      </view>
      <!-- 按钮 -->
      <view class="m-modal__bottom">
        <view
          @click="cancelHandleClick"
          v-if="showCancel"
          class="m-modal__btn"
          hover-class="m-modal__btn--hover"
          hover-stay-time="50"
        >
          {{ cancelText }}
        </view>
        <view v-if="showCancel" class="m-modal__bottom--line"></view>
        <view
          @click="confirmHandleClick"
          class="m-modal__btn m-modal__btn--primary"
          hover-class="m-modal__btn--hover"
          hover-stay-time="50"
          Ï
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
    showModal({
      title = '提示',
      content,
      showCancel = true,
      cancelText = '取消',
      confirmText = '确定'
    }) {
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
.m-modal {
  width: 560rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
  top: -100rpx;
  .m-modal__inner {
    padding: 50rpx 40rpx;
    border-bottom: solid 1rpx #efefef;
    .m-modal__title {
      color: #17212e;
      font-size: 34rpx;
      text-align: center;
      margin-bottom: 16rpx;
    }
    .m-modal__content {
      color: #70767f;
      font-size: 26rpx;
      text-align: center;
      max-height: 60vh;
      overflow: auto;
    }
  }
  .m-modal__bottom {
    height: 88rpx;
    display: flex;
    font-size: 34rpx;
    .m-modal__bottom--line {
      height: 100%;
      flex: 0 0 1rpx;
      background-color: #efefef;
    }
    .m-modal__btn {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #70767f;
      &.m-modal__btn--hover {
        // 点击态样式
        background-color: #f1f1f1;
      }
      &.m-modal__btn--primary {
        color: #1371f7;
      }
    }
  }
}
</style>
