<template>
  <div class="demo-frame">
    <iframe
      class="demo-frame_inner"
      :src="srcUrl"
      width="375"
      height="667"
      scrolling="no"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "DemoFrame",
  props: {
    src: {
      type: String,
      default: "/ui-demo"
    }
  },
  computed: {
    srcUrl() {
      return this.baseUrl + this.src;
    }
  },
  mounted() {},
  data() {
    return {
      // baseUrl: "http://dms-mob-demo.zhoujie16.cn/#/pages/demo/ui-demo",
      baseUrl: "http://127.0.0.1:8081/#/pages/demo/ui-demo"
    };
  },
  methods: {}
};
</script>

<style scoped>
.demo-frame {
  position: fixed;
  right: 2rem;
  top: 5rem;
  border: solid 1px #dddddd;
  border-radius: 6px;
  overflow: hidden;
  transform: scale(0.8) translate(0px, -50px);
  box-shadow: #ebedf0 0 4px 12px;
}

@media (max-width: 750px) {
  .demo-frame {
    display: none;
  }
}
</style>
