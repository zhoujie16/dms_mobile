import AppConfig from "./../config/config.js";
import JSEncrypt from "wx-jsencrypt";

class Auth {
  constructor(arg) {
    this.debugger = false;
    this.TokenKey = "jwt";
    this.EncryptKey =
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+qyoKFVePsvGQ9/RJJC9FT9FYF6kxuJ1l53P8GHMzTU9Jbbk2k///Hf5cpX8iP6laV24OT1KGLab/kUuUlT+1BSR4OsAUshASqYQbvzqSHn8DWJ9owovh3461Rksc1uS2xGABKzjcDi3nwHLkJ50bSLWpRxAKA+6TXo7mH0E4bQIDAQAB";
  }
  // RSA 加密
  jsEncrypt(str) {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(this.EncryptKey);
    return encrypt.encrypt(str);
  }
}
export default new Auth();
