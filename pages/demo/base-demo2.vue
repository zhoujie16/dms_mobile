<template>
  <view>
    <button @click="showPopup1" type="primary">MPopup center</button>
    <button @click="showPopup2" type="primary">MPopup bottom</button>
    <button @click="showPopup3" type="primary">MPicker 日期</button>
    <button @click="showPopup4" type="primary">MPicker 日期区间</button>
    <!--  -->
    <MPopup ref="mPopup1" type="center" title="标题1">弹窗内容 center</MPopup>
    <MPopup ref="mPopup2" type="bottom" title="标题2">弹窗内容 bottom</MPopup>
    <MPicker ref="MPicker"></MPicker>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showPopup1() {
      this.$refs.mPopup1.open();
    },
    showPopup2() {
      this.$refs.mPopup2.open();
    },
    async showPopup3() {
      //  日期选择
      const res_p = await this.$refs.MPicker.showPicker({
        mode: 'date',
        startYear: '2017',
        endYear: '2010',
        defaultVal: '2020-01-02'
      });
      console.log('res_p', res_p);
    },
    async showPopup4() {
      const res_p = await this.$refs.MPicker.showPicker({
        mode: 'range',
        startYear: '2017',
        endYear: '2010',
        defaultVal: ['2019-12-30', '2020-01-07']
      });
      console.log('res_p', res_p);
    }
  }
};
</script>

<style lang="scss"></style>
