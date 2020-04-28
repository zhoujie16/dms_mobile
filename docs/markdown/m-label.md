---
pageClass: demo-page
---

# m-label

### 单元格组件

### Props

| 参数      | 类型    | 说明                          |
| --------- | ----------------- | ----------------------------- |
| label     | String  | 标题                          |
| required  | Boolean | 必填图标 默认 false           |
| border    | Boolean | 是否显示底部边框 默认 false   |
| icon      | String  | 左边图标路径                  |
| isLink    | Boolean | 是否显示右侧小箭头 默认 false |
| unit      | String  | 右侧单位显示                  |
| rightIcon | String  | 右侧图标路径                  |

### Events

| 事件名         | 说明             | 回调参数 |
| -------------- | ---------------- | -------- |
| rightIconClick | 右侧图标点击事件 | 无       |



### 代码

```vue
<template>
  <!-- Cell 单元格 -->
  <MPage ref="MPage">
    <!-- 基础用法 -->
    <view class="m-break-space">基础用法</view>

    <MLabel label="单元格">内容</MLabel>

    <!-- 单位显示 -->
    <view class="m-break-space">单位显示</view>

    <MLabel label="单元格" unit="cm">内容</MLabel>

    <!-- 展示箭头 -->
    <view class="m-break-space">展示箭头</view>

    <MLabel label="单元格" is-link>内容</MLabel>

    <!-- 展示图标 -->
    <view class="m-break-space">展示图标</view>

    <MLabel label="单元格" icon="/static/image/dianhua2.svg">内容</MLabel>

    <MLabel
      label="单元格"
      icon="/static/image/dianhua2.svg"
      right-icon="/static/image/dianhua2.svg"
      @rightIconClick="rightIconClick"
    >
      内容
    </MLabel>
  </MPage>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    rightIconClick() {
      console.log('点击了按钮');
    }
  }
};
</script>

```



<DemoFrame src="/m-label"></DemoFrame>

