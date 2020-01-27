<template>
  <MPage ref="MPage">
    <NavDateRangePicker @change="dateRangeChange"></NavDateRangePicker>
    <view style="padding: 20rpx;">
      <button class="test-btn" type="primary" @click="showPopup1">MPopup center</button>
      <button class="test-btn" type="primary" @click="showPopup2">MPopup bottom</button>
      <button class="test-btn" type="primary" @click="showPopupSelector">MPicker 单选</button>
      <button class="test-btn" type="primary" @click="showPopup3">MPicker 日期</button>
      <button class="test-btn" type="primary" @click="showPopup4">MPicker 日期区间</button>
      <button class="test-btn" type="primary" @click="openlocalWeb">打开本地网页</button>
      <button class="test-btn" type="primary" @click="openUChartsDemo">e-charts-H5</button>
      <button class="test-btn" type="primary" @click="openUChartsDemo2">e-charts-renderjs</button>
    </view>
    <MPopup ref="mPopup1" type="center" title="标题1">弹窗内容 center</MPopup>
    <MPopup ref="mPopup2" type="bottom" title="标题2">弹窗内容 bottom</MPopup>
  </MPage>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      baseTableData: [
        {
          name: '张三',
          age: 18,
          gender: ''
        },
        {
          name: '赵四',
          age: 16,
          gender: '女'
        },
        {
          name: '王五',
          age: 20,
          gender: '男'
        },
        {
          name: '李六',
          age: 18,
          gender: '女'
        }
      ],
      baseColumns: [
        {
          title: '姓名',
          key: 'name',
          width: 100
        },
        {
          title: '性别',
          key: 'gender',
          width: 100
        },
        {
          title: '年龄',
          key: 'age',
          width: 100
        }
      ]
    };
  },
  methods: {
    showPopup1() {
      this.$refs.mPopup1.open();
    },
    showPopup2() {
      this.$refs.mPopup2.open();
    },
    // 单选 Demo
    async showPopupSelector() {
      const res_p = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'selector',
        selectList: [{ label: '1', value: '1' }, { label: '2', value: '2' }],
        defaultVal: '2'
      });
      console.log('res_p', res_p);
    },
    async showPopup3() {
      //  日期选择
      const res_p = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'date',
        startYear: '2017',
        endYear: '2010',
        defaultVal: '2020-01-02'
      });
      console.log('res_p', res_p);
    },
    async showPopup4() {
      const res_p = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'range',
        startYear: '2017',
        endYear: '2010',
        defaultVal: ['2019-12-30', '2020-01-07']
      });
      console.log('res_p', res_p);
    },
    // 打开本地网页
    async openlocalWeb() {
      this.$util.openLocalWeb({
        url: '/hybrid/html/index.html#/about'
      });
    },
    async openUChartsDemo() {
      this.$util.openLocalWeb({
        url: '/hybrid/html/index.html#/e-charts-demo'
      });
    },
    async openUChartsDemo2() {
      uni.navigateTo({
        url: '/pages/demo/e-charts-demo'
      });
    }
  }
};
</script>

<style lang="scss">
.test-btn {
  margin-bottom: 20rpx;
}
</style>
