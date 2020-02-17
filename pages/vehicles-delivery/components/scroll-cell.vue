<template>
  <view class="container">
        <view class="content" @click="openDetail">
          <view class="m-flex m-align-center m-height-80 content-top">
            <view class="content-left">
              预交车时间：2020-01-02 15:30:03
            </view>
            <view class="content-right" v-if="isShowRight">
              逾期
            </view>
          </view>
          <view>
            <text class="label-pad label-color m-height-80">姓名：</text>
            <text class="label-pad label-color m-height-80">何红</text>
            <text class="label-pad label-color m-height-80">|</text>
            <text class="label-pad label-color m-height-80">车牌：</text>
            <text class="label-color m-height-80">川AFH892</text>
          </view>
          <view>
            <text class="label-pad label-color m-height-80">车型：</text>
            <text class="label-color m-height-80">全新福克斯三厢 1.6MT</text>
          </view>
          <view class="uni-flex uni-row">
            <view class="flex-item m-height-80">服务顾问：WYL1</view>
            <!-- <view class="flex-item m-height-80">技师：拉纳兰</view> -->
          </view>
    </view>
  <view class="phone" @click="phoneClick">
    <uni-icons type="phone" size="40" color="white"></uni-icons>
  </view>
  <uni-popup ref="popup" type="bottom">
    <view style="padding: 0 30rpx;margin-bottom: 55rpx;">
      <view class="text" style="margin-bottom: 15rpx;" @click="phoneCall">呼叫185 8328 5531</view>
      <view class="text" @click="phoneClose">
        取消
      </view>
    </view>
  </uni-popup>
  </view>
</template>

<script>
export default {
  props: ['cell','curIndex'],
  data() {
    return {
      isShowRight: true
    };
  },
  watch:{
    curIndex(){
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
      if(this.curIndex === 1) {
        this.isShowRight = false;
      } else {
        this.isShowRight = true;
      }
    },
    phoneClick(){
      this.$refs.popup.open();
    },
    phoneCall() {
      uni.makePhoneCall({
          // 手机号
              phoneNumber: '18583285531', 
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
      this.$refs.popup.close();
    }
  }
};
</script>

<style lang="scss">
.container {
  background-color: $uni-bg-color-page;
  padding: 5rpx 8rpx;
  position: relative;
    .content {
      background-color: #ffffff;
      margin: 20rpx;
      border-radius: 20rpx;
      padding: 0 20rpx;
      .content-top {
        border-bottom: 1px solid #cccccc;
        padding-right: 10rpx;
        height: 80rpx;
        line-height: 80rpx;
        font-size: 30rpx;
        margin-bottom: 20rpx;
        .content-left {
          width: 80%;
        }
        .content-right {
          text-align: center;
          width: 20%;
          background-color: #ED6A0C;
          height: 30px;
          line-height: 30px;
          border-radius: 14px;
        }
      }
      
  }
  .phone {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 80rpx;
    height: 80rpx;
    background-color: #F0AD4E;
    border-radius: 50%;
    text-align: center;
    line-height: 80rpx;
  }
}
.label-color {
  color: #777777;
}
.label-pad {
  display: inline-block;
  padding-right: 20rpx;
}
.flex-item {
  color: #17A2B8;
  padding-right: 15rpx;
}
.text {
  height: 100rpx;
  background-color: #808080;
  border-radius: 10rpx;
  line-height: 100rpx;
  text-align: center;
}
</style>
