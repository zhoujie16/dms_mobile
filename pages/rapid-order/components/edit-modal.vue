<template>
  <view class="m-modal-wrap">
    <view class="m-modal-inner">
      <view class="m-modal-title">修改维修组合</view>
      <view class="uni-flex uni-row m-modal-content">
        <view class="flex-item repair-text">
          <view
            class="repair-fees"
            style="font-size: 30rpx; color: #262626;height: 60rpx; line-height: 60rpx;"
          >
            节气门清洗剂#欧瑞
          </view>
          <view class="repair-calculation" style="font-size: 20rpx; color: #666666;">
            ￥187.27 | 库存:54 | 仓库:OEMK
          </view>
        </view>
        <view class="flex-item repair-button">
          <view class="select-number">
            <button class="default" type="default" @click="onSubCount">-</button>
            <input type="number" disabled="true" :value="item.total_num" />
            <button class="default" type="default" @click="onAddCount">+</button>
          </view>
        </view>
      </view>
      <view class="uni-flex uni-row labourFees">
        <view class="flex-item" style="width: 30%; text-align: right;color: #262626;">工时费 ￥</view>
        <view class="flex-item"><input type="number" placeholder="0.00" style="border: 1px solid #ccc;width:180rpx" /></view>
      </view>
    </view>
    <!-- 按钮 -->
    <view class="m-modal-bottom">
      <view @click="cancelHandleClick" class="m-modal-btn" hover-class="hover" hover-stay-time="50">
        取消
      </view>
      <view v-if="showCancel" class="m-modal-bottom-line"></view>
      <view
        @click="confirmHandleClick"
        class="m-modal-btn primary"
        hover-class="hover"
        hover-stay-time="50"
      >
        确定
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      item: {
        total_num: '3',
        labourFees: ''
      },
      title: '',
      content: '',
      showCancel: true,
      cancelText: '',
      confirmText: ''
    };
  },
  computed: {},
  methods: {
    onSubCount() {
      if (this.item.total_num) {
        this.item.total_num--;
      }
    },
    onAddCount() {
      this.item.total_num++;
    },
    confirmHandleClick() {
      this.$emit('confirm');
    },
    cancelHandleClick() {
      this.$emit('cancel');
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
  position: relative;
  top: -100rpx;
  .m-modal-inner {
    // padding: 50rpx 40rpx;
    border-bottom: solid 1rpx #efefef;
    .m-modal-title {
      height: 88rpx;
      line-height: 88rpx;
      background-color: $uni-m-color-c4-2;
      color: #17212e;
      font-size: 34rpx;
      text-align: center;
      margin-bottom: 16rpx;
    }
    .m-modal-content {
      padding: 20rpx 0 20px 20rpx;
      color: #70767f;
      font-size: 26rpx;
      // text-align: center;
      max-height: 60vh;
      overflow: auto;
      .repair-text {
        width: 60%;
      }
      .repair-button {
        width: 40%;
        text-align: center;
        padding-top: 20rpx;
        .select-number {
          width: 202rpx;
          height: 52rpx;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border: 1rpx solid rgb(231, 231, 231);
          border-radius: 5rpx;
          .default {
            width: 60rpx;
            height: 48rpx;
            line-height: 48rpx;
            padding: 0;
            background: #fff;
            color: #444;
            font-size: 40rpx;
            border-radius: unset;
          }
          input {
            width: 80rpx;
            height: 50rpx;
            line-height: 50rpx;
            border-right: 1rpx solid #eee;
            border-left: 1rpx solid #eee;
            text-align: center;
            font-size: 28rpx;
            color: #444;
          }
          button:after {
            content: none;
            border: none;
          }
        }
      }
    }
    .labourFees {
      height: 50rpx;
      line-height: 50rpx;
      padding-left: 20rpx;
    }
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
</style>
