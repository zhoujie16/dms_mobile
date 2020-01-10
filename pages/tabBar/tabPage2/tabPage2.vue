<template>
  <view><button @click="test" type="primary">test</button></view>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    async test() {
      uni.showLoading({
        title: '正在下载文档',
        mask: true
      });
      const [err, res] = await uni.downloadFile({
        url:
          'https://www.forddms.com/APPtest/%E7%A6%8F%E7%89%B9%E4%BF%9D%E9%99%A9%E6%89%8B%E5%86%8C9-9%20V2.pdf#viewer.action=download'
      });
      uni.hideLoading();
      const filePath = res.tempFilePath;
      await uni.openDocument({
        filePath: filePath
      });
    }
  }
};
</script>

<style></style>
