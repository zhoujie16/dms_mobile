<template>
  <view><m-button @click.native="uploadMultipleTest">文件上传</m-button></view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async uploadMultipleTest() {
      const [err, res] = await this.$upload.uploadMultiple();
      console.log('图片上传结果', [err, res]);
    }
  }
};
</script>

<style lang="scss"></style>
