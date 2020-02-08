@@ -1,121 +0,0 @@
<template>
  <view class="swiper-page-wrap">
    <SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
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
            <view style="padding: 20rpx;">
              <view @click="scrollCellClick" v-for="(data, i) in dataSource_0" :key="i">
                <ScrollCell :cell="data"></ScrollCell>
              </view>
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
            <view style="padding: 20rpx;">
              <view @click="scrollCellClick" v-for="(data, i) in dataSource_0" :key="i">
                <ScrollCell :cell="data"></ScrollCell>
              </view>
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
            <view style="padding: 20rpx;">
              <view @click="scrollCellClick" v-for="(data, i) in dataSource_0" :key="i">
                <ScrollCell :cell="data"></ScrollCell>
              </view>
            </view>
          </baseScroll>
        </swiper-item>
      </swiper>
    </SwiperTab>
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
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 90 + 'px';
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
.swiper-wrap{
  background-color: $uni-bg-color-page;
  height: 100%;
  // position: absolute;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // height: initial;
}
</style>
