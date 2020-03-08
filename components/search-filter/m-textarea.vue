<!-- 文本域 -->
<template>
  <view class="m-textarea-wrap">
    <view class="m-textarea-title">
      <MLabel :label="label">
        <text @click="speechBtnClick" class="m-iconfont speech-btn">&#xe729;</text>
      </MLabel>
    </view>
    <view class="m-textarea-inner">
      <textarea
        :value="value"
        @input="inputHandle"
        class="m-textarea"
        :placeholder="placeholder"
        placeholder-style="font-size: 30rpx;color: #c3c3c3;"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-textarea',
  components: {},
  mounted() {
    // this.addRecognizeEventListener();
  },
  props: {
    label: {
      type: String,
      default: '标题'
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: '请输入内容（最多200字）'
    },
    require: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    inputHandle(e) {
      this.$emit('input', e.target.value);
    },
    speechBtnClick() {
      console.log('点击语音识别按钮');
      this.$speech.start({
        start: () => {
          console.log('开始语音识别');
        },
        volumeChange: ({ volume }) => {
          // console.log('音量变化: ' + volume);
        },
        recognizing: ({ partialResult }) => {
          console.log('临时语音识别结果: ' + partialResult);
        },
        recognition: ({ result }) => {
          console.log('最终语音识别: ' + result);
          this.$emit('input', this.value + result);
        },
        end: () => {
          console.log('结束语音识别');
        },
        error: ({ code, message }) => {
          // this.saveLog('语音识别错误: ' + code + ',' + message);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.m-textarea-wrap {
  .m-textarea-title {
    .speech-btn {
      color: #1371f7;
      font-size: 40rpx;
    }
  }
  .m-textarea-inner {
    background-color: #ffffff;
    padding: 30rpx;
    .m-textarea {
      width: 100%;
      height: 200rpx;
      color: #70767f;
    }
  }
}
</style>
