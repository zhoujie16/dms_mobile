<template>
  <view class="m-swiper-tab">
    <view class="m-swiper-tab__top">
      <view
        class="m-swiper-tab__slide"
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ 'm-swiper-tab__slide--active': curIndex === i }"
        @click="$emit('change', i)"
      >
        <view class="m-swiper-tab__slide-text">{{ tab }}</view>
        <view class="m-swiper-tab__slide-bottom"></view>
      </view>
    </view>
    <view :style="{ height: height }" class="m-swiper-tab__content"><slot></slot></view>
  </view>
</template>

<script>
export default {
  name: 'm-swiper-tab',
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
.m-swiper-tab__top {
  display: flex;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 88rpx;
  background-color: #ffffff;
  color: #70767f;
  .m-swiper-tab__slide {
    position: relative;
    height: 88rpx;
    font-size: 30rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rpx;
    .m-swiper-tab__slide-text {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .m-swiper-tab__slide-bottom {
      display: none;
      flex: 0 0 10rpx;
      width: 20%;
      border-radius: 6rpx;
      background-color: #1371f7;
    }
    &.m-swiper-tab__slide--active {
      font-size: 36rpx;
      color: #2f2f2f;
      font-weight: 500;
      .m-swiper-tab__slide-bottom {
        display: initial;
      }
    }
  }
}
.m-swiper-tab__content {
  position: relative;
  /* #ifdef H5 */
  height: calc(100vh - 168rpx);
  /* #endif */
}
</style>
