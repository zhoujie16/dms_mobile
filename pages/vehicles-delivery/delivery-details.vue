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
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">外观检查</view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">物品清点</view>
        <view class="subContent">
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">客户需求</view>
            <view class="flex-item2  sub-text ">无</view>
          </view>
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">故障描述</view>
            <view class="flex-item2  sub-text ">无</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            内饰检查
          </view>
          <text @click="editClick">编辑</text>
        </view>
        <view class="subContent">
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">备注</view>
            <view class="flex-item2  sub-text ">无</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 ">
          <view class="content-top">
            发动机舱
          </view>
          <text @click="editClick">编辑</text>
        </view>
        <view class="subContent">
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">备注</view>
            <view class="flex-item2  sub-text ">无</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            底盘四轮
          </view>
          <text @click="editClick">编辑</text>
        </view>
        <view class="subContent">
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">备注</view>
            <view class="flex-item2  sub-text ">无</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            制动液
          </view>
          <text @click="editClick">编辑</text>
        </view>
        <view class="subContent">
          <view class="uni-flex uni-row">
            <view class="flex-item1  sub-text">制动液：%</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            胎纹
          </view>
          <text @click="editClick">编辑</text>
        </view>
        <view class="subContent">
          <view>
            <view class="text">胎纹左前：0毫米</view>
            <view class="text">胎纹右前：0毫米</view>
            <view class="text">胎纹左后：0毫米</view>
            <view class="text">胎纹右后：0毫米</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            胎龄
          </view>
          <text @click="editClick">编辑</text>
        </view>
        <view class="subContent">
          <view>
            <view class="text">胎龄左前：0毫米</view>
            <view class="text">胎龄右前：0毫米</view>
            <view class="text">胎龄左后：0毫米</view>
            <view class="text">胎龄右后：0毫米</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            刹车片
          </view>
          <text @click="editClick">编辑</text>
        </view>
        <view class="subContent">
          <view>
            <view class="text">刹车片左前：0毫米</view>
            <view class="text">刹车片右前：0毫米</view>
            <view class="text">刹车片左后：0毫米</view>
            <view class="text">刹车片右后：0毫米</view>
          </view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            旧件拍照
          </view>
          <text @click="editClick">编辑</text>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            维修效果
          </view>
          <text @click="editClick">编辑</text>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80">
          <view class="content-top">
            技师建议
          </view>
          <text @click="editClick">编辑</text>
        </view>
      </view>
      <!-- <view class="delivery" @click="deliveryClick">交车</view> -->
    </view>
    <MPopup ref="mPopup" type="center" title="关键信息" style="{position: relative;}">
      <view class="mainMessage">
        <view class="uni-flex uni-row" style="height: 60rpx;">
          <view class="message1">距保险到期天数</view>
          <view class="message2">无</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="message1">距首保天数</view>
          <view class="message2">已超期1317天</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="message1">距二保天数</view>
          <view class="message2">已超期1317天</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="message1">距定保天数</view>
          <view class="message2">289天</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="message1">距质保过期天数</view>
          <view class="message2">2020-02-10</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="message1">剩余SSP次数</view>
          <view class="message2">0</view>
        </view>
      </view>
      <button type="primary" size="mini" 
      @click="messageClose"
        style="float: left;position: absolute;bottom: 30px;right: 40%;">
        取消
      </button>
    </MPopup>
    <MPopup ref="mPopup1" type="center" title="选择回访时间" style="{position: relative;}">
      <view class="timeContent">
        <view class="time">上午</view>
        <view class="time">中午</view>
        <view class="time">下午</view>
        <view class="time">晚上</view>
        <view class="time">全天</view>
      </view>
      <button type="primary" size="mini" 
        style="float: left;position: absolute;bottom: 30px;left: 60px;">
        确定
      </button>
      <button type="primary" size="mini" 
        @click="timeClose"
        style="float: right;position: absolute;bottom: 30px;right: 60px;">
        取消
      </button>
    </MPopup>
	<view class="messages" @click="messagesClick">
    <!-- <uni-icons type="info" color="white" style="display: block;height: 30rpx;"></uni-icons>
    <text style="font-size: 16rpx;color: #FFFFFF;">关键信息</text> -->
	<uni-icons type="info" size="26" color="#fff"></uni-icons>
	<view class="r-title">关键信息</view>
	</view>
  </view>
</template>

<script>
export default {
	name:'VehiclePreview',
  data() {
    return {};
  },
  mounted() {
  },
  methods:{
    editClick() {
      uni.navigateTo({
        url: '/pages/vehicle-inspection/vehicle-detail'
      })
    },
    deliveryClick() {
      this.$refs.mPopup1.open();
    },
    messageClose() {
      // console.log(1111)
      this.$refs.mPopup.close();
    },
    timeClose() {
      this.$refs.mPopup1.close();
    },
    messagesClick() {
      this.$refs.mPopup.open();
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
        width: 80%;
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
          height: 60rpx;
        }
        
      }
    }
  }
}
.text {
  height: 50rpx;
  line-height: 50rpx;
}
.delivery {
    width: 180px;
    height: 88rpx;
    line-height: 88rpx;
    margin: 30rpx 170rpx;
    text-align: center;
    background-color: #2b4d86;
    border-radius: 55rpx;
    color: #09BB07;
    border: 4rpx solid #09BB07;
  }
  .timeContent {
    padding: 20rpx;
    .time {
      height: 40px;
      border-bottom: 1px solid #ccc;
      line-height: 40px;
      font-size: 20px;
      padding-left: 5px;
      text-align: center;
    }
  }
  .mainMessage {
    padding: 20rpx;
    .message1 {
      width: 46%;
      // background-color: blue;
      color: #CCCCCC;
      height: 60rpx;
      line-height: 60rpx;
    }
    .message2 {
      // width: 60%;
      // background-color: pink;
      height: 60rpx;
      line-height: 60rpx;
      
    }
  }
  // .messages {
	 //  background-color: #0570DB;
  //   position: fixed;
  //   top: 80%;
  //   right: 20rpx;
  //   width: 90rpx;
  //   height: 90rpx;
  //   line-height: 90rpx;
  //   text-align: center;
  // }
  // .r-title {
  //   font-size: 20rpx;
  //   font-weight: bold;
  // }
  .messages {
	position: fixed;
	top: 80%;
	right: 20rpx;
    width: 90rpx;
    height: 90rpx;
    // background: #00bfff;
	background-color: #0570DB;
    color: #fff;
    align-items: right;
    margin-bottom: 20rpx;
    border-radius: 6rpx;
    text-align: center;
    .r-title {
      font-size: 20rpx;
      font-weight: bold;
    }
  }
</style>
