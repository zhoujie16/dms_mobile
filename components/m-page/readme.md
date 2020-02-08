## m-page  页面的最外层组件

在 paga.json 中注册的页面，都要用这个组件包裹。作为所有页面的基类。

### 参数

- type {String}  页面背景色，可选值  default primary



### 代码

```vue
<template>
  <MPage ref="MPage">
    <!-- 页面内容区域 -->
  </MPage>
</template>
```

