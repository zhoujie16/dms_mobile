<!-- 表单demo -->
<template>
  <view>
    <MLabel title="标题">内容</MLabel>
    <MInput labbe="文本" v-model="formData.value_1"></MInput>
    <MInput labbe="文本" v-model="formData.value_1">
      <template v-slot:after>
        <text class="m-label-after">km</text>
      </template>
    </MInput>
    <MInput labbe="文本" v-model="formData.value_1">
      <template v-slot:after>
        <text class="m-label-after">自定义</text>
      </template>
    </MInput>
    <MCheckbox
      label="单选 popup"
      type="popup"
      v-model="formData.value_2"
      :itemList="itemList_1"
      single
    ></MCheckbox>
    <MCheckbox
      label="单选 inner"
      type="inner"
      v-model="formData.value_2"
      :itemList="itemList_1"
      single
    ></MCheckbox>
    <view class="m-break-space"></view>
    <MCheckboxPanel
      label="多选 inner"
      type="inner"
      v-model="formData.value_22"
      :itemList="itemList_2"
    ></MCheckboxPanel>
    <view class="m-break-space"></view>
    <MPicker label="日期选择" mode="date" v-model="formData.value_date_1"></MPicker>
    <MPicker label="日期范围选择" mode="range" v-model="formData.value_date_2"></MPicker>
    <MSwitch label="开关" v-model="formData.value_3"></MSwitch>
  </view>
</template>

<script>
const testArr_1 = [{ text: '是', value: 1 }, { text: '否', value: 2 }];
const testArr_2 = [
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
  data() {
    return {
      formData: {
        value_1: '',
        value_2: [],
        value_22: [],
        value_3: false,
        value_date_1: ['2020-01-06'],
        value_date_2: ['2018-01-06', '2020-01-06']
      },
      itemList_1: [...testArr_1],
      itemList_2: [...testArr_2]
    };
  }
};
</script>

<style lang="scss"></style>
