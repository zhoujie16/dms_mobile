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
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_1">单选</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_2">多选</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_3">选择日期</m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_4">
      选择日期范围
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_5">
      选择日期时间
    </m-button>
    <m-button class="demo-btn" block type="primary" @click.native="showPicker_6">选择时间</m-button>
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
    showToast() {
      this.SHOW_TOAST('提示信息');
    },
    async showWaiting() {
      await this.SHOW_LOADING('等待中...');
      await this.$sleep(2000);
      await this.HIDE_LOADING();
    },
    async showActionSheet() {
      const res = await this.SHOW_ACTION_SHEET({
        itemList: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' },
          { text: '4', value: '4' },
          { text: '5', value: '5' }
        ]
      });
      console.log('showActionSheet', res);
    },
    async showPicker_1() {
      const res = await this.SHOW_PICKER({
        single: true,
        itemList: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' },
          { text: '4', value: '4' },
          { text: '5', value: '5' }
        ],
        value: ['3']
      });
      console.log('SHOW_PICKER', res);
      await uni.showToast({
        title: JSON.stringify(res),
        icon: 'none'
      });
    },
    async showPicker_2() {
      await uni.showToast({
        title: '还没写好',
        icon: 'none'
      });
    },
    // 日期选择
    async showPicker_3() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'date'
      });
      await uni.showToast({
        title: JSON.stringify(res),
        icon: 'none'
      });
    },
    // 时间范围选择
    async showPicker_4() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'range'
      });
      await uni.showToast({
        title: JSON.stringify(res),
        icon: 'none'
      });
    },
    // 日期时间
    async showPicker_5() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'dateTime'
      });
      await uni.showToast({
        title: JSON.stringify(res),
        icon: 'none'
      });
    },
    // 选择时间
    async showPicker_6() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'time'
      });
      await uni.showToast({
        title: JSON.stringify(res),
        icon: 'none'
      });
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
