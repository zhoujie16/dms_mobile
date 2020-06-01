<template>
  <MPage ref="MPage" class="page-inner">
    <m-button @click.native="uploadMultipleTest" class="demo-btn">文件上传</m-button>
    <view v-for="url in imgList" :key="url" class="">
      <view class="">{{url}}</view>
      <image :src="url" mode="widthFix"></image>
    </view>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    async uploadMultipleTest() {
      const [err, urlList] = await this.$upload.uploadMultiple();
      console.log('图片上传结果', [err, urlList]);
      if (err) {
        await this.SHOW_MODAL({
          title: '上传失败',
          content: '',
          showCancel: false,
          confirmText: '确定'
        });
        return;
      }
      // 则历史上传成功的url数组
      this.imgList = urlList;
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
