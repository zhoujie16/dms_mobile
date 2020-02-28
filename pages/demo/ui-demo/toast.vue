<template>
  <MPage ref="MPage">
    <view class="uni-padding-wrap">
      <view class="uni-btn-v">
        <m-button type="default" @click.native="toast1Tap">点击弹出默认toast</m-button>
        <m-button type="default" @click.native="toast2Tap">点击弹出设置duration的toast</m-button>
        <m-button type="default" @click.native="toast3Tap">点击弹出显示loading的toast</m-button>
        <m-button type="default" @click.native="toast4Tap">点击弹出显示自定义图片的toast</m-button>
        <m-button type="default" @click.native="toast5Tap">点击显示无图标的居底toast</m-button>
        <m-button type="default" @click.native="hideToast">点击隐藏toast</m-button>
        <m-button type="primary" @click.native="test">测试按钮</m-button>
      </view>
    </view>
  </MPage>
</template>
<script>
export default {
  data() {
    return {
      title: 'toast'
    };
  },
  methods: {
    async test() {
      console.log(this);
      this.TEST();
      // const params = {
      //   mode: 'date',
      //   startYear: '2016',
      //   endYear: '2020'
      // };
      // const [res] = await this.$root.$refs.MPage.MPickerPopup.showPicker(params);
    },
    toast1Tap: function() {
      uni.showToast({
        title: '默认'
      });
    },
    toast2Tap: function() {
      uni.showToast({
        title: 'duration 3000',
        duration: 3000
      });
    },
    toast3Tap: function() {
      uni.showToast({
        title: 'loading',
        icon: 'loading',
        duration: 5000
      });
    },
    toast4Tap: function() {
      uni.showToast({
        title: 'logo',
        image: '../../../static/uni.png'
      });
    },
    // #ifdef APP-PLUS
    toast5Tap: function() {
      uni.showToast({
        title: '显示一段轻提示',
        position: 'bottom'
      });
    },
    // #endif
    hideToast: function() {
      uni.hideToast();
    }
  }
};
</script>
