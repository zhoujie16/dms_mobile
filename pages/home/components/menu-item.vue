<template>
  <view class="grid-item-box">
    <view class="icon-wrap">
       <!-- <fa-icon class="icon" :type="item.icon" size="30" color="#fff"></fa-icon> -->
       <image :src="item.image" class="img"></image>
    </view>
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
  font-size: $uni-m-font-size-f4;
  color: $uni-m-color-c17;
}

.icon-wrap {
  width: 80rpx;
  // margin-top: 20rpx;
  margin-bottom: 12rpx;
  height: 80rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
