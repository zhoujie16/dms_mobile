<template>
  <view class="container">
        <view class="content" @click="openDetail">
          <view class="m-flex m-align-center m-height-80 content-top">
            <view class="content-left">
              预交车时间：<text style="font-size: 28rpx;color: #F57C40;">2020-01-02 15:30:03</text>
            </view>
            <view class="content-right" v-if="isShowRight">
              逾期
            </view>
          </view>
          <view>
            <text class="label-pad label-color m-height-80">姓名：</text>
            <text class="label-pad label-color m-height-80 content-color">何红</text>
            <text class="label-pad label-color m-height-80">|</text>
            <text class="label-pad label-color m-height-80">车牌：</text>
            <text class="label-color m-height-80 content-color">川AFH892</text>
          </view>
          <view>
            <text class="label-pad label-color m-height-80">车型：</text>
            <text class="label-color m-height-80 content-color">全新福克斯三厢 1.6MT</text>
          </view>
          <view>
            <text class="m-height-80 label-color">服务顾问：</text>
            <text class="m-height-80 content-color">WYL1</text>
          </view>
    </view>
  <view class="phone" @click="phoneClick">
    <!-- <uni-icons type="phone" size="40" color="white"></uni-icons> -->
    <image src="../../../../../static/image/dianhua2.svg" class="img"></image>
  </view>
  <MtelephoneCall ref='phone' type="bottom">185 8328 5531</MtelephoneCall>
  <!-- <uni-popup ref="popup" type="bottom">
    <view style="padding: 0 30rpx;margin-bottom: 55rpx;">
      <view class="text" style="margin-bottom: 15rpx;" @click="phoneCall">呼叫185 8328 5531</view>
      <view class="text" @click="phoneClose">
        取消
      </view>
    </view>
  </uni-popup> -->
  </view>
</template>

<script>
export default {
  props: ['cell','activeindex'],
  data() {
    return {
      isShowRight: true
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
      this.$refs.phone.open();
    },
    
    phoneClose() {
      this.$refs.phone.close();
    }
  }
};
</script>

<style lang="scss">
.container {
  background-color: #FFFFFF;
  padding: 5rpx 8rpx;
  position: relative;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
    .content {
      background-color: #ffffff;
      // margin: 20rpx;
      // border-radius: 20rpx;
      padding: 10rpx;
      .content-top {
        border-bottom: 1px solid #cccccc;
        padding-right: 10rpx;
        // height: 80rpx;
        // line-height: 80rpx;
        font-size: 30rpx;
        margin-bottom: 20rpx;
        .content-left {
          width: 80%;
          color: #17212E;
          font-size: 34rpx;
          font-weight: 500;
        }
        .content-right {
          text-align: center;
          width: 20%;
          background-color: #1371F7;
          height: 30px;
          line-height: 30px;
          border-radius: 14px;
          color: #FFFFFF;
        }
      }
      
  }
  .phone {
    position: absolute;
    bottom: 40px;
    right: 40px;
    .img {  
      width: 56rpx;
      height: 56rpx;
    }
  }
}
.label-color {
  color: #70767F;
}
.label-pad {
  display: inline-block;
  padding-right: 20rpx;
  color: #70767F;
}
.content-color {
  color: #17212E;
}
// .flex-item {
//   color: #17A2B8;
//   padding-right: 15rpx;
// }

.text {
  height: 100rpx;
  background-color: #808080;
  border-radius: 10rpx;
  line-height: 100rpx;
  text-align: center;
}
</style>
