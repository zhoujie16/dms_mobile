<template>
  <!-- 发动机舱 -->
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="subContent"><VChoose :rowData="formData"></VChoose></view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top" style="justify-content: space-between">
          <view>新能源汽车</view>
          <view>
            <uni-icons :type="isshow?'arrowup':'arrowdown'" size="30" color="#CCCCCC" @click="showClick"></uni-icons>
          </view>
        </view>
        <view class="subContent" v-if="isshow">
         <VChoose :rowData="formData1"></VChoose>
        </view>
      </view>
      <view class="content">
        <view class="m-flex m-align-center m-height-80 content-top">发动机舱</view>
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
  name: 'EngineNacelle',
  components: {
    VChoose
  },
  data() {
    return {
      isshow: false,
      formData: [
        {
          type: 'checkbox',
          text: '发动机机油',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '玻璃清洗液',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '蓄电池',
          flag: true,
          isLook: true,
          data: 'error'
        },
        {
          type: 'checkbox',
          text: '防冻液',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '助力转向',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'percent',
          text: '制动液',
          flag: false,
          data: '',
          placeholder: '0~10%'
        },
        {
          type: 'checkbox',
          text: '空气滤清器',
          flag: false,
          isLook: true,
          data: 'primary'
        },
        {
          type: 'checkbox',
          text: '空调滤清器',
          flag: false,
          isLook: true,
          data: 'primary'
        },
        {
          type: 'checkbox',
          text: '发动机皮带',
          flag: false,
          isLook: true,
          data: ''
        },
        {
          type: 'checkbox',
          text: '油路/管路/线路',
          flag: false,
          isLook: true,
          data: ''
        }
      ],
      formData1:[{
          type: 'checkbox',
          text: '高压电池安装',
          flag: false,
          isLook: true,
          data: ''
        },{
          type: 'checkbox',
          text: '高压维护开关',
          flag: false,
          isLook: true,
          data: ''
        },{
          type: 'checkbox',
          text: '线束/接插件',
          flag: false,
          isLook: true,
          data: ''
        },{
          type: 'checkbox',
          text: '逆变器冷却液',
          flag: false,
          isLook: true,
          data: ''
        }],
    };
  },
  methods:{
    showClick(){
      this.isshow = !this.isshow;
      // if(el==='arrowdown'){
      //   this.isshow = 'arrowup';
      // }else{
      //   this.isshow = 'arrowdown';
      // }
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
