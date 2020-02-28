<template>
  <!-- 监控信息 -->
  <view class="monitor-info-wrap">
    <view class="monitor-info-inner">
      <view class="m-tap-box">
        <view>1、该车已经15天未进厂</view>
        <view>2、该车行驶超过标准日期</view>
      </view>
      <view class="monitor-content">
        <SwiperTab height="100" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
          <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
            <swiper-item>
              <scroll-view class="swiper-scroll-wrap" scroll-y="true">
                <view class="no-record">
                   <MNothing></MNothing>
                </view>
               
              </scroll-view>
            </swiper-item>
            <swiper-item>
              <scroll-view class="swiper-scroll-wrap" scroll-y="true">
                <view class="no-record">
                   <MNothing></MNothing>
                </view>
              </scroll-view>
            </swiper-item>
            <swiper-item>
              <scroll-view class="swiper-scroll-wrap" scroll-y="true">
                <view class="no-record">
                   <MNothing></MNothing>
                </view>
              </scroll-view>
            </swiper-item>
            <swiper-item>
              <scroll-view class="swiper-scroll-wrap" scroll-y="true">
                <view class="no-record">
                   <MNothing></MNothing>
                </view>
              </scroll-view>
            </swiper-item>
            </swiper>
          </SwiperTab>
      </view>
     
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
  .monitor-info-wrap{
    background-color: #FFFFFF;
    height: calc(70vh - 80rpx);
    .monitor-info-inner{
      .m-tap-box{
        // width: 95vw;
        // margin: 20rpx auto;
        background:$uni-m-color-c16;
        color: $uni-m-color-c11;
        padding: 20rpx 30rpx;
        line-height: 50rpx;
      }
    }
    .swiper-wrap{
      min-height: 400rpx;
      .no-record{
        padding: 100rpx 0 0 0;
        
      }
    }
    
    
  }
  
  
</style>
