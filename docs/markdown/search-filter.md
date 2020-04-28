---
pageClass: demo-page
---

# search-filter

### 顶部抽屉式表单组件

### Slots

| 名称  | 说明       |
| ----- | ---------- |
| panel | 自定义面板 |
| form  | 弹窗的表单 |



### 方法

通过 `ref` 获取组件调用方法

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- |
| open   | 打开 | 无   |
| close  | 关闭 | 无   |



### 代码

```vue
<template>
  <MPage ref="MPage">
    <!-- 表单组件 -->
    <search-filter ref="searchFilter">
      <!-- 自定义面板 -->
      <template v-slot:panel>
        <view class="m-flex m-justify-center m-align-center">自定义区域</view>
      </template>
      <!-- 弹窗的表单 -->
      <template v-slot:form>
        <FormDemo @confirm="formConfirm"></FormDemo>
      </template>
    </search-filter>
  </MPage>
</template>

<script>
import FormDemo from './../components/form-demo';

export default {
  components: {
    FormDemo
  },
  data() {
    return {};
  },
  onNavigationBarButtonTap(btn) {
    console.log('导航栏按钮点击事件', btn);
    this.$refs.searchFilter.open();
  },
  methods: {
    // 确定按钮事件
    async formConfirm(data) {
      console.log('formConfirm');
      this.$refs.searchFilter.close();
    }
  }
};
</script>

```



<DemoFrame src="/search-filter"></DemoFrame>