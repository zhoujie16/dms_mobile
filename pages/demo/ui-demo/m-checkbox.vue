<template>
  <MPage ref="MPage">
    <view class="m-break-space">单选</view>
    <!-- 单选 弹窗 -->
    <MCheckbox
      label="单选 弹窗"
      type="popup"
      v-model="formData.value_1"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 弹窗 必填-->
    <MCheckbox
      label="单选 弹窗 必填"
      required
      type="popup"
      v-model="formData.value_11"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 弹窗 只读-->
    <MCheckbox
      label="单选 弹窗 只读"
      readonly
      type="popup"
      v-model="formData.value_111"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 行内 -->
    <MCheckbox
      label="单选 行内"
      type="inner"
      v-model="formData.value_1"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 行内 必填-->
    <MCheckbox
      label="单选 行内 必填"
      required
      type="inner"
      v-model="formData.value_11"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 行内 只读-->
    <MCheckbox
      label="单选 行内 只读"
      readonly
      type="inner"
      v-model="formData.value_111"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <view class="m-break-space">多选</view>
    <!-- 多选 单行 -->
    <MCheckbox
      label="多选 行内"
      type="inner"
      v-model="formData.value_2"
      :itemList="itemList_3"
    ></MCheckbox>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        value_1: [],
        value_11: [],
        value_111: ['2'],
        value_2: [],
        value_3: []
      },
      itemList_1: [{ text: '是', value: '1' }, { text: '否', value: '2' }]
    };
  }
};
</script>

<style lang="scss">
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
