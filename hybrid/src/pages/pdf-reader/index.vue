<template>
  <!-- pdf 文档阅读页面 -->
  <div class="page-wrap">
    <div id="pdf-demo"></div>
  </div>
</template>

<script>
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";

export default {
  name: "pdfh5",
  beforeMount() {
    window.document.title = "文档阅读";
  },
  mounted() {
    this.readPdf();
  },
  data() {
    return {};
  },
  methods: {
    async readPdf() {
      const pdfName = this.$route.query.pdf;
      if (!pdfName) {
        this.$toast.fail("打开文档出错");
        return;
      }
      const pdfurl = require(`../../assets/pdf/${pdfName}.pdf`);
      const pdfBlob = this.$util.dataURItoBlob(pdfurl.default);
      const pdfArrbuff = await this.$util.blobToArrayBuffer(pdfBlob);
      this.pdfh5 = new Pdfh5("#pdf-demo", {
        data: pdfArrbuff,
        renderType: "canvas"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#pdf-demo {
  width: 100vw;
  height: 100vh;
}
</style>
