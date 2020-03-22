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
          title: '头部表单',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/search-filter'
            });
          }
        },
        {
          title: '按钮',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/button'
            });
          }
        },
        {
          title: '表单',
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
          title: '原生导航-固定配置',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/navbar1'
            });
          }
        },
        {
          title: '原生导航-动态配置',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/navbar2'
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
          title: '左滑列表',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/swipeActionItem'
            });
          }
        },
        {
          title: '虚拟键盘',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/keyboard'
            });
          }
        },
        {
          title: '车辆检查项',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/check-item'
            });
          }
        },
        // pages/demo/ui-demo/dict
        {
          title: '字典Demo',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/dict'
            });
          }
        },
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
