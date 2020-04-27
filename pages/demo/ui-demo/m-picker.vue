<!-- 表单demo -->
<template>
  <MPage ref="MPage">
    <view class="m-break-space">日期选择</view>
    <!-- 日期选择 -->
    <MPicker label="日期选择" mode="date" v-model="formData.value_date_nomal"></MPicker>
    <MPicker
      label="日期选择 必填"
      mode="date"
      required
      v-model="formData.value_date_required"
    ></MPicker>
    <MPicker
      label="日期选择 只读"
      mode="date"
      readonly
      v-model="formData.value_date_readonly"
    ></MPicker>

    <view class="m-break-space">日期范围选择</view>
    <!-- 日期范围选择 -->
    <MPicker label="日期范围选择" mode="range" v-model="formData.value_date_range"></MPicker>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        value_date_nomal: ['2020-01-06'],
        value_date_required: ['2020-01-06'],
        value_date_readonly: ['2020-01-06'],
        value_date_range: ['2018-01-06', '2020-01-06']
      }
    };
  }
};
</script>

<style lang="scss">
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
