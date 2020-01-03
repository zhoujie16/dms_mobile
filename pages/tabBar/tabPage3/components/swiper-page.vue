@@ -1,121 +0,0 @@
<template>
  <view class="swiper-page-wrap" :style="{ height: height }">
    <view class="top-warp m-flex m-align-center">
      <view
        class="m-flex m-flex-item m-align-center m-justify-center"
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ active: curIndex === i }"
        @click="changeTab(i)"
      >
        {{ tab }}
      </view>
    </view>
   <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
     <!-- 昨日 -->
      <swiper-item>
        <ReportPage :reportData='fetchParams_0'></ReportPage>
      </swiper-item>
     <!-- 本月 -->
      <swiper-item>
        <ReportPage :reportData='fetchParams_1'></ReportPage>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
// import ReportPage from '@/pages/tabBar/tabPage3/components/report-page.vue'
import ReportPage from './report-page.vue'

export default {
  components: {
    ReportPage
  },
  props: {
    height: {
      type: String,
      default: '800rpx'
    },
    fetchParams: {
      type: Object
    }
  },
  data() {
    return {
      tabs: ['昨日', '本月'],
      curIndex: 0, // 当前tab的下标
      fetchApi: AjaxScrollData,
      fetchParams_0: {
        flag:'yesterday',
        factoryCount:8,
        factoryText:'昨日进厂台次',
        settleCount:0,
        settleText:'昨日结算台次',
        machineCount:0,
        machineText:'昨日机修台次',
        BPEXCount:0,
        BPEXText:'昨日钣喷台次',
        maintenanceCount:0,
        maintenanceText:'昨日保养台次',
        incomeText:'昨日收入',
        incomeMoney:0,
        manHourText:'昨日工时收入',
        manHourMoney:0,
        partText:'昨日零件收入',
        partMoney:0,
        flowText:'昨日快流件收入',
        flowMoney:0
      },
      fetchParams_1: {
        flag:'month',
        factoryCount:9,
        factoryText:'本月进厂台次',
        settleCount:0,
        settleText:'本月结算台次',
        machineCount:0,
        machineText:'本月机修台次',
        BPEXCount:0,
        BPEXText:'本月钣喷台次',
        maintenanceCount:0,
        maintenanceText:'本月保养台次',
        incomeText:'本月收入',
        incomeMoney:0,
        manHourText:'本月工时收入',
        manHourMoney:0,
        partText:'本月零件收入',
        partMoney:0,
        flowText:'本月快流件收入',
        flowMoney:0
      },
    };
  },
  watch: {
    fetchParams(val) {
      this[`fetchParams_${this.curIndex}`] = val;
    }
  },
  methods: {
    // 轮播菜单
    swiperChange(e) {
      this.changeTab(e.detail.current);
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
    scrollCellClick() {
      console.log('scrollCellClick');
    }
  }
};
</script>

<style lang="scss">
.swiper-page-wrap {
  position: relative;
}
.swiper-wrap {
  background-color: $uni-bg-color-page;
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

.swiper-wrap {
  position: absolute;
  top: 80rpx;
  right: 0;
  bottom: 0;
  left: 0;
  height: initial;
  .swiper-item-wrap {
    height: 100%;
  }
}
</style>
