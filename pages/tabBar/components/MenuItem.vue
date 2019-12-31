<template>
  <view class="grid-item-box">
    <image :src="item.url" class="image" mode="widthFix" />
    <text class="text">{{ item.text }}</text>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.grid-item-box {
  flex: 1;
  /* position: relative;*/
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}

.text {
  font-size: 30rpx;
  color: $uni-text-color-inverse;
}

.image {
  width: 90rpx;
  margin-top: 20rpx;
  margin-bottom: 40rpx;
  height: 90rpx;
}
</style>
