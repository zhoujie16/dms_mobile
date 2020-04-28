---
pageClass: guide-page
---

# navbar

### 导航栏

支持文件配置方式 和 js动态配置方式

### 文件配置

在 page.json中配置; 推荐这种方法，当page.json 配置不满则需求时使用 plus api 方式。



### JS动态配置

用 plus api 设置，当page.json 配置不满则需求时使用这种方式。

```js
// 设置原生页面的相关API
// 当page.json 配置不满则需求是使用这种方式
// 更多配置见文档: https://www.html5plus.org/doc/zh_cn/webview.html
const webView = this.$mp.page.$getAppWebview();
webView.setStyle({
titleNView: {
  backgroundColor: '#1371f7',
  titleColor: '#FFFFFF',
  titleText: '新标题',
  backgroundImage: 'linear-gradient(to right, #41c5ff, #1371f7)',
  buttons: [
    {
      fontSrc: '/static/fonts/iconfont.ttf',
      type: 'none',
      text: '\ue721',
      width: '50px',
      fontSize: '22px',
      float: 'right',
      onclick: () => {
        console.log('按钮点击了');
      }
    }
   ]
 }
});
```

