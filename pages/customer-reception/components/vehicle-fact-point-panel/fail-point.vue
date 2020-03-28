<template>
  <!-- 故障点 -->
  <view class="fail-point-wrap" :style="{ left: x + 'px', top: y + 'px' }">{{ num }}</view>
</template>

<script>
export default {
  props: {
    x: {
      type: Number
    },
    y: {
      type: Number
    },
    num: {
      type: Number
    }
  }
};
</script>

<style lang="scss">
.fail-point-wrap {
  position: absolute;
  background-color: #1371f7;
  font-size: 20rpx;
  font-weight: 200;
  color: #ffffff;
  width: 30rpx;
  height: 30rpx;
  border-radius: 30rpx;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
