<!-- 语音识别demo 测试功能需要真机 -->
<template>
  <MPage ref="MPage" class="page-inner">
    <m-button class="demo-btn" type="primary" @click.native="startRecognize">
      点击开始语音识别
    </m-button>
    <view class="text">{{ text }}</view>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  mounted() {
    this.addRecognizeEventListener();
  },
  methods: {
    // 添加事件监听
    addRecognizeEventListener() {
      plus.speech.addEventListener(
        'start',
        () => {
          console.log('start');
          this.text = '';
        },
        false
      );
      plus.speech.addEventListener(
        'recognition',
        e => {
          console.log('recognition', e);
          this.text += e.result;
        },
        false
      );
      plus.speech.addEventListener(
        'end',
        () => {
          console.log('end');
          console.log(this.text);
        },
        false
      );
    },
    // 开始识别
    startRecognize() {
      const options = {
        engine: 'baidu' // 百度：baidu  讯飞：iFly
      };
      plus.speech.startRecognize(options);
    },
    stopRecognize() {
      plus.speech.stopRecognize();
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
