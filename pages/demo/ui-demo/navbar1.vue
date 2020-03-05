<!-- 导航栏 demo -->
<template>
  <MPage ref="MPage">
    <view class="page-body">
      <view>这种导航在 page.json中配置; 推荐这种方法</view>
      <view>当page.json 配置不满则需求是使用 plus api 方式</view>
    </view>
    <MInput label="测试" v-model="text"></MInput>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  }
};
</script>

<style lang="scss">
.page-body {
  height: 150vh;
  background: linear-gradient(to bottom, #1371f7, #41c5ff);
}
</style>
