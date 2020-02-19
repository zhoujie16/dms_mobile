import AppConfig from "./../config/config.js";
import JSEncrypt from "wx-jsencrypt";

class Auth {
  constructor(arg) {
    this.debugger = false;
    this.EncryptKey =
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+qyoKFVePsvGQ9/RJJC9FT9FYF6kxuJ1l53P8GHMzTU9Jbbk2k///Hf5cpX8iP6laV24OT1KGLab/kUuUlT+1BSR4OsAUshASqYQbvzqSHn8DWJ9owovh3461Rksc1uS2xGABKzjcDi3nwHLkJ50bSLWpRxAKA+6TXo7mH0E4bQIDAQAB";
  }
  /** Token */
  setToken(jwt) {
    return uni.setStorageSync('jwt', username)
  }
  getToken() {
    return uni.getStorageSync('jwt')
  }
  removeToken() {
    uni.removeStorageSync('jwt')
  }
  /** 用户名 */
  setUser(username) {
    return uni.setStorageSync('username', username)
  }
  getUser() {
    return uni.getStorageSync('username')
  }
  removeUser() {
    uni.removeStorageSync('username')
  }
  /** 用户 ID */
  setUserId(userId) {
    return uni.setStorageSync('userId', userId)
  }
  getUserId() {
    return uni.getStorageSync('userId')
  }
  removeUserId() {
    uni.removeStorageSync('userId')
  }

  // RSA 加密
  jsEncrypt(str) {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(this.EncryptKey);
    return encrypt.encrypt(str);
  }
  // 存储本地
  setStorageData(key, str) {
    uni.setStorage({
      key: key,
      data: str
    })
  }
  // 获取本地数据
  getStorgeData(key) {
    let _data = ''
    uni.getStorage({
      key: key,
      success(e) {
        _data = e.data //这就是你想要取的值
      }
    })
    return _data;
  }

}
export default new Auth();
