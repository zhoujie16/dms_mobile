<script>
/**
 * 要封装的模块
 * 发送请求
 * 下拉刷新 下拉加载
 * 离线数据存储 键值对 & 字典
 *
 */
export default {
  // 声明全局变量 getApp().globalData.text = 'test'
  globalData: {
    text: 'text'
  },
  onLaunch: function() {
    console.log('App Launch');
    // #ifdef H5
    window.app = this;
    // #endif
  },
  onShow: function() {
    console.log('App Show');
  },
  onHide: function() {
    console.log('App Hide');
  },
  onError(err) {
    console.log('error', err);
  }
};
</script>

<style>
/*每个页面公共css */
/* #ifndef APP-PLUS-NVUE */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import './common/uni-ui/uni.css';
@import './common/common.scss';
/* #endif*/
</style>
