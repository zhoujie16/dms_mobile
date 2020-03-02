<template>
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">客户信息</view>
        <view class="subContent">
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">客户信息</view>
          <view class="flex-item2  sub-text ">何红</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">手机号</view>
          <view class="flex-item2  sub-text ">13212345432</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">车架号</view>
          <view class="flex-item2  sub-text ">LVSHCFMB6ASD238</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">车型</view>
          <view class="flex-item2  sub-text ">全新福克斯三厢 1.6MT</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">车牌号</view>
          <view class="flex-item2  sub-text ">川AFH865</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">销售日期</view>
          <view class="flex-item2  sub-text "></view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">油量表</view>
          <view class="flex-item2  sub-text ">0%</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">里程</view>
          <view class="flex-item2  sub-text ">100</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">送修人</view>
          <view class="flex-item2  sub-text ">何红</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">送修人手机</view>
          <view class="flex-item2  sub-text ">13212345432</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">保险结束日期</view>
          <view class="flex-item2  sub-text "></view>
        </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">外观检查</view>
        <view class="subContent">
        
         
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">物品清点</view>
        <view class="subContent">
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">客户需求</view>
            <view class="flex-item2  sub-text "></view>
          </view>
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">故障描述</view>
            <view class="flex-item2  sub-text "></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
	name:'VehiclePreview',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  min-height: 100vh;
  // background-color: $uni-bg-color-page;
  margin-bottom: 10vh;
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
        margin: 0 auto 20rpx;
        padding: 10rpx 0;
        .flex-item1 {
          width: 25%;
          color: #CCCCCC;
          padding: 5rpx 0;
        }
        .flex-item2{
          width: 75%;
          padding: 5rpx 0;
        }
        .sub-text {
          line-height: 60rpx;
        }
        
      }
    }
  }
}
</style>
