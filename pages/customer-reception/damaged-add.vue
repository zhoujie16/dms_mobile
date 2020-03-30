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
            <VehicleFactPointPanel
              :partItem="carPartDict.FRONT"
              :points="points"
              @addPoint="addPoint"
            ></VehicleFactPointPanel>
          </swiper-item>

          <swiper-item>
            <VehicleFactPointPanel
              :partItem="carPartDict.BACK"
              :points="points"
              @addPoint="addPoint"
            ></VehicleFactPointPanel>
          </swiper-item>

          <swiper-item>
            <VehicleFactPointPanel
              :partItem="carPartDict.LEFT"
              :points="points"
              @addPoint="addPoint"
            ></VehicleFactPointPanel>
          </swiper-item>

          <swiper-item>
            <VehicleFactPointPanel
              :partItem="carPartDict.RIGHT"
              :points="points"
              @addPoint="addPoint"
            ></VehicleFactPointPanel>
          </swiper-item>

          <swiper-item>
            <VehicleFactPointPanel
              :partItem="carPartDict.TOP"
              :points="points"
              @addPoint="addPoint"
            ></VehicleFactPointPanel>
          </swiper-item>
        </swiper>
      </SwiperTab>
      <!-- 故障点列表 -->
      <view class="m-break-space"></view>
      <ScrollIssue
        v-for="(point, i) in points"
        :key="i"
        :point="point"
        @deletePoint="deletePoint"
      ></ScrollIssue>
    </view>
  </MPage>
</template>

<script>
import VehicleFactPointPanel from './components/vehicle-fact-point-panel/index.vue';
import ScrollIssue from './components/scroll-issue.vue';
import { CAR_LIST } from './components/vehicle-fact-point-panel/config.js';

export default {
  name: 'damaged-add',
  components: {
    VehicleFactPointPanel,
    ScrollIssue
  },
  mounted() {},
  data() {
    this.swiperTabHeight = '200px';
    return {
      tabs: ['车头', '车尾', '左面', '右面', '车顶'],
      curIndex: 0, // 当前tab的下标
      carPartDict: CAR_LIST.VLA9.CAR_PARTS,
      points: []
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
    // 添加一个点
    addPoint(point) {
      this.points.unshift(point);
    },
    async deletePoint(point) {
      const res = await this.SHOW_MODAL({
        title: '确认删除',
        // content: '提示的内容',
        showCancel: true,
        cancelText: '取消',
        confirmText: '确定'
      });
      if (res === 'confirm') {
        const index = this.points.findIndex(x => x === point);
        this.points.splice(index, 1);
      }
    }
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
