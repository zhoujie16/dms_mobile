<template>
  <MPage ref="MPage" type="primary">
	  <view class="swiper-page-wrap">
    <SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
      <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
        <!--全部 -->
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <CustomerInfoPanel ref="customerInfo"></CustomerInfoPanel>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <CustomerDemandPanel ref="customerDemand"></CustomerDemandPanel>
          </scroll-view>
        </swiper-item>
        <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <VehicleFacePanel></VehicleFacePanel>
          </scroll-view>
        </swiper-item>
       <!-- <swiper-item>
          <scroll-view class="swiper-scroll-wrap" scroll-y="true">
            <DetailPreviewPanel></DetailPreviewPanel>
          </scroll-view>
        </swiper-item> -->
      </swiper>
    </SwiperTab>
	<view class="uni-flex uni-row v-footer">
	  <view class="flex-item v-border" >维修历史</view>
	  <view class="flex-item v-border" >服务活动</view>
	 
	   <view class="flex-item ">监控信息</view>
	</view>
	</view>
  </MPage>
</template>

<script>
import CustomerInfoPanel from './components/customer-info-panel.vue';
import CustomerDemandPanel from './components/customer-demand-panel.vue';
import VehicleFacePanel from './components/vehicle-face-panel.vue';
import DetailPreviewPanel from './components/detail-preview-panel.vue';//预览页面
export default {
  components: {
    CustomerInfoPanel,
    CustomerDemandPanel,
    VehicleFacePanel,
    DetailPreviewPanel
  },
  // 导航栏按钮点击事件
  onNavigationBarButtonTap(btn) {
    console.log('导航栏按钮点击事件', btn);
    this.saveOrder();
    // uni.getSubNVueById('drawer').show('slide-in-left', 200);
  },
  props: {
    height: {
      type: String,
      default: '800rpx'
    }
  },
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 70 + 'px';
    return {
      tabs: ['客户信息', '客户需求', '车身外观'],
      curIndex: 0 // 当前tab的下标
    };
  },
  watch: {},
  // 监听导航栏删选事件
  onNavigationBarButtonTap(e) {
    if (e.float == 'right') {
     // 预览
    }
  },
  methods: {
    // 轮播菜单
    swiperChange(e) {
       this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
    // 保存预检单
    async saveOrder() {
      // 他们出选择  预检单保存成功  是否进入车辆检查
      await this.$util.showLoading('正在保存...');
      await this.$sleep(1000);
      await this.$util.hideLoading();
      const [err, res] = await this.$util.showModal({
        content: '预检单保存成功，是否进入车辆检查。'
      });
      console.log([err, res]);
      if (res.confirm) {
        console.log('点击 确定');
        await uni.navigateTo({
          url: '/pages/vehicle-inspection/vehicle-detail'
        });
      } else if (res.cancel) {
        console.log('点击 取消');
        await uni.navigateBack();
      }
    }
  }
};
</script>

<style lang="scss">
	.swiper-page-wrap {
	  position: relative;
	  .v-footer {
	    position: fixed;
	    bottom: 0;
	    background-color: #fff;
	    width: 100%;
	    height: 120rpx;
	    padding: 30rpx 0;
	    .flex-item {
	      width: 33%;
	      text-align: center;
	      line-height: 60rpx;
        color: $uni-m-color-c11;
        font-size: 36rpx;
	      // line-height: 200rpx;
	    }
	    .v-border{
	      border-right: 2rpx solid $uni-m-color-c4-2;
	    }
	  }
	}
.swiper-wrap {
  // background-color: $uni-bg-color-page;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 100rpx;
  left: 0;
  height: initial;
}
.swiper-scroll-wrap {
  height: 100%;
}
.nav-right{
  color: $uni-m-color-c11;
}
</style>
