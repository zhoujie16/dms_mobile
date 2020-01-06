<template>
  <view class="swiper-page-wrap" :style="{ height: 800 }">
    <view class="top-warp m-flex m-align-center">
      <view 
        class="m-flex m-flex-item m-align-center m-justify-center"
        v-for="(tab, i) in tabs" :key="i" 
        :class="{ active: curIndex === i }" 
        @click="changeTab(i)">
          {{ tab }}
      </view>
    </view>
    <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
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
              <view class="content">
                <view class="m-flex m-align-center m-height-80 content-top">未提交</view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">检查类别</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">任务名称</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查-201912</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">审核状态</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">未上报</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">服务经理</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">QWE2</view>
                </view>
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
            <view @click="scrollCellClick" v-for="(data, i) in dataSource_1" :key="i">
              <view class="content">
                <view class="m-flex m-align-center m-height-80 content-top">未提交</view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">检查类别</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">任务名称</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查-201912</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">审核状态</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">未上报</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">服务经理</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">QWE2</view>
                </view>
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
            <view @click="scrollCellClick" v-for="(data, i) in dataSource_2" :key="i">
              <view class="content">
                <view class="m-flex m-align-center m-height-80 content-top">未提交</view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">检查类别</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">任务名称</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">5S检查-201912</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">审核状态</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">未上报</view>
                </view>
                <view class="m-flex m-justify-around m-align-center">
                  <view class="m-height-80 content-left">服务经理</view>
                  <view class="m-height-80" style="flex: 1;text-align: left;">QWE2</view>
                </view>
              </view>
            </view>
          </baseScroll>
        </swiper-item>
      </swiper>
  </view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from '@/pages/appointment-check/components/scroll-cell.vue';
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
      tabs: ['全部', '未上报', '已上报'],
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
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },

    // 轮播菜单
    swiperChange(e) {
      this.changeTab(e.detail.current);
    },
    scrollCellClick() {}
  }
};
</script>

<style lang="scss">
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
  background-color: $uni-bg-color-page;
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
.container {
  padding: 20rpx;
  margin-top: 44rpx;
}
.content {
  background-color: #f7f7f7;
  margin: 20rpx;
  border-radius: 20rpx;
  padding-left: 20rpx;
}

.content-top {
  border-bottom: 1px solid #cccccc;
  padding-right: 10rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 30rpx;
  margin-bottom: 20rpx;
}

.content-left {
  flex: 0 0 200rpx;
  color: #c0c0c0;
  font-size: 28rpx;
}
</style>
