<template>
  <view>
    <view class="form-demo-wrap">
      <MInput v-model="cph" label="车牌号"></MInput>
      <MCheckbox label="选择顾问 单选" v-model="xsgw" :itemList="itemList_xsgw" single></MCheckbox>
      <MCheckbox label="选择顾问 多选" v-model="xsgw2" :itemList="itemList_xsgw2"></MCheckbox>
      <MCheckbox
        label="弹窗选择 单选"
        type="popup"
        v-model="xsgw3"
        :itemList="itemList_xsgw3"
        single
      ></MCheckbox>
      <MCheckbox
        label="弹窗选择 多选"
        type="popup"
        v-model="xsgw4"
        :itemList="itemList_xsgw4"
      ></MCheckbox>
      <MSwitch label="开关" v-model="value_kg"></MSwitch>
      <MDatePicker label="日期或日期范围选择" v-model="dateTest"></MDatePicker>
      <MPicker label="单独日期选择" mode="date" v-model="value_date1"></MPicker>
      <MPicker label="单独日期范围选择" mode="range" v-model="value_date2"></MPicker>
      <view class="btn-v">
        <button @click="formSubmit" type="primary" class="submit-btn">查询</button>
      </view>
    </view>
  </view>
</template>
<script>
const testArr = [
  { text: '顾问1', value: 1 },
  { text: '顾问2', value: 2 },
  { text: '顾问3', value: 3 },
  { text: '顾问4', value: 4 },
  { text: '顾问5', value: 5 },
  { text: '顾问6', value: 6 },
  { text: '顾问7', value: 7 },
  { text: '顾问8', value: 8 },
  { text: '顾问9', value: 9 },
  { text: '顾问10', value: 10 }
];
export default {
  components: {},
  data() {
    return {
      cph: 'aa',
      dateTime: [],
      xsgw: [],
      itemList_xsgw: [...testArr],
      xsgw2: [],
      itemList_xsgw2: [...testArr],
      xsgw3: [],
      itemList_xsgw3: [...testArr],
      xsgw4: [],
      itemList_xsgw4: [...testArr],
      dateTest: [],
      value_kg: false,
      value_date1: ['2020-01-06'],
      value_date2: ['2018-01-06', '2020-01-06']
    };
  },
  methods: {
    // 查询按钮事件
    formSubmit() {
      console.log('formSubmit');
      this.$emit('confirm');
    }
  }
};
</script>

<style>
.form-demo-wrap {
  position: relative;
  background-color: #ffffff;
  padding: 30rpx;
}

.btn-v {
  padding: 40rpx 0;
}

.submit-btn {
  width: 100%;
}
</style>
