<!-- 表单demo -->
<template>
  <view>
    <!-- 表单部分 可滚动 -->
    <scroll-view class="scroll-view-h" :style="{ maxHeight: '900rpx' }" scroll-y>
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
      <!-- <MPicker label="日期选择" mode="date" v-model="formData.value_date_1"></MPicker>
      <MPicker label="日期范围选择" mode="range" v-model="formData.value_date_2"></MPicker> -->
      <MSwitch label="开关" v-model="formData.value_3"></MSwitch>
    </scroll-view>
    <!-- 重置选择按钮 位置固定 -->
    <MFormBottom @confirm="formConfirm" @reset="formReset"></MFormBottom>
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
  mounted() {
    // 备份初始值 用于重置
    this.formData_reset = { ...this.formData };
  },
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
  },
  methods: {
    formConfirm() {
      console.log('确定按钮 事件', this.formData);
      this.$emit('confirm', this.formData);
    },
    formReset() {
      console.log('重置按钮 事件');
      // 这里修改 formData 为备份的初始值
      this.formData = { ...this.formData_reset };
    }
  }
};
</script>

<style lang="scss"></style>
