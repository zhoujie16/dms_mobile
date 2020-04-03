<template>
  <!-- 报表 -->
  <MPage ref="MPage">
    <view class="top-header">
      <view v-for="(item, index) in itemList" :key="index" @click="changeIndex(index)">
        <view
          :class="[
            { 'panel-tab-pressed': activeindex == index },
            { 'panel-tab': activeindex !== index }
          ]"
        >
          {{ item.title }}
        </view>
      </view>
    </view>
    <view class="container">
      <ReportPage :reportData="activeindex == 0 ? fetchParams_0 : fetchParams_1"></ReportPage>
    </view>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ReportPage from './components/report-page.vue';
export default {
  components: {
    ReportPage
  },
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 20 + 'px';
    return {
      itemList: [
        {
          title: '昨日'
        },
        {
          title: '本月'
        }
      ],
      activeindex: 0, // 当前tab的下标
      fetchApi: AjaxScrollData,
      fetchParams_0: {
        flag: 'yesterday',
        factoryCount: 8,
        factoryText: '昨日进厂台次',
        settleCount: 0,
        settleText: '昨日结算台次',
        machineCount: 0,
        machineText: '昨日机修台次',
        BPEXCount: 0,
        BPEXText: '昨日钣喷台次',
        maintenanceCount: 0,
        maintenanceText: '昨日保养台次',
        incomeText: '昨日收入',
        incomeMoney: 0,
        manHourText: '昨日工时收入',
        manHourMoney: 0,
        partText: '昨日零件收入',
        partMoney: 0,
        flowText: '昨日快流件收入',
        flowMoney: 0
      },
      fetchParams_1: {
        flag: 'month',
        factoryCount: 9,
        factoryText: '本月进厂台次',
        settleCount: 0,
        settleText: '本月结算台次',
        machineCount: 0,
        machineText: '本月机修台次',
        BPEXCount: 0,
        BPEXText: '本月钣喷台次',
        maintenanceCount: 0,
        maintenanceText: '本月保养台次',
        incomeText: '本月收入',
        incomeMoney: 0,
        manHourText: '本月工时收入',
        manHourMoney: 0,
        partText: '本月零件收入',
        partMoney: 0,
        flowText: '本月快流件收入',
        flowMoney: 0
      }
    };
  },
  methods: {
    changeIndex(index) {
      this.activeindex = index;
    },
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.top-header {
  /* #ifndef H5 */
  position: fixed;
  top: 0;
  left: 0;
  /* #endif*/
  width: 100%;
  background-color: $uni-m-color-cwhite;
  padding-bottom: 20rpx;
  display: flex;
  flex: 2;
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
.container {
  /* #ifndef H5 */
  margin-top: 100rpx;
  /* #endif*/
  height: calc(100vh-100rpx);
  overflow: scroll;
}
</style>
