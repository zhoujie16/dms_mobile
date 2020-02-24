<template>
  <view class="swiper-tab-wrap">
    <view class="top-warp">
      <view
        class="tab-slide"
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ active: curIndex === i }"
        @click="$emit('change', i)"
      >
        <view class="tab-text">{{ tab }}</view>
        <view class="tab-bottom"></view>
      </view>
    </view>
    <view :style="{ height: height }" class="swiper-content"><slot></slot></view>
  </view>
</template>

<script>
export default {
  name: 'swiper-tab-wrap',
  mounted() {},
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
      default() {
        return uni.getSystemInfoSync().windowHeight - 40 + 'px';
      }
    }
  }
};
</script>

<style lang="scss">
.swiper-page-wrap {
  position: relative;
}

.top-warp {
  display: flex;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 88rpx;
  background-color: #ffffff;
  color: #70767f;
  .tab-slide {
    position: relative;
    height: 88rpx;
    font-size: 30rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rpx;
    .tab-text{ 
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tab-bottom {
      display: none; 
      flex: 0 0 10rpx; 
      width: 20%;
      border-radius: 6rpx;
      background-color: #1371f7;
    }
  }
  .tab-slide.active {
    font-size: 36rpx;
    color: #2f2f2f;
    .tab-bottom {
      display: initial;
    }
  }
}
.swiper-content {
  position: relative;
  /* #ifdef H5 */
  height: calc(100vh - 168rpx);
  /* #endif */
}
</style>
