<template>
  <view class="main">
    <view class="uni-flex uni-row">
      <view class="flex-item left" @click="servicesChange">
        <image class="servicesImage" src="../../static/demo/60x60.png" mode=""></image>
        <text class="text">服务检查</text>
      </view>
      <view class="flex-item center" @click="questionnaireChange">
        <image class="servicesImage" src="../../static/demo/60x60.png" mode=""></image>
        <text class="text">调研问卷</text>
      </view>
    </view>
    <view class="uni-flex uni-row">
      <view class="flex-item right">
        <image class="servicesImage" src="../../static/demo/60x60.png" mode=""></image>
        <text class="text">增值业务</text>
      </view>
      <view class="flex-item"></view>
    </view>
  </view>
  <!-- <view><DemoPage></DemoPage></view> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
   servicesChange() {
     uni.navigateTo({
       url: `/pages/services-tools/service-check`
     })
   },
   // 调研问卷 pages/services-tools/research-questionnaire
   questionnaireChange() {
     uni.navigateTo({
       url: `/pages/services-tools/research-questionnaire`
     })
   }
  }
};
</script>

<style lang="scss">
 .main{
   height: 100%;
    background-color: #F7F7F7;
  }
.flex-item {
  width: 50%;
  height: 310rpx;
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  // line-height: 310rpx;
  border-radius: 20rpx;
  // padding: 15px 0;
  margin: 30rpx;
  text-align: center;
}

.text {
  font-size: 30rpx;
  width: 100%;
  // color: $uni-text-color-inverse;
}

.servicesImage {
    width: 180rpx;
    height: 180rpx;
    margin-top: 20rpx;
    margin-bottom: 40rpx;
  }

.left{
    background-color: #FFFFFF;
}

.center{
  background-color: #FFFFFF;
}

.right{
  background-color: #FFFFFF;
}

.flex-item-V {
  width: 100%;
  height: 160rpx;
  text-align: center;
  // line-height: 150rpx;
}

.r-content {
  border-right: 2rpx solid #113571;
  border-bottom: 2rpx solid #113571;
  color: #ffffff;
  .count {
    font-size: 48rpx;
    display: block;
    line-height: 100rpx;
  }
}
</style>
