//保存本地的数据字典
export default {
  //预检选择类型
  CHOOSE_TYPE_LIST: [{
    text: '保养',
    value: '保养'
  }, {
    text: '召回',
    value: '召回'
  }, {
    text: '故障检测',
    value: '故障检测'
  }, {
    text: '维修',
    value: '维修'
  }, {
    text: '事故维修',
    value: '事故维修'
  }],
  //物品清单
  ITEM_LIST:[
    {
      text: '贵重物品',
      value: '4002'
    },
    {
      text: '保养手册',
      value: '4003'
    },
    {
      text: '备胎',
      value: '4004'
    },
    {
      text: '行驶证',
      value: '4005'
    },
    {
      text: '千斤顶',
      value: '4006'
    },
    {
      text: '灭火器',
      value: '4007'
    },
    {
      text: '三角架',
      value: '4008'
    }
  ],
  // 是否录入
  RECORD_LIST:[
    {
      text: '已录入',
      value: '12781001'
    },
    {
      text: '未录入',
      value: '12781002'
    }
  ],
  //车辆检查的状态  正常  观察  异常
  CHECK_LIST:[
    {
      text: '正常',
      value: '18001001'
    },
    {
      text: '观察',
      value: '18001002'
    },
    {
      text: '异常',
      value: '18001003'
    }
  ],
  //车辆检查的状态  正常   异常
  CHECK_LIST_TWO:[
    {
      text: '正常',
      value: '18001001'
    },
    {
      text: '异常',
      value: '18001003'
    }
  ]
}
