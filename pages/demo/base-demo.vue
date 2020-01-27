<template>
  <MPage ref="MPage">
    <view class="page-inner">
      <button v-for="item in btnList" @click="openDemo(item.path)" class="demo-btn" type="primary">{{ item.title }}</button>
    </view>
  </MPage>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      btnList: [
        {
          title: 'scroll demo',
          path: '/pages/demo/scroll-demo'
        }
      ]
    };
  },
  methods: {
    async openDemo(path) {
      const [err, res] = await uni.navigateTo({
        url: path
      });
    }
  }
};
</script>

<style lang="scss">
.page-inner {
  padding: 20rpx;
}
.demo-btn{
  margin-bottom: 20rpx;
}
</style>
