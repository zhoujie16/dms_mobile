<template>
  <MPage ref="MPage">
    <view class="page-inner">
      <button v-for="item in btnList" @click="item.clickFn" class="demo-btn" type="primary">
        {{ item.title }}
      </button>
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
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/scroll-demo'
            });
          }
        },
        {
          title: 'swiper-tab demo',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/swiper-tab-demo'
            });
          }
        },
        {
          title: '打开本地网页',
          clickFn: async () => {
            this.$util.openLocalWeb({
              url: '/hybrid/html/index.html#/about'
            });
          }
        },
        {
          title: 'e-charts-H5',
          clickFn: async () => {
            this.$util.openLocalWeb({
              url: '/hybrid/html/index.html#/e-charts-demo'
            });
          }
        },
        {
          title: 'e-charts-renderjs',
          clickFn: async () => {
            uni.navigateTo({
              url: '/pages/demo/e-charts-demo'
            })
          }
        },
        {
          title: '长按语音识别',
          clickFn: async () => {
            uni.navigateTo({
              url: '/pages/demo/recording'
            })
          }
        },
        {
          title: '拍照',
          clickFn: async () => {
            uni.navigateTo({
              url: '/pages/demo/camera'
            })
          }
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.page-inner {
  padding: 20rpx;
}
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
