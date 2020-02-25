<!-- 工单详情 -->
<template>
  <MPage ref="MPage">
    <view class="status-bar-wrap">
      <view class="m-status-bar"></view>
      <!-- 自定义导航栏 -->
      <uni-nav-bar class="nav-bar" left-icon="arrowleft" title="工单信息" @clickLeft="back" />
      <view class="status-bar-bg"></view>
    </view>
    <view class="page-body">
      <view class="title-panel">
        <view class="title-panel-inner">
          <view class="customer-info">王大锤 - 沪ADC520</view>
          <view class="car-info">皮蛋卡丁车 1.5L AT</view>
        </view>
        <view class="title-panel-bg"></view>
      </view>
      <CollapsePanel title="基本信息">
        <template slot="default">
          <MLabel label="车主">王大锤</MLabel>
          <MLabel label="车主编号">xxxxxxxxxx</MLabel>
          <MLabel label="VIN">xxxxxxxxxxxxxxxxx</MLabel>
          <MLabel label="品牌">测试品牌</MLabel>
          <MLabel label="送修人">王尼玛</MLabel>
          <MLabel label="送修人邮箱">xxxxxxxxx@xxx.com</MLabel>
          <MLabel label="进厂里程">100000km</MLabel>
          <MLabel label="服务顾问">张全蛋</MLabel>
          <MLabel label="预约单号">xxxxxxxxxx</MLabel>
        </template>
      </CollapsePanel>
      <CollapsePanel title="工单信息">
        <template slot="default">
          <MLabel label="工单编号">xxxxxxxxxx</MLabel>
          <MLabel label="维修类型">普通维修</MLabel>
          <MLabel label="工单状态">在修</MLabel>
          <MLabel label="开单日期">2020-0202 20:20:20</MLabel>
          <MCheckboxPanel
            label="其他备注"
            type="inner"
            v-model="value_1"
            :itemList="itemList_1"
          ></MCheckboxPanel>
          <MLabel label="工时单价">￥1,000.00</MLabel>
          <MLabel label="工时费">￥1,000.00</MLabel>
        </template>
      </CollapsePanel>
    </view>
  </MPage>
</template>

<script>
import AmonitorInfo from './components/monitor-info.vue';
export default {
  components: {
    AmonitorInfo
  },
  data() {
    return {
      value_1: [1, 3, 6],
      itemList_1: [
        { text: '客户在厂', value: 1 },
        { text: '需要洗车', value: 2 },
        { text: '需要路试', value: 3 },
        { text: '需要质检', value: 4 },
        { text: '带走旧件', value: 5 },
        { text: '曾秀保养', value: 6 },
        { text: '不要积分', value: 7 },
        { text: '三日电访', value: 8 }
      ]
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="scss">
.status-bar-wrap {
  position: relative;
  background: #ffffff;
  /deep/ .nav-bar {
    .uni-navbar__content {
      z-index: 1;
      background-color: initial !important;
      .uni-navbar__header {
        background-color: initial !important;
      }
    }
    .uni-icons,
    .uni-nav-bar-text {
      color: #ffffff !important;
    }
  }
  .status-bar-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to right, #41c5ff, #1371f7);
    z-index: 0;
  }
}
.title-panel {
  position: relative;
  height: 200rpx;
  height: 200rpx;
  padding: 10rpx 30rpx 30rpx 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  .title-panel-bg{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 110rpx;
    left: 0;
    background: linear-gradient(to right, #41c5ff, #1371f7);
    z-index: 0;
  }
  .title-panel-inner {
    width: 100%;
    height: 160rpx;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30rpx;
    border-radius: 10rpx;
    z-index: 1;
    box-shadow: 0px 2px 5px #eeeeee;
    .customer-info {
      font-size: 34rpx;
      height: 60rpx;
      line-height: 60rpx;
    }
    .car-info {
      font-size: 30rpx;
      height: 60rpx;
      line-height: 60rpx;
      color: #70767f;
    }
  }
}
.page-body {
  height: calc(100vh - 128rpx);
  overflow: auto;
}
</style>
