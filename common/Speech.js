/**
 * 语音识别 工具类
 * 只能是单例，在实例中统一管理 因为页面卸载后 监听的方法还存在
 * 语音识别插件配置: https://ask.dcloud.net.cn/article/35059
 */
let instance = null;

class Speech {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  // 初始化 语音识别
  initRecognize() {
    plus.speech.addEventListener('start', () => {
      // console.log('开始语音识别');
      this._start();
    }, false);
    plus.speech.addEventListener('volumeChange', ({
      volume
    }) => {
      // console.log('音量变化', volume);
      this._volumeChange({
        volume
      })
    }, false);
    plus.speech.addEventListener('recognizing', ({
      partialResult
    }) => {
      // console.log('临时语音识别结果', partialResult);
      this._recognizing({
        partialResult
      })
    }, false);
    plus.speech.addEventListener('recognition', ({
      result
    }) => {
      // console.log('最终语音识别', result);
      this._recognition({
        result
      })
    }, false);
    plus.speech.addEventListener('end', () => {
      // console.log('结束语音识别');
      this._end()
    }, false);
    plus.speech.addEventListener('error', ({
      code,
      message
    }) => {
      // console.log('语音识别错误', code, message);
      this._error({
        code,
        message
      })
    }, false);
  }
  // 开始语音识别
  start({
    start = () => {},
    volumeChange = () => {},
    recognizing = () => {},
    recognition = () => {},
    end = () => {},
    error = () => {},
  }) {
    this._start = start;
    this._volumeChange = volumeChange;
    this._recognizing = recognizing;
    this._recognition = recognition;
    this._end = end;
    this._error = error;
    const options = {
      engine: 'baidu', // 百度：baidu  讯飞：iFly
      continue: true,
      // userInterface: false
    };
    plus.speech.startRecognize(options);
  }
  stop() {
    plus.speech.stopRecognize();
  }
}

export default new Speech();
