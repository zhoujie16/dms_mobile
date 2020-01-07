<template>
  <view class="page-wrap">
    <view class="container">
      <view class="content">
       <!-- <view class="m-flex m-align-center m-height-80 content-top">客户信息</view> -->
        <view class="subContent">
          <VChoose></VChoose>
       <!-- <view class="uni-flex uni-row">
          <view class="flex-item1  sub-text">灯光：</view>
          <view class="flex-item2  sub-text ">
            <button size="mini" type="primary" plain="true" style="width:32%;margin-right: 2%;">正常</button>
            <button size="mini" type="primary" plain="true" style="width:32%;margin-right: 2%;">观察</button>
            <button size="mini" type="warn" plain="true" style="width:32%;">异常</button>
          </view>
          <view class="flex-item3  sub-text ">何红</view>
        </view> -->
        
       
        </view>
      </view>
     <view class="content">
       <view class="m-flex m-align-center m-height-80 content-top">内饰检查</view>
       <view class="subContent">
         <textarea class="sub-textarea label-pad" @blur="bindTextAreaBlur" auto-height />
         <button type="warn " class="btn-blue label-pad ">按下说话</button>
       </view>
     </view>
     
    </view>
  </view>
</template>

<script>
  import VChoose from './v-choose.vue'
export default {
	name:'InteriorCheck',
  components:{
    VChoose
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.page-wrap {
  min-height: 100vh;
  background-color: $uni-bg-color-page;
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
          width: 20%;
          padding: 5rpx 0;
          text-align: center;
        }
        .flex-item2{
          width: 66%;
          padding: 5rpx 0;
        }
        .flex-item3{
          width: 14%;
          text-align: center;
          padding: 5rpx 0;
        }
        .label-pad {
          margin-bottom: 20rpx;
        }
        .sub-text {
          line-height: 60rpx;
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
        .btn-blue {
          width: 80%;
          text-align: center;
          background-color: #0099cc;
          color: $uni-text-color-inverse;
        }
        
      }
    }
  }
}
</style>
