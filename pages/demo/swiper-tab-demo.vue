<template>
  <MPage ref="MPage">
    <SwiperTab 
      :height="swiperTabHeight" 
      :tabs="tabs" 
      :curIndex="curIndex" 
      @change="changeTab"
      >
      <swiper style="height: 100%;" class="swiper-wrap" :current="curIndex" @change="swiperChange">
        <swiper-item>
          <view style="background-color: #F2F6FC;height: 100%;"></view>
        </swiper-item>
        <swiper-item>
          <view style="background-color: #EBEEF5;height: 100%;"></view>
        </swiper-item>
        <swiper-item>
          <view style="background-color: #E4E7ED;height: 100%;"></view>
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
      tabs: ['tab1', 'tab2', 'tab3'],
      curIndex: 0
    };
  },
  methods: {
    // 轮播菜单
    swiperChange(e) {
      this.changeTab(e.detail.current);
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    }
  }
};
</script>

<style lang="scss"></style>
