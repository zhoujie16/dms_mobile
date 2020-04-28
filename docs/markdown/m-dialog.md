---
pageClass: demo-page
---

# m-dialog

### 弹窗交互

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

弹出框组件支持函数调用。

##### 确认提示

```js
// 确认提示
const res = await this.SHOW_MODAL({
  title: '提示的标题',
  content: '提示的内容',
  showCancel: true, // 是否显示取消按钮，默认为 true
  cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
  confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
});
// 交互结果 res: cancel / confirm
console.log('showModal_res', res);
```

##### 操作菜单

```js
// 操作菜单
const res = await this.SHOW_ACTION_SHEET({
itemList: [
   { text: '选项1', value: '1' },
   { text: '选项2', value: '2' },
   { text: '选项3', value: '3' },
   { text: '选项5', value: '5' }
  ]
});
// res: cancel / item
console.log('showActionSheet', res);
```

##### Toast提示

```js
this.SHOW_TOAST('提示信息');
```

##### Loading 提示

```js
this.SHOW_LOADING('等待中...');
this.HIDE_LOADING();
```



<DemoFrame src="/m-dialog"></DemoFrame>