<template>
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="subContent"><VChoose :rowData="formData"></VChoose></view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">内饰检查</view>
        <view class="subContent">
          <textarea class="sub-textarea label-pad" @blur="bindTextAreaBlur" auto-height />
          <button type="warn " class="btn-blue label-pad "><uni-icons type="mic-filled" size='18' color="#FFFFFF" ></uni-icons>按下说话</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import VChoose from './v-choose.vue';
export default {
  name: 'InteriorCheck',
  components: {
    VChoose
  },
  data() {
    return {
      formData: [
        {
          type: 'checkbox',
          text: '灯光',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '四门升降',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '仪表/指示灯',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '雨刮',
          flag: true,
          isLook: false,
          data: 'error'
        },
        {
          type: 'checkbox',
          text: '空调',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '音响',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '手刹',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '天窗',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '后视镜',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '座椅/座椅套',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '安全带',
          flag: false,
          isLook: true,
          data: ''
        }
      ]
    };
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
        // .flex-item1 {
        //   width: 20%;
        //   padding: 5rpx 0;
        //   text-align: center;
        // }
        // .flex-item2{
        //   width: 66%;
        //   padding: 5rpx 0;
        // }
        // .flex-item3{
        //   width: 14%;
        //   text-align: center;
        //   padding: 5rpx 0;
        // }
        .label-pad {
          margin-bottom: 20rpx;
        }
        // .sub-text {
        //   line-height: 60rpx;
        // }
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
