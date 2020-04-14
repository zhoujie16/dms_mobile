<template>
  <MPage ref="MPage">
    <view class="page-inner">
      <m-button
        block
        v-for="item in btnList"
        :key="item.title"
        @click.native="btnHandleClick(item)"
        class="demo-btn"
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
          title: '按钮',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/button'
            });
          }
        },
        {
          title: '输入框',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/form'
            });
          }
        },
        {
          title: 'Cell 单元格',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/cell'
            });
          }
        },
        {
          title: '选择',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/select'
            });
          }
        },
        {
          title: '字典Demo',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/dict'
            });
          }
        },
        {
          title: '日期时间选择',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/date-time-select'
            });
          }
        },
        {
          title: '参数校验',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/validator'
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
        // {
        //   title: 'list',
        //   clickFn: async () => {
        //     const [err, res] = await uni.navigateTo({
        //       url: '/pages/demo/ui-demo/list'
        //     });
        //   }
        // },
        {
          title: '头部表单筛选',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/search-filter'
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
          title: '车辆检查项',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/check-item'
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
              url: '/pages/demo/ui-demo/e-charts-demo'
            })
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
          title: '文档阅读器',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/doc-reader'
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
