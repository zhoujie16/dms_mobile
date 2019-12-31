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
      <!--全部 -->
      <swiper-item>
        <baseScroll
          :top="0"
          :fetchApi="fetchApi"
          :fetchParams="fetchParams_0"
          @listChange="
            arr => {
              this.dataSource_0 = arr;
            }
          "
        >
          <view @click="scrollCellClick" v-for="(data, i) in dataSource_0" :key="i">
            <ScrollCell :cell="data"></ScrollCell>
          </view>
        </baseScroll>
      </swiper-item>
      <swiper-item>
        <baseScroll
          :top="0"
          :fetchApi="fetchApi"
          :fetchParams="fetchParams_1"
          @listChange="
            arr => {
              this.dataSource_1 = arr;
            }
          "
        >
          <view @click="scrollCellClick" v-for="(data, i) in dataSource_1" :key="i">
            <ScrollCell :cell="data"></ScrollCell>
          </view>
        </baseScroll>
      </swiper-item>
      <swiper-item>
        <baseScroll
          :top="0"
          :fetchApi="fetchApi"
          :fetchParams="fetchParams_2"
          @listChange="
            arr => {
              this.dataSource_2 = arr;
            }
          "
        >
          <view @click="scrollCellClick" v-for="(data, i) in dataSource_2" :key="i">
            <ScrollCell :cell="data"></ScrollCell>
          </view>
        </baseScroll>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from './scroll-cell';

export default {
  components: {
    ScrollCell
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
      tabs: ['未进场', '已进场', '已取消'],
      curIndex: 0, // 当前tab的下标
      fetchApi: AjaxScrollData,
      fetchParams_0: {},
      fetchParams_1: {},
      fetchParams_2: {},
      dataSource_0: [],
      dataSource_1: [],
      dataSource_2: []
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
