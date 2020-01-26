/**
 * 公共方法
 */
class Util {
  constructor(arg) {}
  /**
   * 判断数据类型
   * @param {Object} obj
   */
  typeOf(obj) {
    const toString = Object.prototype.toString;
    const typeMap = {
      "[object String]": "string",
      "[object Number]": "number",
      "[object Boolean]": "boolean",
      "[object Symbol]": "symbol",
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Object]": "object",
      "[object Array]": "array",
      "[object Function]": "function",
      "[object Date]": "date",
      "[object RegExp]": "regExp",
      "[object Error]": "error"
    };
    return typeMap[toString.call(obj)];
  }
  /**
   * base64 字符串 转 blob
   * @param {*} base64Data
   */
  dataURItoBlob(base64Data) {
    //console.log(base64Data);//data:image/png;base64,
    var byteString;
    if (base64Data.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(base64Data.split(",")[1]);
    //base64 解码
    else {
      byteString = unescape(base64Data.split(",")[1]);
    }
    var mimeString = base64Data
      .split(",")[0]
      .split(":")[1]
      .split(";")[0]; //mime类型 -- image/png

    // var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
    // var ia = new Uint8Array(arrayBuffer);//创建视图
    var ia = new Uint8Array(byteString.length); //创建视图
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ia], {
      type: mimeString
    });
    return blob;
  }
  /**
   * 将Blob 对象转换成 ArrayBuffer
   * @param {*} blob
   */
  blobToArrayBuffer(blob) {
    return new Promise(resolve => {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      reader.onload = e => {
        resolve(reader.result);
      };
    });
  }
}
export default new Util();
