<template>
  <MPage ref="MPage" type="primary" title="客户信息">
    <!-- <view class="status-bar-wrap">
      <view class="m-status-bar"></view>
      <uni-nav-bar class="nav-bar" left-icon="arrowleft" title="客户信息" @clickLeft="back" />
      <view class="status-bar-bg"></view>
    </view> -->
    <view class="page-body">
      <view class="title-panel">
        <view class="title-panel-inner">
          <view class="info-panel">
            <view class="customer-info">王大锤 - 沪AFH865</view>
            <!-- <view class="car-info">13322111234</view> -->
          </view>
          <view class="phone" @click="phoneClick">
            <image src="/static/image/dianhua2.svg" mode="scaleToFill" class="img" ></image>
          </view>
        </view>
        <view class="title-panel-bg"></view>
      </view>
      <view>
        <MLabel label="车牌号">沪AFH865</MLabel>
        <MLabel label="车架号">LVSHCFMB6ASD238</MLabel>
        <MLabel label="车型">全新福克斯三厢 1.6MT</MLabel>
        <MLabel label="销售日期">xxxxxxxxxx</MLabel>
        <MLabel label="油量表">60%</MLabel>
        <MLabel label="里程">100</MLabel>
      </view>
       <view class="m-break-space"></view>
       <view class="content">
         <view class="m-flex m-align-center m-height-80 content-top">外观检查</view>
       </view>
       <view class="content">
         <view class="m-flex m-align-center m-height-80 content-top">物品清点</view>
         <view class="subContent">
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 <view class="list-color">备胎</view>
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 <view class="list-color">行驶证</view>
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 <view class="list-color">保养手册</view>
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 <view class="list-color">三脚架</view>
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 <view class="list-color">千斤顶</view>
                 <view class="sub-text list-text">无</view></view>
             </view>
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 <view class="list-color">贵重物品</view>
                 <view class="sub-text list-text">无</view></view>
             </view>
           </view>
           <view class="uni-flex uni-row">
             <view class="flex-item1  sub-text">灭火器</view>
             <view class="flex-item2  sub-text ">无</view>
           </view>
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
           <view class="error-text">异常</view>
           <view class="uni-flex uni-row">
             <view class="flex-item1  sub-text">雨刮</view>
             <view class="flex-item2  sub-text ">无</view>
           </view>
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
           <view class="error-text" style="background-color: #1989FA;">正常</view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 空气滤清器
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 静态电压_V
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 测试值_CC
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 启动电压_V
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 额定值_CC
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="error-text" style="background-color: #FFB400;">观察</view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 空调滤清器
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="error-text">异常</view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 蓄电池
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
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
           <view class="error-text" style="background-color: #1989FA;">正常</view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 机油滤清器
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 燃油滤清器
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 旧件拍照
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 维修效果
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
           <view class="error-text">异常</view>
           <view class="uni-flex uni-row">
             <view class="flex-item" style="width: 49%;">
               <view class="sub-text">
                 刹车盘片
                 <view class="sub-text list-text">无</view>
               </view>
             </view>
           </view>
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
       <view class="check" @click="deliveryClick">交车</view>
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
    
  </MPage>
  
  
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
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
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
  .status-bar-wrap {
    position: relative;
    background: #ffffff;
    /deep/ .nav-bar {
      .uni-navbar__content {
        z-index: 1;
        background-color: initial !important;
        .uni-navbar__header {
          background-color: initial !important;
        }
      }
      .uni-icons,
      .uni-nav-bar-text {
        color: #ffffff !important;
      }
    }
    .status-bar-bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(to right, #41c5ff, #1371f7);
      z-index: 0;
    }
  }
  
  .page-body {
    height: calc(100vh - 128rpx);
    overflow: auto;
    .title-panel {
      position: relative;
      padding: 10rpx 30rpx 30rpx 30rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      .title-panel-bg {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 100rpx;
        background: linear-gradient(to right, #41c5ff, #1371f7);
        z-index: 0;
      }
      .title-panel-inner {
        width: 100%;
        background-color: #ffffff;
        padding: 0 30rpx;
        border-radius: 10rpx;
        z-index: 1;
        box-shadow: 0px 2px 5px #eeeeee;
        position: relative;
        .info-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-bottom: solid 1px #efefef;
          padding-top: 12rpx;
          height: 148rpx;
          .customer-info {
            font-size: 34rpx;
            height: 80rpx;
            line-height: 80rpx;
          }
          .car-info {
            font-size: 30rpx;
            height: 80rpx;
            line-height: 80rpx;
            color: #70767f;
          }
        }
        
         }
         .phone{
           position: absolute;
           top: 30rpx;
           right: 40rpx;
           width: 70rpx;
           height: 70rpx;
           .img{
             width: 70rpx;
             height: 70rpx;
           }
         }
    }
  }
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
      width: 90%;
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
      .list-text {
        float: right;
        padding-right: 10rpx;
      }
      .list-color {
        color: #CCCCCC;
        float: left;
      }
      .error-text {
        height: 60rpx;
        line-height: 60rpx;
        margin: 0 50rpx;
        background-color: #E04B28;
        border-radius: 10rpx;
        text-align: center;
        color: #fff;
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
  .check {
    height: 88rpx;
    line-height: 88rpx;
    margin: 30rpx 120rpx;
    text-align: center;
    background-color:#1371F7;
    border-radius: 50rpx;
    color: #FFFFFF;
    // border: 3rpx solid #09BB07;
  }
</style>
