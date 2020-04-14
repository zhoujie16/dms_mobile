<template>
  <!-- 筛选组件 底部按钮组 -->
  <view class="m-form-bottom-button">
    <view @click="resetBtnClick" class="reset">重置</view>
    <view @click="confirmBtnClick" class="submit">确定</view>
  </view>
</template>

<script>
export default {
  methods: {
    resetBtnClick() {
      this.$emit('reset');
    },
    confirmBtnClick() {
      this.$emit('confirm');
    }
  }
};
</script>

<style lang="scss">
.m-form-bottom-button {
  display: flex;
  .reset,
  .submit {
    flex: 1;
    height: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .reset {
    background: #ffffff;
    color: #333;
  }
  .submit {
    background: #1371f7;
    color: #ffffff;
  }
}
</style>
