<template>
  <view class="list-cell-wrap">
    <!-- 工单状态、车主名称、开单时间、工单编号、车牌号、服务顾问、服务技师、手机 -->
      <view class="list-cell-wrap-inner">
        <view class="list-cell-title">
          <view class="left">
            <text class="state">在修</text>
            <text class="vin">谢菲菲</text>
          </view>
          <view class="right">2020-01-09 10:23:37</view>
        </view>
        <view class="list-cell-content">
          <view class="box">
            <view class="label">工单号</view>
            <view >YO202001090001</view>
          </view>
          <view class="box">
            <view class="label">车牌号</view>
            <view >沪A10001</view>
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
        <view class="phone" @click="phoneClick">
          <image src="../../../../../static/image/dianhua2.svg" class="img"></image>
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
      isShowDetail: false,
      telphoneNumber: '18583285531'
    };
  },
  methods: {
    change() {},
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    },
    phoneClick(){
     // this.$refs.phone.open();
     uni.makePhoneCall({
         // 手机号
             phoneNumber: this.telphoneNumber, 
         	// 成功回调
         	success: (res) => {
         		console.log('调用成功!');
         	},
         	// 失败回调
         	fail: (res) => {
         		console.log('调用失败!')
         	}
     });
    },
  }
};
</script>

<style lang="scss" scoped>
.list-cell-wrap {
  position: relative;
  .phone {
    position: absolute;
    // bottom: 40px;
    // right: 40px;
    bottom: 32px;
    right: 40px;
    .img {  
      width: 70rpx;
      height: 70rpx;
    }
  }
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
