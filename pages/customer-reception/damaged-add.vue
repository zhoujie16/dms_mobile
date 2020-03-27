<template>
  <MPage ref="MPage" type="primary">
    <view class="swiper-page-wrap">
      <SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
        <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 车头 /static/service/VLA9_front.png-->
              <view class="img-warp">
                <image class="img" :src="imgSrc" mode="scaleToFill"></image>
              </view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 车尾 -->
              <view class="img-warp"><image :src="imgSrc" mode="scaleToFill"></image></view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 左面 -->
              <view class="img-warp"><image :src="imgSrc" mode="scaleToFill"></image></view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 右面 -->
              <view class="img-warp"><image :src="imgSrc" mode="scaleToFill"></image></view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 车顶 -->
              <view class="img-warp"><image :src="imgSrc" mode="scaleToFill"></image></view>
            </scroll-view>
          </swiper-item>
        </swiper>
      </SwiperTab>
      <CollapsePanel title="故障记录点"></CollapsePanel>
    </view>
  </MPage>
</template>

<script>
export default {
  data() {
    this.swiperTabHeight = 400 + 'rpx';
    return {
      tabs: ['车头', '车尾', '左面', '右面', '车顶'],
      curIndex: 0, // 当前tab的下标
      imgSrc: '/static/service/',
      model: 'VLA9' //车型
    };
  },
  onLoad() {

  },
  methods: {
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-page-wrap {
  position: relative;
}
.img-warp {
  background-color: $uni-m-color-cwhite;
  width: 100%;
  height: 400rpx;
}
</style>
