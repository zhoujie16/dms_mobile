<!-- 表单demo -->
<template>
  <MPage ref="MPage">
    <!-- 车牌输入 -->
    <MLicense v-model="value_cph"></MLicense>
    
    <!-- 分割线 -->
    <view class="m-break-space"></view>
    
    <!-- 表单展示 -->
    <MLabel title="标题">内容</MLabel>
    
    <!-- 文本框 -->
    <MInput disabled required readonly label="文本" v-model="formData.value_1"></MInput>
    
    <MInput required label="文本" v-model="formData.value_1" after="cm"></MInput>
    
    <MInput required label="文本" v-model="formData.value_1">
      <template v-slot:after>
        <text class="m-label-after">km</text>
      </template>
    </MInput>
    
    <MInput label="文本" v-model="formData.value_1">
      <template v-slot:after>
        <text class="m-label-after">mm</text>
      </template>
    </MInput>
    
    <view class="m-break-space"></view>
    
    <!-- 文本域 -->
    <MTextArea label="文本域" v-model="formData.value_1"></MTextArea>
    
    <view class="m-break-space"></view>
    
    <MTextArea required readonly label="文本域" v-model="formData.value_1"></MTextArea>
    
    <view class="m-break-space"></view>
    
    <!-- 单选 弹窗 -->
    <MCheckbox
      label="单选 popup"
      type="popup"
      v-model="formData.value_2"
      :itemList="itemList_1"
      single
    ></MCheckbox>
    
    <!-- 单选 行内 -->
    <MCheckbox
      label="单选 inner"
      type="inner"
      v-model="formData.value_2"
      :itemList="itemList_1"
      single
    ></MCheckbox>
    
    <!-- 多选 单行 -->
    <MCheckbox
      label="多选 inner"
      type="inner"
      v-model="formData.value_21"
      :itemList="itemList_21"
    ></MCheckbox>
    
    <view class="m-break-space"></view>
    
    <!-- 多选 可折叠 -->
    <MCheckboxPanel
      label="多选 inner"
      type="inner"
      v-model="formData.value_22"
      :itemList="itemList_2"
    ></MCheckboxPanel>
    
    <view class="m-break-space"></view>
    
    <!-- 多选 不可折叠   -->
    <MCheckboxPanel
      label="多选 inner"
      type="inner"
      :isFold="false"
      v-model="formData.value_22"
      :itemList="itemList_2"
    ></MCheckboxPanel>
    
    <view class="m-break-space"></view>
    
    <!-- 多选 无标题的   -->
    <MCheckboxPanel
      label=""
      type="inner"
      :isFold="false"
      v-model="formData.value_22"
      :itemList="itemList_2"
    ></MCheckboxPanel>
    
    <view class="m-break-space"></view>
    
    <!-- 日期选择 -->
    <MPicker label="日期选择" mode="date" v-model="formData.value_date_1"></MPicker>
    
    <!-- 日期范围选择 -->
    <MPicker label="日期范围选择" mode="range" v-model="formData.value_date_2"></MPicker>
    
    <!-- 开关 -->
    <MSwitch label="开关" v-model="formData.value_3"></MSwitch>
    
    <!-- 地址选择 -->
    <MPicker label="地址选择" mode="address" v-model="formData.address"></MPicker>
    
  </MPage>
</template>

<script>
const testArr_1 = [{ text: '是', value: '1' }, { text: '否', value: '2' }];
const testArr_2 = [
  { text: '顾问1', value: '1' },
  { text: '顾问2', value: '2' },
  { text: '顾问3', value: '3' },
  { text: '顾问4', value: '4' },
  { text: '顾问5', value: '5' },
  { text: '顾问6', value: '6' },
  { text: '顾问7', value: '7' },
  { text: '顾问8', value: '8' },
  { text: '顾问9', value: '9' },
  { text: '顾问10', value: '10' }
];
const testArr_3 = [
  { text: '王', value: '1' },
  { text: '大', value: '2' },
  { text: '锤', value: '3' }
];
export default {
  mounted() {
    // #ifdef H5
    window.app = this;
    // #endif
  },
  data() {
    return {
      value_cph: '沪ADC',
      formData: {
        value_1: '',
        value_2: [],
        value_21: [],
        value_22: [],
        value_3: false,
        value_date_1: ['2020-01-06'],
        value_date_2: ['2018-01-06', '2020-01-06'],
        address: ['22030', '22061', '22062']
      },
      itemList_1: [...testArr_1],
      itemList_2: [...testArr_2],
      itemList_21: [...testArr_3]
    };
  }
};
</script>

<style lang="scss"></style>
