<template>
  <MPage ref="MPage" class="page-inner">
    <m-button class="demo-btn" block type="primary" @click.native="showModal_1">标准的</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showModal_2">无取消</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showActionSheet">
      showActionSheet
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showToast">
      显示提示信息
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showWaiting">
      显示等待提示
    </m-button>
  </MPage>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /*
      显示模态弹窗交互
      参数: 
      title: '提示的标题',
      content: '提示的内容',
      showCancel: true, // 是否显示取消按钮，默认为 true
      cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
      confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      返回:
      cancel / confirm
    */
    async showModal_1() {
      // js 调用方式
      /**
       * 确认提示
       */
      const res = await this.SHOW_MODAL({
        title: '提示的标题',
        content: '提示的内容',
        showCancel: true, // 是否显示取消按钮，默认为 true
        cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      // 交互结果 cancel / confirm
      console.log('showModal_res', res);
      this.SHOW_TOAST(`${res}`);
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
      this.SHOW_TOAST(`${res}`);
    },
    /**
     * 显示提示信息
     */
    showToast() {
      this.SHOW_TOAST('提示信息');
    },
    /**
     * 显示等待提示
     */
    async showWaiting() {
      await this.SHOW_LOADING('等待中...');
      await this.$sleep(2000);
      await this.HIDE_LOADING();
    },
    /*
      显示操作菜单
      参数:
      itemList: [{ text: '1', value: 1 }, { text: '2', value: 2 }, { text: '3', value: 3 }]
      返回:
      cancel / item
    */
    async showActionSheet() {
      const res = await this.SHOW_ACTION_SHEET({
        itemList: [
          { text: '选项1', value: '1' },
          { text: '选项2', value: '2' },
          { text: '选项3', value: '3' },
          { text: '选项5', value: '5' }
        ]
      });
      console.log('showActionSheet', res);
      this.SHOW_TOAST(JSON.stringify(res));
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
