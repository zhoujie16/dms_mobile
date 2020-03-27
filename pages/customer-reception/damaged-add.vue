<template>
  <MPage ref="MPage" type="primary">
    <view class="swiper-page-wrap">
      <SwiperTab
        :height="swiperTabHeight"
        class="swiper-wrap"
        :tabs="tabs"
        :curIndex="curIndex"
        @change="changeTab"
      >
        <swiper :current="curIndex" @change="swiperChange">
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 车头 /static/service/VLA9_front.png-->
              <view class="img-warp">
                <image
                  class="img_front"
                  src="/static/service/VLA9_front.png"
                  mode="scaleToFill"
                ></image>
              </view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 车尾 -->
              <view class="img-warp">
                <image
                  class="img_back"
                  src="/static/service/VLA9_back.png"
                  mode="scaleToFill"
                ></image>
              </view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 左面 -->
              <view class="img-warp">
                <image
                  class="img_left"
                  src="/static/service/VLA9_left.png"
                  mode="scaleToFill"
                ></image>
              </view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 右面 -->
              <view class="img-warp">
                <image
                  class="img_right"
                  src="/static/service/VLA9_right.png"
                  mode="scaleToFill"
                ></image>
              </view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <!-- 车顶 -->
              <view class="img-warp">
                <image
                  class="img_right"
                  src="/static/service/VLA9_top.png"
                  mode="scaleToFill"
                ></image>
              </view>
            </scroll-view>
          </swiper-item>
        </swiper>
      </SwiperTab>
      <view class="m-break-space"></view>
      <CollapsePanel title="故障记录点">
        <ScrollIssue></ScrollIssue>
        <view class="m-break-space"></view>
        <ScrollIssue></ScrollIssue>
      </CollapsePanel>
    </view>
  </MPage>
</template>

<script>
import ScrollIssue from './components/scroll-issue.vue';
export default {
  name: 'damaged-add',
  components: {
    ScrollIssue
  },
  data() {
    this.swiperTabHeight = 400 + 'rpx';
    return {
      tabs: ['车头', '车尾', '左面', '右面', '车顶'],
      curIndex: 0, // 当前tab的下标
      imgSrc: '/static/service/',
      model: 'VLA9' //车型
    };
  },
  onLoad() {},
  methods: {
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
    getImage() {}
  }
};
</script>

<style lang="scss" scoped>
.swiper-page-wrap {
  .swiper-wrap {
    background-color: $uni-m-color-cwhite;
    height: initial;

    /deep/ .uni-swiper-wrapper {
      height: 400rpx;
    }
    .img-warp {
      height: 400rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .img_front {
      width: 400rpx;
      height: 280rpx;
    }
    .img_left {
      width: 640rpx;
      height: 200rpx;
    }
    .img_right {
      width: 640rpx;
      height: 200rpx;
    }
    .img_back {
      width: 400rpx;
      height: 280rpx;
    }
    .img_top {
      width: 640rpx;
      height: 280rpx;
    }
  }
}
</style>
