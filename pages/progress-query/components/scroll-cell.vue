<template>
  <view class="list-cell-wrap">
      <view class="list-cell-wrap-inner" @click="cellClick">
        <view class="list-cell-title">
          <view class="left">
            <text class="state">在修</text>
            <text class="vin">谢菲菲</text>
          </view>
          <view class="right">2020-01-09 10:23:37</view>
        </view>
        <view class="list-cell-content">
          <!-- <view class="box">
            <view class="label">车牌号码</view>
            <view >沪A10001</view>
          </view> -->
          <view class="box">
            <view class="label">工单编号</view>
            <view >YO202001090001</view>
          </view>
          <view class="box">
            <view class="label">服务顾问</view>
            <view>张扬</view>
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
  name: 'list-cell-vehicle-inspection',
  props: {
    cell: Object,
    index: Number
  },
  mounted() {
    // console.log('list-cell-wrap', 'mounted');
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
    cellClick(){
      // this.$emit('click')
      uni.navigateTo({
        url: '/pages/progress-query/repair-check'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.list-cell-wrap {
}

.list-cell-wrap-inner {
  // width: 100%;
  border-radius: $uni-m-border-radius-b2;
  overflow: hidden;
  background-color: #ffffff;
  padding:26rpx 30rpx;
  margin: 20rpx;
}
.list-cell-title {
  display: flex;
  border-bottom: 1rpx solid $uni-m-color-c4-2;
  .left {
    flex: 1;
    margin-bottom: 20rpx;
    .state{
      display: inline-block;
      margin-right: 20rpx;
      border: 2rpx dashed $uni-m-color-c12;
      background-color: $uni-m-color-c11;
      color: $uni-m-color-cwhite;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
    .complate {
      display: inline-block;
      margin-right: 20rpx;
      border: 2rpx dashed $uni-m-color-c12;
      background-color: #74737D;
      color: $uni-m-color-cwhite;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
    .vin{
      font-weight: 800;
      font-size: $uni-m-font-size-f2;
    }
  }
  .right{
    color: $uni-m-color-c12;
    margin-bottom: 20rpx;
  }
}
.list-cell-content{
  margin-top: 10rpx;
  position: relative;
  .box{
    display: flex;
    height: 60rpx;
    line-height: 60rpx;
    .label{
      flex:0 0 130rpx;
      color:$uni-m-color-c2;
    }
  }
  
}
</style>
