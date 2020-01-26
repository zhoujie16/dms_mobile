<template>
  <view><web-view :src="webUrl"></web-view></view>
</template>

<script>
export default {
  onLoad(opt) {
    this.webUrl = decodeURIComponent(opt.url);
  },
  data() {
    return {
      webUrl: ''
    };
  },
  methods: {}
};
</script>

<style></style>
