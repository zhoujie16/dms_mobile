<template>
  <view class="container">
    <view class="content">
      <view class="content-border">
        <view class="uni-flex uni-row m-height-60">
          <view class="item1">
            <uni-icons
              :type="isSelect ? 'circle-filled' : 'circle'"
              :color="isSelect ? '#1371F7' : ''"
              size="21"
              @click="changeSelect"
            ></uni-icons>
           <text class="label-pad">日期：2020-01-01</text>
          </view>
          <view class="item2">
            <uni-icons type="email-filled" size="26" color="#F57C40"></uni-icons>
          </view>
        </view>
      </view>
      <view class="main-box">
       <!-- <view class="left">
          <view class="image">
            <text class="m-iconfont font">&#xe723;</text>
          </view>
        </view> -->
        <view class="right">
          <text class="title"> 完工信息</text>
          <text class="text">车辆沪9999已超出退车时间，请及时跟进....</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {
      isSelect: false 
    };
  },
  methods: {
    changeSelect() {
      this.isSelect = !this.isSelect;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  // background-color: $uni-bg-color-page;
  padding: 5rpx 8rpx;
  position: relative;
  margin-top: 20rpx;
  .content {
    background-color: #ffffff;
    margin:0 15rpx;
    border-radius: $uni-m-border-radius-b2;
    padding: 10rpx 20rpx;
    .content-border {
      border-bottom: 2rpx solid #cccccc;
      margin-bottom: 10rpx;
      .item1 {
        flex: 1;
      }
      .item2 {
        flex: 0 0 60rpx;
      }
     
    }
    .main-box{
      display: flex;
      padding:10rpx 40rpx;
      // .left{
      //   flex: 0 0 120rpx;
      //   .image{ 
      //     width: 100%;
      //     background: $uni-m-color-c4;
      //     text-align: center;
      //     height: 130rpx;
      //     .font{
      //       font-size: 132rpx;
      //     }
      //   }
      // }
      .right{
        margin-left: 20rpx;
        flex: 1;
        .title{
          display: block;
          font-size: $uni-m-font-size-f3;
          line-height: 50rpx;
        }
        .text{
          color: $uni-m-color-c3;
          line-height: 35rpx;
        }
      }
    }
  }
 
  .label-pad {
    display: inline-block;
    padding-left: 20rpx;
  }
  .text-align-right {
    text-align: right;
  }
}
</style>
