<template>
  <MPage ref="MPage">
    <SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
      <swiper style="height: 100%;" class="swiper-wrap" :current="curIndex" @change="swiperChange">
        
        <swiper-item>
          <view class="demo-page page-0">0</view>
        </swiper-item>
        
        <swiper-item>
          <view class="demo-page page-1">1</view>
        </swiper-item>
        
        <swiper-item>
          <view class="demo-page page-2">2</view>
        </swiper-item>
        
      </swiper>
    </SwiperTab>
  </MPage>
</template>

<script>
export default {
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 40 + 'px';
    return {
      tabs: ['类型一', '类型二', '类型三'],
      curIndex: 0
    };
  },
  methods: {
    // 轮播菜单
    swiperChange(e) {
      const current = e.detail.current;
      this.changeTab(current);
      // curIndex = 2 的页面不允许进入
      if (current === 2) { 
        this.$nextTick(() => {
          this.changeTab(current - 1);
        });
      }
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    }
  }
};
</script>

<style lang="scss">
.demo-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.page-0 {
    background-color: #f2f6fc;
  }
  &.page-1 {
    background-color: #ebeef5;
  }
  &.page-2 {
    background-color: #e4e7ed;
  }
}
</style>
