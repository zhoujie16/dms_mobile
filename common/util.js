/**
 * 公共方法
 */
class Util {
  constructor(arg) {

  }
  /**
   * 判断数据类型
   * @param {Object} obj
   */
  typeOf(obj) {
    const toString = Object.prototype.toString;
    const typeMap = {
      '[object String]': 'string',
      '[object Number]': 'number',
      '[object Boolean]': 'boolean',
      '[object Symbol]': 'symbol',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object',
      '[object Array]': 'array',
      '[object Function]': 'function',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Error]': 'error'
    }
    return typeMap[toString.call(obj)];
  }
}
export default new Util();
