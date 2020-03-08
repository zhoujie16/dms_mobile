<!-- 语音识别demo 测试功能需要真机 -->
<template>
  <MPage ref="MPage" class="page-inner">
    <m-button class="demo-btn" type="primary" @click.native="startRecognize">
      点击开始语音识别
    </m-button>
    <m-button class="demo-btn" type="primary" @click.native="stopRecognize">结束语音识别</m-button>
    <view class="text">
      <view class="" v-for="(item, i) in logs" :key="i">{{ item }}</view>
    </view>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      logs: ['日志']
    };
  },
  mounted() {
    // console.log('speech mounted', this.a);
  },
  methods: {
    // 开始识别
    startRecognize() {
      this.$speech.start({
        start: () => {
          this.saveLog('开始语音识别');
        },
        volumeChange: ({ volume }) => {
          this.saveLog('音量变化: ' + volume);
        },
        recognizing: ({ partialResult }) => {
          this.saveLog('临时语音识别结果: ' + partialResult);
        },
        recognition: ({ result }) => {
          this.saveLog('最终语音识别: ' + result);
        },
        end: () => {
          this.saveLog('结束语音识别');
        },
        error: ({ code, message }) => {
          this.saveLog('语音识别错误: ' + code + ',' + message);
        }
      });
    },
    stopRecognize() {
      this.$speech.stop();
    },
    saveLog(message) {
      this.logs.unshift(message);
    }
  }
};
</script>

<style lang="scss">
.page-inner {
  padding: 20rpx;
}
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
