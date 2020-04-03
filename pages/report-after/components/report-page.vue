<template>
  <view class="warp">
    <view class="container">
      <view class="box left" @click="tabUrl(reportData.factoryText)">
        <text class="count">{{ reportData.factoryCount }}</text>
        <text>{{ reportData.factoryText }}</text>
      </view>
      <view class="box right" @click="tabUrl(reportData.settleText)">
        <text class="count">{{ reportData.settleCount }}</text>
        <text>{{ reportData.settleText }}</text>
      </view>
    </view>
    <view class="container">
      <view class="box left" @click="tabUrl(reportData.machineText)">
        <text class="count">{{ reportData.machineCount }}</text>
        <text>{{ reportData.machineText }}</text>
      </view>
      <view class="box right" @click="tabUrl(reportData.BPEXText)">
        <text class="count">{{ reportData.BPEXCount }}</text>
        <text>{{ reportData.BPEXText }}</text>
      </view>
    </view>
    <view class="container">
      <view class="box" @click="tabUrl(reportData.maintenanceText)">
        <text class="count">{{ reportData.maintenanceCount }}</text>
        <text>{{ reportData.maintenanceText }}</text>
      </view>
    </view>
    <view class="list-cell" @click="tabUrl(reportData.incomeText)">
      <view class="left">
        <view class="r-icon-box">
          <uni-icons type="chat" size="21"  class="icon"></uni-icons>
        </view>
        {{ reportData.incomeText }}
      </view>
      <view class="right">{{ reportData.incomeMoney }}</view>
    </view>
    <view class="list-cell" @click="tabUrl(reportData.manHourText)">
      <view class="left">
        <view class="r-icon-box">
          <uni-icons type="chat" size="21"  class="icon"></uni-icons>
        </view>
        {{ reportData.manHourText }}
      </view>
      <view class="right">{{ reportData.manHourMoney }}</view>
    </view>
    <view class="list-cell" @click="tabUrl(reportData.partText)">
      <view class="left">
        <view class="r-icon-box">
          <uni-icons type="chat" size="21"  class="icon"></uni-icons>
        </view>
        {{ reportData.partText }}
      </view>
      <view class="right">{{ reportData.partMoney }}</view>
    </view>
    <view class="list-cell" @click="tabUrl(reportData.flowText)">
      <view class="left">
        <view class="r-icon-box">
          <uni-icons type="chat" size="21"  class="icon"></uni-icons>
        </view>
        {{ reportData.flowText }}
      </view>
      <view class="right">{{ reportData.flowMoney }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['reportData'],
  data() {
    return {};
  },
  methods: {
    tabUrl(val) {
      uni.navigateTo({
        url: `/pages/report-after/report-detail?type=${val}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.warp {
  height: calc(100vh-100rpx);
  padding:30rpx;
  .container {
    display: flex;
    .box {
      flex: 1;
      background: $uni-m-color-cwhite;
      border-radius: $uni-m-border-radius-b2;
      height: 240rpx;
      text-align: center;
      padding: 40rpx 0;
      margin-bottom: 20rpx;
      .count {
        font-size: 48rpx;
        display: block;
        line-height: 100rpx;
        color: $uni-m-color-c15-3;
      }
    }
    .left {
      margin-right: 10rpx;
    }
    .right {
      margin-left: 10rpx;
    }
  }
  .list-cell {
    background: $uni-m-color-cwhite;
    border-radius: $uni-m-border-radius-b2;
    height: 80rpx;
    display: flex;
    margin-bottom: 20rpx;
    line-height: 80rpx;
    padding: 0 20rpx;
    .left {
      flex: 1;
      .r-icon-box {
        display: inline-block;
        margin-right: 20rpx;
        .icon{
          color: $uni-m-color-c15-3;
        }
      }
    }
    .right {
      color: $uni-m-color-c15-3;
    }
  }
 
}

</style>
