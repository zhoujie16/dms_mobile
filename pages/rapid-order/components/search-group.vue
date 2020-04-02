<template>
  <view>
    <!-- 维修组合查询 -->
    <view class="search-top">
      <input type="text" value="" placeholder="搜索" class="search-input" />
      <text class="search-text" @click="searchClick">查询</text>
      <image src="../../../static/image/search.svg" mode="" class="search-image"></image>
    </view>

    <view class="search-content">
      <uni-collapse class="collapsePanel" v-for="item in [1, 2, 3]" :key="item">
        <uni-collapse-item title="嘉年华5000KM定期保养" thumb="../../../static/image/icon_sel.svg">
          <view style="padding: 30rpx;background-color: #FFFFFF;">
            <view class="uni-flex uni-column items-style">
              <view class="flex-item flex-item-V">维修项目：新车保护剂</view>
              <view class="flex-item flex-item-V">配件费用：177.9</view>
              <view class="flex-item flex-item-V">工时费：0</view>
            </view>
          </view>
        </uni-collapse-item>
      </uni-collapse>
      <!-- <CollapsePanel title="嘉年华5000KM定期保养" class="collapsePanel">
        <template slot="default">
          
          <image src="../../../static/image/icon_sel.svg" mode="" class="service-image"></image>
        </template>
      </CollapsePanel> -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    searchClick() {}
  }
};
</script>

<style lang="scss">
.search-top {
  height: 84rpx;
  padding: 12rpx 0 0 28rpx;
  display: flex;
  background-color: $uni-m-color-cwhite;
  .search-input {
    position: relative;
    flex: 1;
    width: 600rpx;
    height: 54rpx;
    background: rgba(249, 249, 249, 1);
    border-radius: 20rpx;
    padding-left: 60rpx;
  }
  .search-text {
    padding: 20rpx 30rpx;
    font-size: 30rpx;
    color: #1371f7;
  }
  .search-image {
    width: 46rpx;
    height: 46rpx;
    position: absolute;
    top: 16rpx;
    left: 30rpx;
  }
}

.search-content {
  .collapsePanel {
    margin-top: 20rpx;
    .items-style {
      color: #6d6f73;
      font-size: 20rpx;
      padding: 20rpx 0 0 100rpx;
    }
  }
}
.xui-collapsePanel-div-title {
  background-color: $uni-m-color-cwhite;
}
</style>
