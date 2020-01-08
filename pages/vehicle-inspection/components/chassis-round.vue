<template>
  <!-- 发动机舱 -->
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="subContent"><VChoose :rowData="formData"></VChoose></view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top" style="justify-content: space-between">
          <text>轮胎</text>
          <text><uni-icons :type="isshow1" size="30" color="#CCCCCC" @click="showClick(isshow1, 1)"></uni-icons></text>
        </view>
        <view class="subContent">
          <VChoose :rowData="formData1"></VChoose>
          <view v-show="isshow1 === 'arrowup'"><VChoose :rowData="formData2"></VChoose></view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top" style="justify-content: space-between">
          <text>刹车片</text>
          <text><uni-icons :type="isshow2" size="30" color="#CCCCCC" @click="showClick(isshow2, 2)"></uni-icons></text>
        </view>
        <view class="subContent">
          <VChoose :rowData="formData3"></VChoose>
          <view v-show="isshow2 === 'arrowup'"><VChoose :rowData="formData4"></VChoose></view>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">底盘四轮</view>
        <view class="subContent">
          <textarea class="sub-textarea label-pad" @blur="bindTextAreaBlur" auto-height />
          <button type="warn " class="btn-blue label-pad ">
            <uni-icons type="mic-filled" size="18" color="#FFFFFF"></uni-icons>
            按下说话
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import VChoose from './v-choose.vue';
export default {
  name: 'ChassisRound',
  components: {
    VChoose
  },
  data() {
    return {
      isshow1: 'arrowdown',
      isshow2: 'arrowdown',
      formData: [
        {
          type: 'checkbox',
          text: '机油滤清器',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '燃油滤清器',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '变速箱油（泄漏）',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '减震器/撑杆/半轴及其他悬挂组件',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '排气管',
          flag: false,
          isLook: true,
          data: ''
        }
      ],
      formData1: [
        {
          type: 'checkbox',
          text: '状态',
          flag: true,
          isLook: true,
          data: ''
        }
      ],
      formData2: [
        {
          type: 'millimeter',
          text: '胎纹左前',
          flag: false,
          data: '',
          placeholder: '胎纹'
        },
        {
          type: 'millimeter',
          text: '胎纹右前',
          flag: false,
          data: '',
          placeholder: '胎纹'
        },
        {
          type: 'millimeter',
          text: '胎纹左后',
          flag: false,
          data: '',
          placeholder: '胎纹'
        },
        {
          type: 'millimeter',
          text: '胎纹右后',
          flag: false,
          data: '',
          placeholder: '胎纹'
        },
        {
          type: 'dateType',
          text: '胎龄右后',
          flag: false,
          data: '',
          placeholder: '胎纹'
        },
        {
          type: 'checkbox',
          text: '胎压左前',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '胎压右前',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '胎压左后',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '胎压右后',
          flag: false,
          isLook: true,
          data: ''
        }
      ],
      formData3: [
        {
          type: 'checkbox',
          text: '状态',
          flag: true,
          isLook: true,
          data: ''
        }
      ],
      formData4: [
        {
          type: 'millimeter',
          text: '刹车片左前',
          flag: false,
          data: '',
          placeholder: '刹车片'
        },
        {
          type: 'millimeter',
          text: '刹车片右前',
          flag: false,
          data: '',
          placeholder: '刹车片'
        },
        {
          type: 'millimeter',
          text: '刹车片左后',
          flag: false,
          data: '',
          placeholder: '刹车片'
        },
        {
          type: 'millimeter',
          text: '刹车片右后',
          flag: false,
          data: '',
          placeholder: '刹车片'
        }
      ]
    };
  },
  methods: {
    showClick(el, num) {
      if (el === 'arrowdown') {
        if (num == 1) {
          this.isshow1 = 'arrowup';
        } else {
          this.isshow2 = 'arrowup';
        }
      } else {
        if (num == 1) {
          this.isshow1 = 'arrowdown';
        } else {
          this.isshow2 = 'arrowdown';
        }
      }
    }
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
