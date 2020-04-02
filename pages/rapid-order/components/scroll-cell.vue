<template>
  <view class="list-cell-wrap">
    <!-- 车主名称、车牌号、工单的开单日期、工单号、服务顾问、服务技师 -->
    <view class="list-cell-wrap-inner" @click="cellClick">
      <view class="list-cell-title">
        <view class="left">
          <text class="vin">谢宝宝</text>
          <text class="name">沪1000001</text>
        </view>
        <view class="right">2020-01-09 10:23</view>
      </view>
      <view class="list-cell-content">
        <view class="box">
          <view class="label">工单号</view>
          <view>YO202001090001</view>
        </view>
        <view class="box">
          <view class="label">开单日期</view>
          <view>2020-03-27 11:23:00</view>
        </view>
        <view class="box">
          <view class="label">服务顾问</view>
          <view>RO202001090002</view>
        </view>
        <view class="box">
          <view class="label">服务技师</view>
          <view>陆小鹏</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  name: 'list-cell-order',
  props: {
    cell: Object
  },
  mounted() {
    console.log('list-cell-wrap', 'mounted');
  },
  data() {
    return {
      isShowDetail: false
    };
  },
  methods: {
    change() {},
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    },
    cellClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss">
.list-cell-wrap {
  // margin-top: 20rpx;
}

.list-cell-wrap-inner {
  // width: 100%;
  border-radius: $uni-m-border-radius-b2;
  overflow: hidden;
  background-color: #ffffff;
  padding: 26rpx 30rpx;
  margin: 20rpx;
}
.list-cell-title {
  display: flex;
  border-bottom: 1rpx solid $uni-m-color-c4-2;
  .left {
    flex: 1;
    margin-bottom: 20rpx;
    .vin {
      font-weight: 800;
      font-size: $uni-m-font-size-f2;
    }
    .name {
      display: inline-block;
      margin-left: 20rpx;
      border: 2rpx dashed $uni-m-color-c3;
      background-color: $uni-m-color-c4;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
  }
  .right {
    color: $uni-m-color-c12;
    margin-bottom: 20rpx;
  }
}
.list-cell-content {
  margin-top: 10rpx;
  position: relative;
  .box {
    display: flex;
    height: 60rpx;
    line-height: 60rpx;
    .label {
      flex: 0 0 130rpx;
      color: $uni-m-color-c2;
    }
  }
}
</style>
