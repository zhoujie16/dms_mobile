<template>
  <view>
    <!-- 查询服务活动 -->
    <view class="active-content">
      <uni-collapse class="collapsePanel" v-for="item in [1, 2, 3]" :key="item">
        <uni-collapse-item title="嘉年华5000KM定期保养" thumb="../../../static/image/icon_sel.svg">
          <view style="padding: 30rpx;background-color: #FFFFFF;">
            <view class="uni-flex uni-column items-style">
              <view class="flex-item flex-item-V">活动时间：2016-04-15至2020-04-16</view>
              <view class="flex-item flex-item-V">维修项目：无</view>
              <view class="flex-item flex-item-V">配件费用：177.9</view>
              <view class="flex-item flex-item-V">工时费：0</view>
            </view>
          </view>
        </uni-collapse-item>
      </uni-collapse>
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
.active-content {
  .collapsePanel {
    margin-top: 20rpx;
    .items-style {
      color: #6d6f73;
      font-size: 20rpx;
      padding: 20rpx 0 0 100rpx;
    }
  }
}
</style>
