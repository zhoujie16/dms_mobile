<template>
  <view class="page-wrap">
    <view class="r-item r-item-bg">
      预约率=实际预约数/进厂台次
    </view>
    <view class="r-item">
      保养提醒率=提醒数/需提醒数
    </view>
     <view class="r-item r-item-bg">
      准时完工率=准时完工数/出厂台次
    </view>
    <view class="r-item">
      服务回访率=实际回访数/需回访数
    </view>
    <view class="r-item r-item-bg">
      快保工单权重=快报台次/保养台次
    </view>
     <view class="r-item">
      快保客户等待时间=客户等待时间
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
  height: 100vh;
  background-color:#10497B;
  .r-item{
    padding: 0 60rpx;
    height: 10vh;
    line-height: 10vh;
    color: $uni-text-color-inverse;
  }
  .r-item-bg{
    background-color:#124E84;
  }
}
</style>
