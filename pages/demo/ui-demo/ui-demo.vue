<template>
  <MPage ref="MPage">
    <view class="page-inner">
      <m-button
        block
        v-for="item in btnList"
        :key="item.title"
        @click.native="btnHandleClick(item)"
        class="demo-btn"
        type="primary"
      >
        {{ item.title }}
      </m-button>
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
          title: 'style',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/style'
            });
          }
        },
        {
          title: 'search-filter',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/search-filter'
            });
          }
        },
        {
          title: 'button',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/button'
            });
          }
        },
        {
          title: 'form',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/form'
            });
          }
        },
        {
          title: 'list',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/list'
            });
          }
        },
        {
          title: '弹窗交互',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/dialog'
            });
          }
        },
        {
          title: '语音识别',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/speech'
            });
          }
        },
        {
          title: 'navbar',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/navbar'
            });
          }
        },
        {
          title: 'picker',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/picker'
            });
          }
        },
        {
          title: 'tabs',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/tabs'
            });
          }
        },
        {
          title: '左滑',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/swipeActionItem'
            });
          }
        },
        {
          title: '车牌号',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/keyWord'
            });
          }
        }
      ]
    };
  },
  methods: {
    async btnHandleClick(item) {
      item.clickFn();
    }
  }
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
