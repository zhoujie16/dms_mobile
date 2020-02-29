<template>
  <MPage ref="MPage" class="page-inner">
    <m-button class="demo-btn" block type="primary" @click.native="showModal_1">标准的</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showModal_2">无取消</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showActionSheet">
      showActionSheet
    </m-button>
  </MPage>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async showModal_1() {
      // js 调用方式
      const res = await this.SHOW_MODAL({
        title: '提示的标题',
        content: '提示的内容',
        showCancel: true, // 是否显示取消按钮，默认为 true
        cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      // 交互结果
      console.log('showModal_res', res);
      await uni.showToast({
        title: `${res}`,
        icon: 'none'
      });
    },
    async showModal_2() {
      // js 调用方式
      const res = await this.SHOW_MODAL({
        title: '提示的标题',
        content: '提示的内容',
        showCancel: false, // 是否显示取消按钮，默认为 true
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      // 交互结果
      console.log('showModal_res', res);
      await uni.showToast({
        title: `${res}`,
        icon: 'none'
      });
    },
    async showActionSheet() {
      const res = await this.SHOW_ACTION_SHEET({
        itemList: [{ text: '1', value: 1 }, { text: '2', value: 2 }, { text: '3', value: 3 }]
      });
      console.log('showActionSheet', res);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-inner {
  padding: 20rpx;
}
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
