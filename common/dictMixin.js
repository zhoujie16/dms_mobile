const getLocalDict = () => {
  let data = this.$auth.getStorgeData('dict');
  return JSON.parse(data) || {};
}

const getLocalRegion = () => {
 let data = this.$auth.getStorgeData('region');
  return JSON.parse(data) || {};
};

import {getServiceAdvisor} from '@/api/util/index.js'

export const dictionary = {
  onLoad() {
    this.dict = getLocalDict();
    this.region = getLocalRegion();
    if (!Object.keys(this.dict).length) {
      this.SHOW_TOAST('本地数据字典被清空，请刷新当前页面!');
      // notifyAction('本地数据字典被清空，请刷新当前页面!', 'warning');
    }
  },
  methods: {
    // code -> 数据字典的 code 码
    // vals -> 需要过滤数据字典项的值
    createDictList(code, vals = []) {
      vals = Array.isArray(vals) ? vals : [vals];
      let res = [];
      if (_.isObject(this.dict) && Array.isArray(this.dict[code])) {
        res = this.dict[code].map(x => ({
          text: x.codeCnDesc,
          value: x.codeId
        }));
        res = res.filter(x => !vals.includes(x.value));
      }
      return res;
    },
    // val -> 数据的值    code -> 数据字典的 code 码
    createDictText(val, code) {
      let res = '';
      if (!val) return res;
      if (_.isObject(this.dict) && Array.isArray(this.dict[code])) {
        const target = this.dict[code].find(x => x.codeId == val);
        res = target ? target.codeCnDesc || '' : val;
      }
      return res;
    },
    createRegionList() {
      let res = [];
      if (_.isObject(this.region)) {
        for (let i in this.region) {
          res.push({
            text: this.region[i].region_name,
            value: this.region[i].region_id,
            children: this.region[i].children
          });
        }
      }
      return res;
    },
    // deep -> 数据的级数，默认全部递归 获取所有省份
    createDictRegion(deep) {
      return this.deepMapCity(this.region, deep);
    },
    // 递归构建省市区数据
    deepMapCity(data, deep = 3, step = 1) {
      const res = [];
      for (let key in data) {
        const target = {
          value: data[key]['regionCode'],
          text: data[key]['regionName']
        };
        if (_.isObject(data[key].children) && Object.keys(data[key].children).length) {
          if (step < deep) {
            target.children = this.deepMapCity(data[key].children, deep, ++step);
          }
        }
        res.push(target);
      }
      return res;
    },
    //获取服务顾问  通过code转化name
    async getServiceAdvisorName(code){
      const res = await getServiceAdvisor();
      const itemList = res.map(x => ({ value: x.EMPLOYEE_NO, text: x.EMPLOYEE_NAME }))
    }
  }
}
