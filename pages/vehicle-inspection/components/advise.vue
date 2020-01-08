<template>
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">内饰检查</view>
        <view class="subContent">
          <button type="warn " class="btn-red ">建议更换/维修</button>
          <text class="m-flex m-height-100 sub-text">雨刮</text>
          <button type="warn " class="btn-warn ">建议观察</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">发动机舱</view>
        <view class="subContent">
          <button type="warn " class="btn-red ">建议更换/维修</button>
          <text class="m-flex m-height-100 sub-text">蓄电池</text>
          <button type="warn " class="btn-warn ">建议观察</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">底盘四轮</view>
        <view class="subContent">
          <button type="warn" class="btn-red ">建议更换/维修</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
          <button type="warn" class="btn-warn ">建议观察</button>
          <text class=" m-height-100 sub-text sub-center">无</text>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">建议</view>
        <view class="subContent">
          <textarea class="sub-textarea label-pad" @blur="bindTextAreaBlur" auto-height />
          <button type="warn " class="btn-blue label-pad ">按下说话</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    bindTextAreaBlur: function(e) {
      console.log(e.detail.value);
    }
  }
};
</script>

<style lang="scss" scoped>
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
        .sub-textarea {
          display: block;
          background-color: #f1f1f1;
          min-height: 15vh;
          width: 100%;
          border-radius: 20rpx;
          padding: 20rpx;
          line-height: 40rpx;
        }
      }
    }
  }
}
</style>
