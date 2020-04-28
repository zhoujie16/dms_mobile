---
pageClass: demo-page
---

# m-input

### 文本输入组件

### Props

| 参数        | 类型    | 说明                          |
| ----------- | ------- | ----------------------------- |
| label       | String  | 标题                          |
| required    | Boolean | 必填图标 默认 false           |
| border      | Boolean | 是否显示底部边框 默认 false   |
| icon        | String  | 左边图标路径                  |
| isLink      | Boolean | 是否显示右侧小箭头 默认 false |
| unit        | String  | 右侧单位显示                  |
| rightIcon   | String  | 右侧图标路径                  |
| v-model     | String  | value                         |
| type        | String  | 输入类型 可选 text 默认 text  |
| placeholder | String  | 提示文字                      |
| disabled    | Boolean | 是否禁用，默认 false          |
| readonly    | Boolean | 是否只读 默认 false           |
| maxlength   | String  | 最大长度                      |

### Events

| 事件名         | 说明                 | 回调参数 |
| -------------- | -------------------- | -------- |
| input          | 当键盘输入时触发     | value    |
| focus          | 输入框聚焦时触发     | event    |
| blur           | 输入框失去焦点时触发 | event    |
| linkClick      | 右边箭点击时触发     | event    |
| rightIconClick | 右边图标点击时触发   | event    |



### 代码

```vue
<template>
  <MPage ref="MPage">
    <!-- 文本框 -->
    <MInput label="必填" required v-model="formData.value_1"></MInput>
    <MInput label="只读" readonly v-model="formData.value_readonley"></MInput>
    <MInput label="禁用" disabled v-model="formData.value_readonley"></MInput>

    <!-- 单位显示 -->
    <MInput label="单位显示" v-model="formData.value_1" unit="cm"></MInput>

    <MInput label="单位显示" v-model="formData.value_1" unit="cm"></MInput>

    <MInput
      label="手机号"
      v-model="formData.value_1"
      right-icon="/static/image/dianhua2.svg"
    ></MInput>

    <MInput
      label="搜索"
      v-model="formData.value_1"
      right-icon="/static/image/dianhua2.svg"
    ></MInput>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        value_readonley: '测试',
        value_1: ''
      }
    };
  },
  methods: {
    linkClick() {
      console.log('linkClick');
    }
  }
};
</script>
```





<DemoFrame src="/m-input"></DemoFrame>

