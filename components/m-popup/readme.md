## m-popup

弹窗组件，分中间弹出和底部弹出，

### 参数

- title { String }
- type { String }  弹出方式， 可选值 center(默认) , bottom

### 代码

```vue
<MPopup ref="mPopup1" type="center" title="标题1">
	<!-- 弹窗内容 -->
</MPopup>

<MPopup ref="mPopup2" type="bottom" title="标题2">
	<!-- 弹窗内容 -->
</MPopup>
```

```js
// 打开 关闭方法
this.$refs.mPopup.open();  // 打开
this.$refs.mPopup.close(); // 关闭
```