<template>
  <view class="warp">
    <view class="uni-flex uni-row">
      <view class="flex-item flex-item-V r-content" @click="tabUrl(reportData.factoryText)">
        <text class="count">{{ reportData.factoryCount }}</text>
        <text>{{ reportData.factoryText }}</text>
      </view>

      <view class="flex-item flex-item-V r-content" @click="tabUrl(reportData.settleText)">
        <text class="count">{{ reportData.settleCount }}</text>
        <text>{{ reportData.settleText }}</text>
      </view>
    </view>
    <view class="uni-flex uni-row">
      <view class="flex-item flex-item-V r-content" @click="tabUrl(reportData.machineText)">
        <text class="count">{{ reportData.machineCount }}</text>
        <text>{{ reportData.machineText }}</text>
      </view>
      <view class="flex-item flex-item-V r-content" @click="tabUrl(reportData.BPEXText)">
        <text class="count">{{ reportData.BPEXCount }}</text>
        <text>{{ reportData.BPEXText }}</text>
      </view>
    </view>
    <view class="uni-flex uni-row">
      <view class="flex-item flex-item-V r-content" @click="tabUrl(reportData.maintenanceText)">
        <text class="count">{{ reportData.maintenanceCount }}</text>
        <text>{{ reportData.maintenanceText }}</text>
      </view>
    </view>
    <view class="r-padding uni-common-mt">
      <label class="r-list-cell" @click="tabUrl(reportData.incomeText)">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="$uni-m-color-c15-3"></uni-icons></text>
          {{ reportData.incomeText }}
        </view>
        <view class="r-list-count">{{ reportData.incomeMoney }}</view>
      </label>
      <label class="r-list-cell" @click="tabUrl(reportData.manHourText)">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="$uni-m-color-c15-3"></uni-icons></text>
          {{ reportData.manHourText }}
        </view>
        <view class="r-list-count">{{ reportData.manHourMoney }}</view>
      </label>
      <label class="r-list-cell" @click="tabUrl(reportData.partText)">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="$uni-m-color-c15-3"></uni-icons></text>
          {{ reportData.partText }}
        </view>
        <view class="r-list-count">{{ reportData.partMoney }}</view>
      </label>
      <label class="r-list-cell" @click="tabUrl(reportData.flowText)">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="$uni-m-color-c15-3"></uni-icons></text>
          {{ reportData.flowText }}
        </view>
        <view class="r-list-count">{{ reportData.flowMoney }}</view>
      </label>
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
        url: `/pages/tabBar/tabPage3/report-detail?type=${val}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .warp{
    height: calc(100vh-100rpx);
  }
.flex-item {
  width: 50%;
  height: 210rpx;
  text-align: center;
  // line-height: 200rpx;
}

.flex-item-V {
  width: 100%;
  height: 160rpx;
  text-align: center;
  // line-height: 150rpx;
}
.r-content {
  border-right: 2rpx solid $uni-m-color-c4-2;
  border-bottom: 2rpx solid $uni-m-color-c4-2;
  color: $uni-m-color-c15-3;
  .count {
    font-size: 48rpx;
    display: block;
    line-height: 100rpx;
  }
}
.r-padding {
  padding: 0 30rpx;
  .r-list-cell {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 140rpx;
    color: $uni-m-color-c15-3;
    .r-icon-box {
      display: inline-block;
      width: 100rpx;
    }
    .r-list-count {
      color: $uni-m-color-c12;
      font-size: 32rpx;
    }
  }
  .r-list-cell::after {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 0px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #c8c7cc;
  }
}
</style>
