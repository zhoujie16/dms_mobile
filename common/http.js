import AppConfig from "./../config/config.js";
import Auth from "@/common/auth.js";

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
    config = {
      isLoading: false
    }
  }) {
    let requestUrl = AppConfig.requsetUrl + url;
    if (url.indexOf("http://") !== -1 || url.indexOf("http://") !== -1) {
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
        'userAgent': 'pc',
        "jwt": Auth.getToken(),
        'appId': 'cyx',
        'userId': Auth.getUserId(),
        'ownerCode': Auth.getOwnerCode()
      }
    });
    console.log("http 请求 响应: ", res);
    if (config.isLoading) {
      await this.sleep(300);
      await uni.hideLoading(); 
    }
    if (err) {
      console.log(err);
      return null;
    }
    return res.data;
  }
  async get(url, data, config) {
    const method = "GET";
    return await this.ajax({
      url,
      method,
      data: { ...data,
        t: new Date().getTime()
      },
      config
    });
  }

  async post(url, data, config) {
    const method = "POST";
    return await this.ajax({
      url,
      method,
      data,
      config
    });
  }
}
export default new Http();
