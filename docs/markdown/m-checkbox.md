---
pageClass: demo-page
---

# m-checkbox

### 单行选择输入组件

### Props

| 参数     | 类型    | 说明                                             |
| -------- | ------- | ------------------------------------------------ |
| label    | String  | 标题                                             |
| v-model  | Array   | 绑定值                                           |
| type     | String  | 类型，弹窗选择 popup、内联选择 inner，默认 inner |
| border   | Boolean | 是否显示底部边框 默认 false                      |
| required | Boolean | 显示必填图标，默认 false                         |
| itemList | Array   | 选项数据                                         |
| single   | Boolean | 是否单选，默认 false                             |
| readonly | Boolean | 是否只读，默认 false                             |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
|        |      | 无       |



### 代码

```vue
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
```





<DemoFrame src="/m-checkbox"></DemoFrame>