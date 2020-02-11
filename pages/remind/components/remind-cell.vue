<template>
  <view class="container">
    <view class="content">
      <view class="content-border">
        <view class="uni-flex uni-row m-height-60">
          <view class="item1">
            <uni-icons
              :type="isSelect ? 'circle-filled' : 'circle'"
              :color="isSelect ? '#FF6347' : ''"
              size="26"
              @click="changeSelect"
            ></uni-icons>
            <!-- <uni-icons type="circle" size="26" ></uni-icons> -->
            <!-- <uni-icons type="circle-filled" size="26" color="#FF6347" ></uni-icons> -->
          </view>
          <view class="item2">
            <uni-icons type="person-filled" size="26" color="#CCCCCC"></uni-icons>
            <text>完工提醒</text>
          </view>
          <view class="item3">
            <uni-icons type="email-filled" size="26" color="#F0E68C"></uni-icons>
          </view>
        </view>
        <view class="r-line-height">
          <text class="label-pad">车辆沪9999已超出退车时间，请及时跟进。。。</text>
        </view>
      </view>
      <view class="m-height-60">
        <view class="text-align-right">
          <text style="color: #1989FA;">日期：</text>
          2020-01-01
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
  background-color: $uni-bg-color-page;
  padding: 5rpx 8rpx;
  position: relative;
  .content {
    background-color: #ffffff;
    margin: 20rpx;
    border-radius: 20rpx;
    padding: 10rpx 20rpx;
    .content-border {
      border-bottom: 1px solid #cccccc;
      margin-bottom: 20rpx;
      .item1 {
        flex: 0 0 60rpx;
      }
      .item2 {
        flex: 2;
      }
      .item3 {
        flex: 0 0 60rpx;
      }
    }
  }
  .r-line-height {
    line-height: 60rpx;
  }
  .label-pad {
    display: inline-block;
    padding-left: 60rpx;
  }
  .text-align-right {
    text-align: right;
  }
}
</style>
