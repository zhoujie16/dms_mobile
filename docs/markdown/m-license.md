---
pageClass: demo-page
---

# m-license

### 车牌号

### Props

| 参数      | 类型    | 说明                          |
| --------- | ----------------- | ----------------------------- |
| v-model | String  | 输入框的初始内容 |
| searchType | String | 车牌号筛选形式，可选 search，默认 search |
| required | Boolean | 必填图标 默认 false |
| readonly | Boolean | 是否只读 默认 false |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
|        |      | 无       |



### 代码

```vue
<template>
  <MPage ref="MPage">
    <view class="m-break-space">基础用法</view>
    <MLicense v-model="value_cph_1"></MLicense>

    <view class="m-break-space">必填</view>
    <MLicense required v-model="value_cph_2"></MLicense>

    <view class="m-break-space">只读</view>
    <MLicense readonly v-model="value_cph_3"></MLicense>
    
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      value_cph_1: '',
      value_cph_2: '',
      value_cph_3: '沪ADC520'
    };
  }
};
</script>

```

<DemoFrame src="/m-license"></DemoFrame>