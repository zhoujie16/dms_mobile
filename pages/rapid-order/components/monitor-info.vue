<template>
  <!-- 监控信息 -->
  <view class="monitor-info-wrap">
    <uni-nav-bar
      left-text="取消"
      right-text="确认"
      title="监控信息"
      @clickLeft="clickLeft"
      @clickRight="clickRight"
    ></uni-nav-bar>
    <view class="monitor-info-inner">
      <view class="m-tap-box">
        <view>1、该车已经15天未进厂</view>
        <view>2、该车行驶超过标准日期</view>
      </view>
       <SwiperTab height="100" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
         <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
           </swiper>
         </SwiperTab>
    </view>
  </view>
</template>

<script>
export default {
  name: '',
  data(){
    return{
      tabs: ['三包', '活动', '礼劵', '预约'],
      curIndex: 2 // 当前tab的下标
    }
  },
  methods: {
    clickLeft() {
      this.$emit('cancel');
    },
    clickRight() {
      this.$emit('confirm');
    },
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
  }
};
</script>

<style lang="scss" scoped>
  .m-tap-box{
    width: 95vw;
    margin: 20rpx auto;
    background: #D8D8D8;
    color: #6D6D72;
    padding: 20rpx;
  }
</style>
