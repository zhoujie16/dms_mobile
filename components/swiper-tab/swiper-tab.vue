<template>
  <view class="swiper-tab-wrap">
    <view class="top-warp m-flex m-align-center">
      <view
        class="m-flex m-flex-item m-align-center m-justify-center"
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ active: curIndex === i }"
        @click="$emit('change', i)"
      >
        {{ tab }}
      </view>
    </view>
    <view :style="{ height }" class="swiper-content">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'swiper-tab-wrap',
  mounted() {
    
  },
  props: {
    tabs: {
      type: Array,
      default: []
    },
    curIndex: {
      type: Number,
      default: 0
    },
    height: {
      type: String,
      default: 'calc(100vh - 80rpx);'
    }
  }
};
</script>

<style lang="scss">
.swiper-page-wrap {
  position: relative;
}

.top-warp {
  z-index: 10;
  /* css变量 */
  width: 100%;
  height: 80rpx;
  background-color: $uni-bg-color-navbar;
  color: $uni-text-color-grey;
  border-bottom: 1upx solid $uni-color-primary;
  view {
    height: 80rpx;
    font-size: 28rpx;
  }
  .active {
    border-bottom: 2rpx solid #ffffff;
    color: #ffffff;
  }
}
.swiper-content {
  position: relative;
  /* #ifdef H5 */
  height: calc(100vh - 168rpx);
  /* #endif */
}
</style>
