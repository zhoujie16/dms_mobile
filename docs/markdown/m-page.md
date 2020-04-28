---
pageClass: demo-page
---

# m-page

### 页面的最外层组件

在 paga.json 中注册的页面，都建议用这个组件包裹。
作为所有页面的基础。



### 代码

```vue
<template>
  <MPage ref="MPage">
    <view class="demo-page">
      概览页面
    </view>
  </MPage>
</template>

<style lang="scss">
.demo-page {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>

```


<DemoFrame src="/m-page"></DemoFrame>