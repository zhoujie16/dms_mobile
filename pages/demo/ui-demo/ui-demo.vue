<template>
  <MPage ref="MPage">
    <view class="page-inner">
      <button v-for="item in btnList" :key="item.title" @click="btnHandleClick(item)" class="demo-btn" type="primary">
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
          title: 'style',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/style'
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
          title: 'dialog',
          clickFn: async () => {
            const [err, res] = await uni.navigateTo({
              url: '/pages/demo/ui-demo/dialog'
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
              url: '/pages/demo/ui-demo/button'
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
