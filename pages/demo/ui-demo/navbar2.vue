<!-- 导航栏 demo -->
<template>
  <MPage ref="MPage">
    <view class="page-body">
      <view>这种导航是在界面中用 plus api 设置</view>
      <view>当page.json 配置不满则需求是使用这种方式</view>
    </view>
    <MInput label="测试" v-model="text"></MInput>
  </MPage>
</template>

<script>
export default {
  onReady() {
    this.setNavStyle();
  },
  data() {
    return {
      text: ''
    };
  },
  methods: {
    // 设置导航栏样式
    setNavStyle() {
      // 设置原生页面的相关API
      // 当page.json 配置不满则需求是使用这种方式
      // 耕读欧配置见文档: https://www.html5plus.org/doc/zh_cn/webview.html
      const webView = this.$mp.page.$getAppWebview();
      webView.setStyle({
        titleNView: {
          backgroundColor: '#1371f7',
          titleColor: '#FFFFFF',
          titleText: '新标题',
          backgroundImage: 'linear-gradient(to right, #41c5ff, #1371f7)', // 渐变只有2.6.3+版本支持  等一段时间吧
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
    }
  }
};
</script>

<style lang="scss">
.page-body {
  height: 150vh;
  background: linear-gradient(to bottom, #1371f7, #41c5ff);
}
</style>
