---
pageClass: demo-page
---

# m-button

### 按钮

### Props

| 参数      | 类型    | 说明                          |
| --------- | ----------------- | ----------------------------- |
| type | String  | 按钮的样式类型，可选primary  default  warn ，默认 default |
| size | String | 按钮的大小，可选 small  default，默认 default |
| loading | Boolean | 名称前是否带 loading 图标，默认 false |
| plain | Boolean | 按钮是否镂空，背景色透明，默认 false |
| disabled | Boolean | 是否禁用，默认 false |
| block | Boolean | 是否直角边框，默认 false |

### Events

| 事件名       | 说明  | 回调参数 |
| :----------- | ----- | -------- |


### 代码演示

```vue
<!-- 按钮类型 支持 default primary warn -->

<m-button type="primary">页面主操作 Normal</m-button>

<m-button type="default">页面次要操作 Normal</m-button>

<m-button type="warn">警告类操作 Normal</m-button>

<!-- 禁用状态 -->

<m-button type="default" :disabled="true">页面次要操作 Normal</m-button>

<!-- 加载状态 -->

<m-button type="primary" :loading="true">页面主操作 Loading</m-button>

<!-- 块状按钮 -->

<m-button type="primary" :block="true">页面主操作 Normal</m-button>

<!-- 按钮尺寸 -->

<m-button type="primary" size="mini">按钮</m-button>
```



<DemoFrame src="/button"></DemoFrame>

