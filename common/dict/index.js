/**
 * 数据字典 工具类
 * 单例，整个程序中共享一个实例 登录后保存到内存
 * 不被vue数据劫持监听 不频繁操作本地存储  性能更好
 */
let instance = null;

class DictTool {
  constructor() {
    console.log('DictTool constructor');
    if (!instance) {
      this._dict = {};
      this._region = {};
      instance = this;
    }
    return instance;
  }
  /**
   * 字典初始化
   */
  initDict({
    dict = {},
    region = {}
  }) {
    const keys = Object.keys(dict);
    keys.forEach(key => {
      dict[key] = dict[key].map(item => ({
        ...item,
        text: String(item.codeCnDesc),
        value: String(item.codeId)
      }));
    })
    this._dict = dict;
    this._region = region;
  }
  getAllDict() {
    return this._dict;
  }
  // code 数据字典的 code 码  4位字符串
  createDictList(code) {
    const _code = String(code);
    const list = this._dict[_code];
    return list ? list : [];
  }
  // val -> 数据的值    code -> 数据字典的 code 码
  createDictText(val, code) {
    const list = this.createDictList(code);
    const item = list.find(item => item.value === String(val));
    if (item) {
      return item.text;
    }
    return '';
  }
  // deep -> 数据的级数，默认全部递归 获取所有省份
  createDictRegion(deep = 3) {
    return this.deepMapCity(this._region, deep);
  }
  // 递归构建省市区数据
  deepMapCity(data, deep = 3, step = 1) {
    const res = [];
    for (let key in data) {
      const target = {
        value: String(data[key]['regionId']),
        text: data[key]['regionName'],
        label: data[key]['regionName'],
      };
      if (this.typeOf(data[key].children) == 'object' && Object.keys(data[key].children).length) {
        // if (step < deep) {
        target.children = this.deepMapCity(data[key].children, deep, ++step);
        // }
      }
      res.push(target);
    }
    return res;
  }
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

export default new DictTool();
