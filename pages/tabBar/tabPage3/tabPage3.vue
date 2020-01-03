<template>
  <!-- 报表 -->
  <view class="page-warp"><SwiperPage :fetchParams="fetchParams" height="calc(100vh)"></SwiperPage></view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import SwiperPage from '@/pages/tabBar/tabPage3/components/swiper-page.vue';

export default {
  components: {
    SwiperPage
  },
  data() {
    return {
      fetchParams: {}
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  background-color: $uni-bg-color-page;
}
.swiper-page {
  height: 600rpx;
}
.swiper-item-wrap {
  height: 100%;
}
</style>
