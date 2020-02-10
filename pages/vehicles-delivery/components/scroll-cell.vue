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
    <uni-icons type="phone" size="40"></uni-icons>
  </view>
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
      console.log(111111);
      uni.makePhoneCall({
          phoneNumber: '114' //仅为示例
      });
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
          background-color: #EF5656;
          height: 30px;
          line-height: 30px;
          border-radius: 14px;
        }
      }
      
  }
  .phone {
    position: absolute;
    bottom: 80px;
    right: 80px;
    width: 80rpx;
    height: 80rpx;
    background-color: orange;
    border-radius: 50%;
    // .icon {
    //   width: 50rpx;
    //   height: 50rpx;
    //   background-color: orange;
    //   border-radius: 50%;
    // }
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

</style>
