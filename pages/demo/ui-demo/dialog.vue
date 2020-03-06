<template>
  <MPage ref="MPage" class="page-inner">
    <m-button class="demo-btn" block type="primary" @click.native="showModal_1">标准的</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showModal_2">无取消</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showActionSheet">
      showActionSheet
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showToast">
      显示提示信息
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showWaiting">
      显示等待提示
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_1">单选</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_2">多选</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_date">
      选择日期
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_yearMonth">
      选择年月
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_range">
      选择日期范围
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_dateTime">
      选择日期时间
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_time">
      选择时间
    </m-button>
  </MPage>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /*
      显示模态弹窗交互
      参数: 
      title: '提示的标题',
      content: '提示的内容',
      showCancel: true, // 是否显示取消按钮，默认为 true
      cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
      confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      返回:
      cancel / confirm
    */
    async showModal_1() {
      // js 调用方式
      const res = await this.SHOW_MODAL({
        title: '提示的标题',
        content: '提示的内容',
        showCancel: true, // 是否显示取消按钮，默认为 true
        cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      // 交互结果
      console.log('showModal_res', res);
      this.SHOW_TOAST(`${res}`);
    },
    async showModal_2() {
      // js 调用方式
      const res = await this.SHOW_MODAL({
        title: '提示的标题',
        content: '提示的内容',
        showCancel: false, // 是否显示取消按钮，默认为 true
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      // 交互结果
      console.log('showModal_res', res);
      this.SHOW_TOAST(`${res}`);
    },
    /**
     * 显示提示信息
     */
    showToast() {
      this.SHOW_TOAST('提示信息');
    },
    /**
     * 显示等待提示
     */
    async showWaiting() {
      await this.SHOW_LOADING('等待中...');
      await this.$sleep(2000);
      await this.HIDE_LOADING();
    },
    /*
      显示操作菜单
      参数:
      itemList: [{ text: '1', value: 1 }, { text: '2', value: 2 }, { text: '3', value: 3 }]
      返回:
      cancel / item
    */
    async showActionSheet() {
      const res = await this.SHOW_ACTION_SHEET({
        itemList: [
          { text: '选项1', value: '1' },
          { text: '选项2', value: '2' },
          { text: '选项3', value: '3' },
          { text: '选项4', value: '4' },
          { text: '选项5', value: '5' }
        ]
      });
      console.log('showActionSheet', res);
      this.SHOW_TOAST(JSON.stringify(res));
    },
    /**
     * 单选弹出
     * 入参:
     * single: Boolean 单选
     * itemList  数据选项数组text,value值需为字符串 [{ text: '1', value: '1' }]
     * 出参:
     * [value]
     */
    async showPicker_1() {
      const res = await this.SHOW_PICKER({
        single: true,
        itemList: [
          { text: '选项1', value: '1' },
          { text: '选项2', value: '2' },
          { text: '选项3', value: '3' },
          { text: '选项4', value: '4' },
          { text: '选项5', value: '5' }
        ],
        value: ['3']
      });
      console.log('SHOW_PICKER', res);
      this.SHOW_TOAST(JSON.stringify(res));
    },
    /**
     * 多选弹出，参数同上单选
     */
    async showPicker_2() {
      this.SHOW_TOAST('还没写好');
    },
    /**
     * 日期选择
     * 入参:
     * mode: 'date'
     * startYear  开始年份 默认2015
     * endYear  结束年份 默认2030
     * defaultVal  默认值
     * 出参:
     *   eg: ['2020-02-02']
     */
    async showPicker_date() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'date',
        startYear: '2015',
        endYear: '2021',
        defaultVal: '2020-02-02'
      });
      console.log(res);
      this.SHOW_TOAST(JSON.stringify(res));
    },
    /**
     * 年月选择
     * 入参:
     * mode: 'yearMonth'
     * startYear  开始年份 默认2015
     * endYear  结束年份 默认2030
     * defaultVal  默认值
     * 出参:
     *   eg: ['2020-02']
     *
     */
    async showPicker_yearMonth() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'yearMonth',
        startYear: '2015',
        endYear: '2021',
        defaultVal: '2020-01'
      });
      console.log(res);
      this.SHOW_TOAST(JSON.stringify(res));
    },
    /**
     * 时间范围选择
     * 入参:
     * mode: 'range'
     * startYear
     * endYear
     * defaultVal  ['2018-02-02', '2020-02-02']
     * 出参:
     *    ['2018-02-02', '2020-02-02']
     */
    async showPicker_range() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'range',
        startYear: '2015',
        endYear: '2021',
        defaultVal: ['2018-02-02', '2020-02-02']
      });
      console.log(res);
      this.SHOW_TOAST(JSON.stringify(res));
    },
    /**
     * 日期和时间
     * 入参:
     * mode: 'dateTime'
     * startYear
     * endYear
     * defaultVal
     * hasSecond  是否显示秒  默认true
     * 出参:
     *    ["2020-02-02 02:02:02"]
     */
    async showPicker_dateTime() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'dateTime',
        startYear: '2015',
        endYear: '2021',
        defaultVal: '2020-02-02 02:02:02',
        hasSecond: false
      });
      console.log(res);
      this.SHOW_TOAST(JSON.stringify(res));
    },
    /**
     * 时间选择
     * 入参:
     * mode: 'time'
     * hasSecond 是否显示秒 默认true
     * 出参:
     *   [12:12:12]
     */
    async showPicker_time() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'time',
        defaultVal: '12:12:12',
        hasSecond: false
      });
      console.log(res);
      this.SHOW_TOAST(JSON.stringify(res));
    }
  }
};
</script>

<style lang="scss" scoped>
.page-inner {
  padding: 20rpx;
}
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
