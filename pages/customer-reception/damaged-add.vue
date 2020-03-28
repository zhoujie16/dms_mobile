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
        <swiper style="height: 100%;" :current="curIndex" @change="swiperChange">
          <swiper-item>
            <VehicleFactPointPanel :partItem="carPartDict.FRONT"></VehicleFactPointPanel>
          </swiper-item>
          <swiper-item>
            <VehicleFactPointPanel :partItem="carPartDict.BACK"></VehicleFactPointPanel>
          </swiper-item>
          <swiper-item>
            <VehicleFactPointPanel :partItem="carPartDict.LEFT"></VehicleFactPointPanel>
          </swiper-item>
          <swiper-item>
            <VehicleFactPointPanel :partItem="carPartDict.RIGHT"></VehicleFactPointPanel>
          </swiper-item>
          <swiper-item>
            <VehicleFactPointPanel :partItem="carPartDict.TOP"></VehicleFactPointPanel>
          </swiper-item>
        </swiper>
      </SwiperTab>
    </view>
  </MPage>
</template>

<script>
import VehicleFactPointPanel from './components/vehicle-fact-point-panel/index.vue';
import { CAR_LIST } from './components/vehicle-fact-point-panel/config.js';

export default {
  name: 'damaged-add',
  components: {
    VehicleFactPointPanel
  },
  mounted() {},
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 40 + 'px';
    return {
      tabs: ['车头', '车尾', '左面', '右面', '车顶'],
      curIndex: 0, // 当前tab的下标
      carPartDict: CAR_LIST.VLA9.CAR_PARTS
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
  }
}
</style>
