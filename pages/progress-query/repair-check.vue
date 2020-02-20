<template>
	<view class="page-wrap">
    <view class="list-cell-title">
      <view class="left">
        <view class="info-item" style="height: 40px;line-height: 40px;font-size: 30px;margin-bottom: 10px;
">
          张一
        </view>
        <view class="info-item">
          <text v-model="phone">{{phone}}</text>
        </view>
      </view>
      <view class="right">
        <uni-icons type="phone" size="30" color="white" @click="phoneClick"></uni-icons>
      </view>
    </view>
		<view class="list-cell-content">
		  <view class="info-item">
		    <view class="info-item-lab">车牌号：</view>
		    <view class="info-item-text">YJ2001020002</view>
		  </view>
      <view class="info-item">
        <view class="info-item-lab">车架号：</view>
        <view class="info-item-text">YJ2001020002</view>
      </view>
      <view class="info-item">
        <view class="info-item-lab">工单号：</view>
        <view class="info-item-text">YJ2001020002</view>
      </view>
		  <view class="info-item">
		    <view class="info-item-lab">维修项目：</view>
		    <view class="info-item-text">机电维修</view>
		  </view>
		  <view class="info-item">
		    <view class="info-item-lab">送修人电话：</view>
		    <view class="info-item-text">13826576765<uni-icons type="phone" size="20" color="white"></uni-icons></view>
		  </view>
		  <view class="info-item">
		    <view class="info-item-lab">故障描述：</view>
		    <view class="info-item-text">无</view>
		  </view>
      <view class="info-item">
        <view class="info-item-lab">维修技师：</view>
        <view class="info-item-text">YJ2</view>
      </view>
		    <view class="check" @click="check">车辆检查</view>
        <view class="check">交车</view>
		</view>
    <uni-popup ref="popup" type="bottom">
      <view style="padding: 0 30rpx;margin-bottom: 55rpx;">
        <view class="text" style="margin-bottom: 15rpx;" @click="phoneCall" v-model="phone">呼叫{{phone}}</view>
        <view class="text" @click="phoneClose">
          取消
        </view>
      </view>
    </uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
          phone: '13602558446'
			};
		},
    mounted() {
    },
    methods: {
      phoneClick(){
        this.$refs.popup.open();
      },
      phoneCall() {
        let phone = this.phone;
        console.log(phone,'phone');
        uni.makePhoneCall({
            phoneNumber: phone
        });
      },
      phoneClose() {
        this.$refs.popup.close();
      },
      check() {
        console.log(11111)
        uni.navigateTo({
            url: '/pages/vehicle-inspection/vehicle-inspection'
        });
      }
    }
	}
</script>

<style lang="scss">
  .page-wrap{
    height: 100%;
    padding: 0 20rpx 0 20rpx;
    background-color: $uni-bg-color-page;
  }
  .list-cell-title {
    padding: 30rpx 20rpx;
    height: 15%;
    background-color: $uni-bg-color-page;
    color: #FFFFFF;
    .left {
      float: left;
      height: 90px;
      // background-color: blue;
      width: 70%;
    }
    .right{
      float: right;
      margin-top: 20px;
      font-size: 24px;
      width: 80rpx;
      height: 80rpx;
      background-color: #F0AD4E;
      border-radius: 50%;
      text-align: center;
      line-height: 80rpx;
    }
  }
.list-cell-content {
  background-color: $uni-bg-color-page;
  padding: 10rpx 20rpx;
  width: 100%;
  height: 75%;
  .info-item {
    padding: 10rpx 0;
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    .info-item-lab {
      flex: 0 0 200rpx;
      color: #CCCCCC;
      font-size: 30rpx;
    }
    .info-item-text {
      flex: 1 1 auto;
      text-align: right;
      padding-right: 10rpx;
      color: #FFFFFF;
      font-size: 32rpx;
    }
  }
}
  .check {
    width: 70%;
    height: 88rpx;
    line-height: 88rpx;
    margin: 30rpx 80rpx;
    text-align: center;
    background-color:$uni-bg-color-page;
    border-radius: 50rpx;
    color: #09BB07;
    border: 4rpx solid #09BB07;
  }
  .text {
    height: 100rpx;
    background-color: #808080;
    border-radius: 10rpx;
    line-height: 100rpx;
    text-align: center;
  }
</style>
