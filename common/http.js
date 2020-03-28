import AppConfig from "./../config/config.js";
import Auth from "@/common/auth/index.js";

class Http {
  constructor(arg) {
    this.debugger = false;
  }
  async sleep(timeLen) {
    return new Promise(resolve => {
      setTimeout(resolve, timeLen);
    });
  }
  /**
   * 发送请求
   */
  async ajax({
    url,
    method,
    data = {},
    _config = {}
  }) {
    const config = {
      isLoading: false,
      showError: true,
      ..._config
    }
    let requestUrl = AppConfig.requsetUrl + url;
    if (url.indexOf("http://") !== -1 || url.indexOf("https://") !== -1) {
      requestUrl = url;
    }
    if (config.isLoading) {
      await uni.showLoading({
        title: "加载中",
        mask: true
      });
    }
    console.log("http 请求 url: ", url);
    console.log("http 请求 参数: ", data);
    const [err, res] = await uni.request({
      url: requestUrl,
      method,
      data,
      header: {
        "content-type": "application/json;charset=UTF-8",
        'appId': 'cyx',
        'userAgent': 'pc',
        "jwt": Auth.getToken(),
        'userId': Auth.getUserId(),
        'ownerCode': ''
      }
    });
    console.log("http 请求 响应: ", res.data);
    if (config.isLoading) {
      await this.sleep(300);
      await uni.hideLoading();
    }
    if (err) {
      // 请求发送时候失败
      uni.showToast({
        title: '请求发送失败, 请检查您的网络',
        position: 'bottom',
        icon: 'none'
      });
      return null;
    }
    const resultCode = res.data.resultCode;
    if (resultCode !== 200) {
      if (config.showError) {
        const errMsg = res.data.errMsg || res.data.message ||  res.data.error;
        uni.showToast({
          title: errMsg,
          position: 'bottom',
          icon: 'none'
        });
      }
      return [true, res.data];
    }
    return [false, res.data];
  }
  async get(url, data, _config) {
    const method = "GET";
    return await this.ajax({
      url,
      method,
      data: { ...data,
        t: new Date().getTime()
      },
      _config
    });
  }

  async post(url, data, _config) {
    const method = "POST";
    return await this.ajax({
      url,
      method,
      data,
      _config
    });
  }
}
export default new Http();
