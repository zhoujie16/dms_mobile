<template>
  <div class="page-wrap">
    <div id="pdf-demo"></div>
  </div>
</template>

<script>
import Pdfh5 from "pdfh5";

export default {
  name: "",
  mounted() {
    this.readPdf();
  },
  data() {
    return {};
  },
  methods: {
    async readPdf() {
      const pdfurl = require("../../assets/pdf/demo.pdf");
      const pdfBlob = this.$util.dataURItoBlob(pdfurl.default);
      const pdfArrbuff = await this.$util.blobToArrayBuffer(pdfBlob);
      this.pdfh5 = new Pdfh5("#pdf-demo", {
        data: pdfArrbuff
      });
    }
  }
};
</script>

<style scoped lang="scss">
// @import "pdfh5/css/pdfh5.css";
</style>
