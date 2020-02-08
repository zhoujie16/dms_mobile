<template>
  <MPage ref="MPage">
  <view class="swiper-page-wrap">
    <SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
      <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
        <!--全部 -->
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true"><VehiclePreview></VehiclePreview></scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true"><InteriorCheck></InteriorCheck></scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true"><EngineNacelle></EngineNacelle></scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true"><ChassisRound></ChassisRound></scroll-view>
        </swiper-item>
      </swiper>
    </SwiperTab>
    <view class="uni-flex uni-row v-footer">
      <view class="flex-item v-border" @click="adviseClick">建议</view>
      <view class="flex-item v-border" @click="previewClick">预览</view>
      <view class="flex-item v-border">暂存</view>
       <view class="flex-item ">保存</view>
    </view>
  </view>
   </MPage>
</template>

<script>
import VehiclePreview from './components/vehicle-preview.vue';
import InteriorCheck from './components/interior-check.vue';
import EngineNacelle from './components/engine-nacelle.vue';
import ChassisRound from './components/chassis-round.vue';
export default {
  components: {
    VehiclePreview,
    InteriorCheck,
    EngineNacelle,
    ChassisRound
  },
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 40 + 'px';
    return {
      tabs: ['预捡查看', '内饰检查', '发动机舱', '底盘四轮'],
      curIndex: 3 // 当前tab的下标
    };
  },
  methods: {
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
    // 建议
    adviseClick(){
      uni.navigateTo({
        url: `/pages/vehicle-inspection/components/advise`
      });
    },
    // 预览
    previewClick(){
      uni.navigateTo({
        url: `/pages/vehicle-inspection/components/preview`
      });
    }
  }
};
</script>

<style lang="scss">
.swiper-page-wrap {
  position: relative;
  .v-footer {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 120rpx;
    padding: 30rpx 0;
    .flex-item {
      width: 25%;
      text-align: center;
      line-height: 60rpx;
      // line-height: 200rpx;
    }
    .v-border{
      border-right: 2rpx solid #CCCCCC;
    }
  }
}
.swiper-wrap {
  background-color: $uni-bg-color-page;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: initial;
}
.swiper-scroll-wrap {
  height: 100%;
}
</style>
