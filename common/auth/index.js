import AppConfig from "@/config/config.js";
import JSEncrypt from "wx-jsencrypt";
import * as types from "@/common/auth/type.js";
import {
  searchRoleByCode,
  getWxlxSelect,
  getModel,
  getSeries
} from "@/api/util/index.js";

const ENCRYPT_KEY =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+qyoKFVePsvGQ9/RJJC9FT9FYF6kxuJ1l53P8GHMzTU9Jbbk2k///Hf5cpX8iP6laV24OT1KGLab/kUuUlT+1BSR4OsAUshASqYQbvzqSHn8DWJ9owovh3461Rksc1uS2xGABKzjcDi3nwHLkJ50bSLWpRxAKA+6TXo7mH0E4bQIDAQAB";

class Auth {
  constructor(arg) {
    this.debugger = false;
    this.EncryptKey = ENCRYPT_KEY;
  }
  /** 登录用户名 */
  saveLoginUser(data) {
    uni.setStorageSync(types.LOGIN_USER, data);
  }

  getLoginUser() {
    return uni.getStorageSync(types.LOGIN_USER);
  }
  /** 登录密码 */
  saveLoginPassword(data) {
    uni.setStorageSync(types.LOGIN_PASSWORD, data);
  }

  getLoginPassword() {
    return uni.getStorageSync(types.LOGIN_PASSWORD);
  }

  /** Token */
  saveToken(jwt) {
    uni.setStorageSync(types.LOGIN_JWT, jwt);
  }
  getToken() {
    return uni.getStorageSync(types.LOGIN_JWT);
  }

  /** USER_STATUS */
  saveUserStatus(data) {
    uni.setStorageSync(types.USER_STATUS, data);
  }

  getUserStatus() {
    return uni.getStorageSync(types.USER_STATUS);
  }

  /** EMPLOYEE_ID */
  saveEmployeeId(data) {
    uni.setStorageSync(types.EMPLOYEE_ID, data);
  }

  getEmployeeId() {
    return uni.getStorageSync(types.EMPLOYEE_ID);
  }
  /** USER_ID */
  saveUserId(data) {
    uni.setStorageSync(types.USER_ID, data);
  }

  getUserId() {
    return uni.getStorageSync(types.USER_ID);
  }
  /** USER_CODE */
  saveUserCode(data) {
    uni.setStorageSync(types.USER_CODE, data);
  }

  getUserCode() {
    return uni.getStorageSync(types.USER_CODE);
  }
  /** COMPANY_ID */
  saveCompanyId(data) {
    uni.setStorageSync(types.COMPANY_ID, data);
  }

  getCompanyId() {
    return uni.getStorageSync(types.COMPANY_ID);
  }
  /** EMPLOYEEDUTY_TYPE */
  saveEmployeedudytype(data) {
    uni.setStorageSync(types.EMPLOYEEDUTY_TYPE, data);
  }

  getEmployeedudytype() {
    return uni.getStorageSync(types.EMPLOYEEDUTY_TYPE);
  }

  /** ORG_CODE */
  saveOrgCode(data) {
    uni.setStorageSync(types.ORG_CODE, data);
  }

  getOrgCode() {
    return uni.getStorageSync(types.ORG_CODE);
  }

  /** ownerCode zjw 这字段哪来的??? */
  setOwnerCode(ownerCode) {
    return uni.setStorageSync("ownerCode", ownerCode);
  }
  getOwnerCode() {
    return uni.getStorageSync("ownerCode");
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
    });
  }
  // 获取本地数据
  getStorgeData(key) {
    let _data = "";
    uni.getStorage({
      key: key,
      success(e) {
        _data = e.data; //这就是你想要取的值
      }
    });
    return _data;
  }
  // 获取服务顾问列表
  async queryServiceAdvisor(params) {
    const [status, res] = await searchRoleByCode(params);
    const serviceAdvisorList = res.data.map(x => ({
      value: x.userId,
      text: x.employeeName
    }));
    return serviceAdvisorList;
  }

  // 获取维修类型
  async getRepairTypeList() {
    const [status, res] = await getWxlxSelect();
    const wxlxSelect = res.data.map(x => ({
      value: x.REPAIR_TYPE_CODE,
      text: x.REPAIR_TYPE_NAME
    }));
    return wxlxSelect;
  }
  /**
   * @param {Object} code  列表code  //比如服务顾问code
   * @param {Object} list  列表   //比如服务顾问列表
   */
  getRoleName(code, list) {
    let item = list.find(x => x.value == code);
    return item == undefined ? "未知" : item.text;
  }
  /**
   * @param {Object} obj  遍历对象如果值为null置空
   */
  traversingObject(obj) {
    for (let key in obj) {
      if (obj[key] == null) {
        obj[key] = ''
      }
    }
    return obj;
  }
  /**
   * 车型
   */
  async getModel(){
    const [status, res] = await getModel();
    const modelList = res.data.map(x => ({
      value: x.MODEL_ID+"",
      text: x.MODEL_NAME
    }));
    return modelList;
  }
  /**
   * 车系
   */
  async getSeries(){
    const [status, res] = await getSeries();
    const seriesList = res.data.map(x => ({
      value: x.SERIES_ID+"",
      text: x.SERIES_NAME
    }));
    return seriesList;
  }
  //判断undefined 置空
  isEmpty(event){
    return event==undefined?'':event;
  }
}
export default new Auth();
