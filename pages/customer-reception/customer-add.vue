@@ -1,121 +0,0 @@
<template>
  <view class="swiper-page-wrap">
    <SwiperTab height="calc(100vh - 80rpx);" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
      <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
        <!--全部 -->
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <CustomerInfoPanel></CustomerInfoPanel>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <CustomerDemandPanel></CustomerDemandPanel>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <VehicleFacePanel></VehicleFacePanel>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <DetailPreviewPanel></DetailPreviewPanel>
          </scroll-view>
        </swiper-item>
      </swiper>
    </SwiperTab>
  </view>
</template>

<script>
import CustomerInfoPanel from './components/customer-info-panel.vue';
import CustomerDemandPanel from './components/customer-demand-panel.vue';
import VehicleFacePanel from './components/vehicle-face-panel.vue';
import DetailPreviewPanel from './components/detail-preview-panel.vue';
export default {
  components:{
    CustomerInfoPanel,
    CustomerDemandPanel,
    VehicleFacePanel,
    DetailPreviewPanel
  },
  props: {
    height: {
      type: String,
      default: '800rpx'
    }
  },
  data() {
    return {
      tabs: ['客户信息', '客户需求', '车身外观', '详情预览'],
      curIndex: 0 // 当前tab的下标
    };
  },
  watch: {},
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

<style lang="scss">
.swiper-wrap {
  background-color: $uni-bg-color-page;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: initial;
}
.swiper-scroll-wrap{
  height: 100%;
}
</style>
