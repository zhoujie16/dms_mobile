<template>
  <MPage ref="MPage" type="primary">
    <view class="swiper-page-wrap">
      <SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
        <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
          <!--全部 -->
          <swiper-item @touchmove.stop="stoptouchMove">
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
        <view class="flex-item v-border" @click="historyClick">维修历史</view>
        <view class="flex-item v-border" @click="activityClick">服务活动</view>

        <view class="flex-item " @click="amonitorClick">监控信息</view>
      </view>
    </view>
    <!-- 维修历史 -->
    <MPopup ref="mPopup_history" type="bottom" title="维修历史">
      <HistoryModel></HistoryModel>
    </MPopup>
    <!-- 服务活动 -->
    <MPopup ref="mPopup_activity" type="bottom" title="服务活动">
      <ServiceActivity></ServiceActivity>
    </MPopup>
    <!-- 监控信息 -->
    <MPopup ref="mPopup_amonitor_info" type="bottom" title="监控信息">
      <AmonitorInfo></AmonitorInfo>
    </MPopup>
  </MPage>
</template>

<script>
import CustomerInfoPanel from './components/customer-info-panel.vue';
import CustomerDemandPanel from './components/customer-demand-panel.vue';
import VehicleFacePanel from './components/vehicle-face-panel.vue';
import DetailPreviewPanel from './components/detail-preview-panel.vue'; //预览页面
import AmonitorInfo from '@/pages/customer-reception/components/monitor-info.vue'; //监控信息
import HistoryModel from '@/pages/customer-reception/components/history-model.vue'; //维修历史
import ServiceActivity from '@/pages/customer-reception/components/service-activity.vue'; //维修历史

export default {
  components: {
    CustomerInfoPanel,
    CustomerDemandPanel,
    VehicleFacePanel,
    DetailPreviewPanel,
    AmonitorInfo,
    HistoryModel,
    ServiceActivity
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
      curIndex: 0, // 当前tab的下标
      isMove:false,
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
    stoptouchMove(){
      return this.isMove
    },
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
      // if(this.$refs.customerInfo.formData.license){
      //   this.curIndex = e.detail.current;
      // }
    },
    // 切换菜单
    changeTab(i) {
      // this.curIndex = i;
      console.log("-----",this.$refs.customerInfo.formData.license);
      if(this.$refs.customerInfo.formData.license){
        this.curIndex = i;
        this.isMove = false;
      }else{
        this.isMove = true;
      }
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
    },
    //维修历史
    historyClick() {
      this.$refs.mPopup_history.open();
    },
    //监控信息
    amonitorClick() {
      this.$refs.mPopup_amonitor_info.open();
    },
    //服务活动
    activityClick() {
      this.$refs.mPopup_activity.open();
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
    height: 100rpx;
    padding: 30rpx 0;
    .flex-item {
      width: 33%;
      text-align: center;
      line-height: 50rpx;
      color: $uni-m-color-c11;
      font-size: 32rpx;
      // line-height: 200rpx;
    }
    .v-border {
      border-right: 2rpx solid $uni-m-color-c4-2;
    }
  }
}
.swiper-wrap {
  // background-color: $uni-bg-color-page;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 80rpx;
  left: 0;
  height: initial;
}
.swiper-scroll-wrap {
  height: 100%;
}
.nav-right {
  color: $uni-m-color-c11;
}
</style>
