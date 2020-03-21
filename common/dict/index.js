/**
 * 数据字典 工具类
 * 单例，整个程序中共享一个实例 无需参与vue数据监听 性能更好
 */
let instance = null;

class DictTool {
  constructor() {
    console.log('DictTool constructor');
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  
}

export default new DictTool();
