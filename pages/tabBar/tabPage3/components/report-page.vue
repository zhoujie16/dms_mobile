<template>
  <view>
    <view class="uni-flex uni-row">
      <view class="flex-item flex-item-V r-content" @click="tabUrl">
          <text class="count">0</text>
          <text>昨日进厂台次</text>
      </view>

      <view class="flex-item flex-item-V r-content">
        <text class="count">0</text>
        <text>昨日结算台次</text>
      </view>
    </view>
    <view class="uni-flex uni-row">
      <view class="flex-item flex-item-V r-content">
        <text class="count">0</text>
        <text>昨日机修台次</text>
      </view>
      <view class="flex-item flex-item-V r-content">
        <text class="count">0</text>
        <text>昨日饭喷台次</text>
      </view>
    </view>
    <view class="uni-flex uni-row">
      <view class="flex-item flex-item-V r-content">
        <text class="count">0</text>
        <text>昨日保养台次</text>
      </view>
    </view>
    <view class="r-padding uni-common-mt">
      <label class="r-list-cell">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="#FFFFFF"></uni-icons></text>
          昨日收入
        </view>
        <view class="r-list-count">0</view>
      </label>
      <label class="r-list-cell">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="#FFFFFF"></uni-icons></text>
          昨日工时收入
        </view>
        <view class="r-list-count">0</view>
      </label>
      <label class="r-list-cell">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="#FFFFFF"></uni-icons></text>
          昨日零件收入
        </view>
        <view class="r-list-count">0</view>
      </label>
      <label class="r-list-cell">
        <view>
          <text class="r-icon-box"><uni-icons type="chat" size="30" color="#FFFFFF"></uni-icons></text>
          昨日快流件收入
        </view>
        <view class="r-list-count">0</view>
      </label>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    tabUrl(){
      uni.navigateTo({
          url: '/pages/tabBar/tabPage3/report-detail'
      });
    }
  }
};
</script>

<style lang="scss">
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
  border-right: 2rpx solid #113571;
  border-bottom: 2rpx solid #113571;
  color: #ffffff;
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
    color: #ffffff;
    .r-icon-box {
      display: inline-block;
      width: 100rpx;
    }
    .r-list-count {
      color: #86fdcc;
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
