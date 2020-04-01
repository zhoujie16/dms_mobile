<template>
  <view class="list-cell-wrap">
      <view class="list-cell-wrap-inner" @click="cellClick">
        <view class="list-cell-title">
          <view class="left">
            <text class="vin">{{cell.ownerName?cell.ownerName:'未知'}}</text>
            <text class="name">{{cell.license}}</text>
          </view>
          <view class="right">{{cell.createdAt}}</view>
        </view>
        <view class="list-cell-content">
          <view class="box">
            <view class="label">预检单号</view>
            <view >{{cell.yjNo}}</view>
          </view>
          <view class="box">
            <view class="label">工单编号</view>
            <view>{{cell.roNo?cell.roNo:'无'}}</view>
          </view>
          <view class="box">
            <view class="label">服务顾问</view>
            <view>{{$auth.getRoleName(cell.serviceAdvisor, serviceAdvisorList)}}</view>
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
    cell: Object,
    serviceAdvisorList:Array
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
    cellClick(){
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss" scoped>
.list-cell-wrap {
  width: 100%;
}

.list-cell-wrap-inner {
  // width: 100%;
  border-radius: $uni-m-border-radius-b2;
  overflow: hidden;
  background-color: #ffffff;
  padding:26rpx 30rpx;
  margin:0 20rpx;
}
.list-cell-title {
  display: flex;
  border-bottom: 1rpx solid $uni-m-color-c4-2;
  .left {
    flex: 1;
    margin-bottom: 20rpx;
    .vin{
      font-weight: 800;
      font-size: $uni-m-font-size-f2;
    }
    .name{
      display: inline-block;
      margin-left: 20rpx;
      border: 2rpx dashed $uni-m-color-c3;
      background-color: $uni-m-color-c4;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
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
