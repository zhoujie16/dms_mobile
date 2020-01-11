<template>
  <MPage ref="MPage">
    <DocCell @click.native="test"></DocCell>
  </MPage>
</template>

<script>
  import DocCell from './components/doc-cell.vue'
  
export default {
  components: {
    DocCell
  },
  data() {
    return {};
  },
  methods: {
    async test() {
      // const r = require('/static')
      // return
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
