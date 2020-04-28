---
pageClass: demo-page
---

# m-textarea

### 文本域组件

### Props

| 参数        | 类型    | 说明                         |
| ----------- | ------- | ---------------------------- |
| v-model     | String  | 绑定值                       |
| label       | String  | 标题                         |
| required    | Boolean | 必填图标 默认 false          |
| type        | Boolean | 是否支持语音输入，默认 false |
| placeholder | String  | 提示文字                     |
| disabled    | Boolean | 是否禁用，默认 false         |
| readonly    | Boolean | 是否只读 默认 false          |
| maxlength   | String  | 最大长度                     |

### Events

| 事件名 | 说明                 | 回调参数 |
| ------ | -------------------- | -------- |
| input  | 当键盘输入时触发     | value    |
| focus  | 输入框聚焦时触发     | event    |
| blur   | 输入框失去焦点时触发 | event    |

### 代码

```vue
<template>
  <MPage ref="MPage">
    <!-- 文本域 -->
    <MTextArea label="基本用法" v-model="formData.value_textarea" :maxlength="150"></MTextArea>
    <view class="m-break-space"></view>
    <MTextArea label="语音输入" speech v-model="formData.value_textarea"></MTextArea>
    <view class="m-break-space"></view>
    <MTextArea label="只读" readonly v-model="formData.value_readonley"></MTextArea>
    <view class="m-break-space"></view>
    <MTextArea label="禁用" disabled v-model="formData.value_readonley"></MTextArea>
  </MPage>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      formData: {
        value_readonley: '测试',
        value_textarea: ''
      }
    };
  },
  methods: {}
};
</script>
```



<DemoFrame src="/m-textarea"></DemoFrame>