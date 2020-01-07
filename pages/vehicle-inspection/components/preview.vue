<template>
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">内饰检查</view>
        <view class="subContent">
          <button type="warn " class="btn-red">异常</button>
          <text class="m-flex m-height-100 sub-text">雨刮</text>
          <button type="warn " class="btn-warn">观察</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
          <button type="warn " class="btn-blue">正常</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">发动机舱</view>
        <view class="subContent">
          <button type="warn " class="btn-red">异常</button>
          <text class="m-flex m-height-100 sub-text">蓄电池</text>
          <button type="warn " class="btn-warn">观察</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
          <button type="warn " class="btn-blue">正常</button>
          <view class="uni-flex uni-row">
            <view class="flex-item m-height-100 sub-text">空气滤清器</view>
            <view class="flex-item m-height-100 sub-text text-right">空调滤清器</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">底盘四轮</view>
        <view class="subContent">
          <button type="warn " class="btn-red">异常</button>
          <text class="m-flex m-height-100 sub-text sub-center">无</text>
          <button type="warn " class="btn-warn">观察</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
          <button type="warn " class="btn-blue">正常</button>
          <view class="uni-flex uni-row">
            <view class="flex-item m-height-100 sub-text">机油滤清器</view>
            <view class="flex-item m-height-100 sub-text text-right">燃油滤清器</view>
          </view>
          <view class="uni-flex uni-row">
            <view class="flex-item m-height-100 sub-text">轮胎</view>
            <view class="flex-item m-height-100 sub-text text-right">刹车片</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.page-wrap {
  min-height: 100vh;
  background-color: $uni-bg-color-page;
  .container {
    padding: 20rpx;
    .content {
      background-color: #ffffff;
      margin: 20rpx;
      border-radius: 20rpx;
      padding: 0 20rpx;
      .content-top {
        padding-right: 10rpx;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 42rpx;
        font-weight: bold;
      }
      .subContent {
        width: 90%;
        margin: 0 auto 20rpx;
        padding: 20rpx 0;
        .btn-red {
          width: 80%;
          text-align: center;
          background-color: #ff6666;
          color: $uni-text-color-inverse;
        }
        .btn-warn {
          width: 80%;
          text-align: center;
          background-color: #ffcc00;
          color: $uni-text-color-inverse;
        }
        .btn-blue {
          width: 80%;
          text-align: center;
          background-color: #0099cc;
          color: $uni-text-color-inverse;
        }
        .label-pad {
          margin-bottom: 20rpx;
        }
        .sub-text {
          line-height: 100rpx;
        }
        .sub-center {
          display: block;
          text-align: center;
        }
        .flex-item {
          width: 50%;
        }
        .text-right {
          text-align: right;
        }
      }
    }
  }
}
</style>
