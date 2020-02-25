<template>
  <view class="list-cell-wrap">
    <view class="list-cell-inner">
      <view class="list-cell-title">
        <view class="l">王大锤</view>
        <view class="r">2020-02-02 20:20</view>
      </view>
      <view class="list-cell-content">
        <view class="info-item">
          <view class="l">工单编号</view>
          <view class="r">123456789</view>
        </view>
        <view class="info-item">
          <view class="l">服务顾问</view>
          <view class="r">张全蛋</view>
        </view>
        <view class="info-item">
          <view class="l">服务技师</view>
          <view class="r">王二狗</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  name: 'list-cell-wrap',
  props: {
    cellData: {
      type: Object
    }
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.list-cell-wrap {
  background-color: #ffffff;
  padding: 20rpx 30rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
  .list-cell-inner {
    .list-cell-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80rpx;
      border-bottom: solid 1px #efefef;
      .l {
        font-size: 34rpx;
      }
      .r {
        font-size: 26rpx;
        color: #f57c40;
      }
    }
    .list-cell-content {
      padding-top: 10rpx;
      .info-item {
        display: flex;
        height: 60rpx;
        align-items: center;
        font-size: 26rpx;
        .l {
          flex: 0 0 120rpx;
          color: #70767f;
        }
        .r {
          flex: 1;
          padding-left: 20rpx;
        }
      }
    }
  }
}
</style>
