<template>
  <view class="list-cell-wrap">
      <view class="list-cell-wrap-inner" @click="openDetail">
        <view class="list-cell-title">
          <view class="left">
            <text class="state" v-if="isShowRight">逾期</text>
            <text class="vin">何红</text>
          </view>
          <view class="right">2020-01-09 10:23:37</view>
        </view>
        <view class="list-cell-content">
          <!-- <view class="box">
            <view class="label">姓名</view>
            <view >何红</view>
          </view> -->
          <view class="box">
            <view class="label">车牌号</view>
            <view >沪A10001</view>
          </view>
          <view class="box">
            <view class="label">车型</view>
            <view >全新福克斯三厢 1.6MT</view>
          </view>
          <view class="box">
            <view class="label">服务顾问</view>
            <view>张扬</view>
          </view>
        </view>
      </view>
      <view class="phone" @click="phoneClick">
        <image src="../../../../../static/image/dianhua2.svg" class="img"></image>
      </view>
      <!-- <MtelephoneCall ref='phone' type="bottom" :telphoneNumber="telphoneNumber">{{this.telphoneNumber}}</MtelephoneCall> -->
    </view>
</template>

<script>
export default {
  components: {},
  name: 'list-cell-vehicle-inspection',
  props: {
    cell: Object,
    activeindex: Number
  },
  mounted() {
    // console.log('list-cell-wrap', 'mounted');
  },
  data() {
    return {
      isShowRight: true,
      telphoneNumber: '18583285531'
    };
  },
  watch:{
    activeindex(){
      this.curIndexChange()
    }
  },
  methods: {
    openDetail(i){
      uni.navigateTo({
        url: `/pages/vehicles-delivery/delivery-details`
      });
    },
    curIndexChange() {
      if(this.activeindex === 1) {
        this.isShowRight = false;
      } else {
        this.isShowRight = true;
      }
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
    
    phoneClose() {
      this.$refs.phone.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.list-cell-wrap {
  position: relative;
  .phone {
    position: absolute;
    bottom: 40px;
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
  // margin: 20rpx;
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
      border: 2rpx dashed $uni-m-color-c4-2;
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
