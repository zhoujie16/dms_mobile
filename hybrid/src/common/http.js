import AppConfig from "@/config/index.js";
import axios from "axios";

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
  async ajax({ url, method, data = {}, config = { isLoading: false } }) {
    let requestUrl = AppConfig.requsetUrl + url;
    if (url.indexOf("http://") !== -1 || url.indexOf("http://") !== -1) {
      requestUrl = url;
    }
    if (config.isLoading) {
      //   await uni.showLoading({
      //     title: "加载中",
      //     mask: true
      //   });
    }
    console.log("http 请求 url: ", url);
    console.log("http 请求 参数: ", data);

    const requestParams = {
      method,
      url: requestUrl,
      params: method === "get" ? data : {},
      data: method === "post" ? data : {}
    };
    let requestRes = null;
    const res = await axios(requestParams);
    if (res.status == 200) {
      requestRes = res.data;
      console.log("http 请求 响应: ", requestRes);
      if (config.isLoading) {
        await this.sleep(300);
        //   await uni.hideLoading();
      }
    }
    return requestRes;
  }

  async get(url, data, config) {
    const method = "get";
    return await this.ajax({
      url,
      method,
      data: { ...data, t: new Date().getTime() },
      config
    });
  }

  async post(url, data, config) {
    const method = "post";
    return await this.ajax({
      url,
      method,
      data,
      config
    });
  }
}
export default new Http();
