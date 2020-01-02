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
     
      <swiper-item>
        <ReportPage></ReportPage>
      </swiper-item>
     
      <swiper-item>
        
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
      fetchParams_0: {},
      fetchParams_1: {},
      dataSource_0: [],
      dataSource_1: []
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
