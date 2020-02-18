<template>
  <MPage ref="MPage" type="primary">
    <view class="page-wrap">
      <view class="container">
        <view class="content">
          <view class="m-flex m-align-center m-height-80 content-top">车辆信息</view>
          <view class="uni-flex uni-row">
            <text class="label-pad label-color m-height-80">车牌号：</text>
            <text class=" m-height-80">川AFH892</text>
          </view>
          <view class="uni-flex uni-row">
            <text class="label-pad label-color m-height-80">工单号：</text>
            <text class=" m-height-80">RO20010200006</text>
          </view>
          <view class="uni-flex uni-row">
            <text class="label-pad label-color m-height-80">预检单号：</text>
            <text class=" m-height-80">RO20010200006</text>
          </view>
          <view class="uni-flex uni-row">
            <text class="label-pad label-color m-height-80">服务顾问：</text>
            <text class=" m-height-80">胡袁公</text>
          </view>
        </view>
        <view class="content">
          <view class="m-flex uni-row m-align-center m-height-80 content-top2">
            <view class="s-sign"></view>
            <view class="s-font">内饰检查异常</view>
          </view>
          <view class="uni-flex uni-row  m-height-80">
            <view class="flex-item1">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-item">音响</view>
            </view>
            <view class="flex-item2">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
            </view>
          </view>
        </view>

        <view class="content">
          <view class="m-flex uni-row m-align-center m-height-80 content-top2">
            <view class="s-sign"></view>
            <view class="s-font">发动机异常项</view>
          </view>
          <view class="uni-flex uni-row  m-height-80">
            <view class="flex-item1">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-item">空调滤清器</view>
            </view>
            <view class="flex-item2">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
            </view>
          </view>
          <view class="uni-flex uni-row  m-height-80">
            <view class="flex-item1">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-item">蓄电池</view>
            </view>
            <view class="flex-item2">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
            </view>
          </view>
        </view>
        <view class="content">
          <view class="m-flex uni-row m-align-center m-height-80 content-top2">
            <view class="s-sign"></view>
            <view class="s-font">底盘四轮-异常项</view>
          </view>
          <view class="uni-flex uni-row  m-height-80">
            <view class="flex-item1">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-item">刹车片</view>
            </view>
            <view class="flex-item2">
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
              <uni-icons type="checkbox-filled" size="24" color="#ccc"></uni-icons>
              <view class="s-gary"></view>
            </view>
          </view>
        </view>

        <view class="content">
          <view class="m-flex m-align-center m-height-80 content-top">备注</view>
          <view class="s-box">
            <textarea
              class="s-textarea"
              placeholder-style="color:#ccc"
              placeholder="维修建议"
              auto-height
            />
          </view>
        </view>
      </view>
    </view>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
export default {
  components: {},
  data() {
    return {
      dataSource: [0, 1, 2, 3, 4, 5]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  background-color: $uni-bg-color-page;
  overflow: hidden;
  .container {
    padding: 20rpx 0 60rpx;
    max-height: 1200rpx;
    overflow: scroll;
    .content {
      background-color: #ffffff;
      margin: 20rpx;
      border-radius: 20rpx;
      padding: 0 40rpx;
      .content-top {
        padding-right: 10rpx;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 36rpx;
        margin-bottom: 20rpx;
      }
      .content-top2 {
        .s-sign {
          width: 30rpx;
          height: 30rpx;
          background: #e04b28;
          margin-right: 20rpx;
        }
        .s-font {
          font-size: 36rpx;
        }
      }
      .s-item {
        height: 60rpx;
        line-height: 60rpx;
        margin-left: 20rpx;
        display: inline-block;
      }
      .s-gary {
        width: 40rpx;
        height: 40rpx;
        background: #666666;
        display: inline-block;
        margin-right: 40rpx;
        margin-left: 20rpx;
      }
    }
  }
}
.label-color {
  color: #777777;
}
.label-pad {
  width: 25vw;
  padding-right: 20rpx;
}
.flex-item {
  width: 75vw;
}
.flex-item1 {
  width: 40%;
}
.flex-item2 {
  width: 60%;
}
.s-box {
  margin-bottom: 20rpx;
  min-height: 450rpx;
}
.s-textarea {
  background: #e5e5e5;
  min-height: 400rpx;
  width: 100%;
  padding: 20rpx;
}
</style>
