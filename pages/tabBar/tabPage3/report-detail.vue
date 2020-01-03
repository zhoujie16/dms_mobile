<template>
  <view class="page-warp">
    
  </view>
</template>

<script>
export default {
  onLoad: function(option) {
    //option为object类型，会序列化上个页面传递的参数
    console.log(option.type); //打印出上个页面传递的参数。
  },
  data() {
    return {
      
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
