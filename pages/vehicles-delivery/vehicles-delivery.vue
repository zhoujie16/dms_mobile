<template>
  <MPage ref="MPage" title="交车">
    <search-filter ref="searchFilter">
      <view slot="panel" class="panel-box">
        <view v-for="(item, index) in itemList" :key="index" @click="changeIndex(index)">
          <view
            :class="[
              { 'panel-tab-pressed': activeindex == index },
              { 'panel-tab': activeindex !== index }
            ]"
          >
            {{ item.title }}
            <text>{{ item.count }}</text>
          </view>
        </view>
      </view>
      <view slot="form"><SearchForm></SearchForm></view>
    </search-filter>
    <!-- <view class="refresh">已为您刷新。。。条信息</view> -->
    <view class="wrap">
      <!-- <BaseScroll
        :height="scrollHeight"
        :fetchApi="fetchApi"
        :fetchParams="fetchParams"
        @listChange="
          arr => {
            this.dataSource = arr;
          }
        "
      >
        <view slot="scroll" >
          <view v-for="(data, i) in dataSource" :key="i">
            <ScrollCell :cell="data" :activeindex="activeindex"></ScrollCell>
          </view>
        </view>
      </BaseScroll> -->
      <ScrollCell :cell="data" :activeindex="activeindex"></ScrollCell>
    </view>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from '@/pages/vehicles-delivery/components/scroll-cell.vue';
import SwiperPage from '@/pages/appointment-check/components/swiper-page.vue';
import SearchForm from '@/pages/vehicles-delivery/components/search-form.vue';

export default {
  components: {
    SwiperPage,
    ScrollCell,
    SearchForm
  },
  data() {
    return {
      activeindex: 0,
      isFolding: true,
      itemList: [
        {
          title: '未交车',
          count: 4
        },
        {
          title: '已交车',
          count: 3
        }
      ],
      curIndex: 0, // 当前tab的下标
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: [],
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
    changeIndex(index) {
      this.activeindex = index;
      console.log(this.activeindex, 'activeindex');
    },
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-box {
  display: flex;
  flex: 3;
  .panel-tab {
    width: 140rpx;
    height: 40rpx;
    line-height: 40rpx;
    border-radius: $uni-m-border-radius-b4;
    background-color: $uni-m-color-c5;
    color: $uni-m-color-c1;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 30rpx;
  }
  .panel-tab-pressed {
    width: 140rpx;
    height: 55rpx;
    line-height: 55rpx;
    border-radius: $uni-m-border-radius-b4;
    background-color: $uni-m-color-c11;
    color: $uni-m-color-cwhite;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 20rpx;
  }
}
.wrap {
  margin-top: 104rpx;
}
.refresh {
  height: 60rpx;
  line-height: 60rpx;
  background-color: $uni-m-color-c11;
  color: $uni-m-color-cwhite;
  text-align: center;
  font-size: $uni-m-font-size-f4;
}
</style>
