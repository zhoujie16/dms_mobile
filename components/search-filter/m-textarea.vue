<!-- 文本域 -->
<template>
  <view class="m-textarea-wrap">
    <view class="m-textarea__title">
      <MLabel :label="label" :required="required">
        <text v-if="showSpeech" @click="speechBtnClick" class="m-iconfont m-textarea__speech-btn">
          &#xe729;
        </text>
      </MLabel>
    </view>
    <view class="m-textarea__inner">
      <textarea
        :value="value"
        @input="inputHandle"
        class="m-textarea__textarea"
        :placeholder="placeholderText"
        placeholder-style="font-size: 30rpx;color: #c3c3c3;"
        :maxlength="maxlength"
        :disabled="disabled || readonly"
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
      type: String
    },
    speech: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 200
    }
  },
  computed: {
    showSpeech() {
      if (!this.speech) return false;
      if (this.disabled || this.readonly) return false;
      return true;
    },
    placeholderText() {
      if (!this.placeholder) return `请输入内容（最多${this.maxlength}字）`;
      return this.placeholder;
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
  .m-textarea__title {
    .m-textarea__speech-btn {
      color: $uni-m-color-c11;
      font-size: 52rpx;
    }
  }
  .m-textarea__inner {
    background-color: #ffffff;
    padding: 30rpx;
    .m-textarea__textarea {
      width: 100%;
      height: 200rpx;
      color: #70767f;
    }
  }
}
</style>
