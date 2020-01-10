<template>
  <!-- 预约检查 -->
  <view class="page-warp">
    <search-filter ref="searchFilter">
      <SearchForm @confirm="searchFormConfirm"></SearchForm>
    </search-filter>
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
            <view v-for="(data, i) in dataSource_0" :key="i">
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
            <view v-for="(data, i) in dataSource_1" :key="i">
              <ScrollCell :cell="data"></ScrollCell>
            </view>
          </baseScroll>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from '@/pages/progress-query/components/scroll-cell.vue';
import SwiperPage from '@/pages/appointment-check/components/swiper-page.vue';
import SearchForm from '@/pages/appointment-check/components/search-form.vue';

export default {
  components: {
    SwiperPage,
    ScrollCell,
    SearchForm
  },
  data() {
    return {
      tabs: ['未交车', '已交车'],
      curIndex: 0, // 当前tab的下标
      fetchApi: AjaxScrollData,
      fetchParams_0: {},
      fetchParams_1: {},
      dataSource_0: [],
      dataSource_1: [],
      isShowDetail: false
    };
  },
  methods: {
    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
    // 轮播菜单
    swiperChange(e) {
      this.changeTab(e.detail.current);
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    },
  }
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  background-color: $uni-bg-color-page;
}
.swiper-page {
  height: 600rpx;
}
.swiper-item-wrap {
  height: 100%;
}
.swiper-page-wrap {
  position: relative;
  height: 44rpx;
}
.swiper-wrap {
  background-color: #EEEEEE;
  padding: 10rpx;
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
  height: calc(100vh - 100rpx);
  .swiper-item-wrap {
    height: 100%;
  }
}
</style>
