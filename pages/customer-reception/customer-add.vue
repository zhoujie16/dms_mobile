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
              <VehicleFacePanel ref="vehicleFace"></VehicleFacePanel>
            </scroll-view>
          </swiper-item>
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
import AmonitorInfo from '@/pages/customer-reception/components/monitor-info.vue'; //监控信息
import HistoryModel from '@/pages/customer-reception/components/history-model.vue'; //维修历史
import ServiceActivity from '@/pages/customer-reception/components/service-activity.vue'; //维修历史

export default {
  components: {
    CustomerInfoPanel,
    CustomerDemandPanel,
    VehicleFacePanel,
    AmonitorInfo,
    HistoryModel,
    ServiceActivity
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
      isMove: false,
      isPreview: true //是否预览
    };
  },
  onLoad() {
    const webView = this.$mp.page.$getAppWebview();
    webView.setTitleNViewButtonStyle(0, {
      width: '0px'
    });
  },
  watch: {
    curIndex(val) {
      const webView = this.$mp.page.$getAppWebview();
      if (val == 2) {
        webView.setTitleNViewButtonStyle(0, {
          width: '50px'
        });
      } else {
        webView.setTitleNViewButtonStyle(0, {
          width: '0px'
        });
      }
    }
  },
  // 监听导航栏删选事件
  onNavigationBarButtonTap(e) {
    console.log(e);
    if (e.index == 0) {
      // 预览
      if (this.isPreview) {
        this.previewClick();
      } else {
        this.SHOW_TOAST('请输入必填项');
      }
    }
  },
  methods: {
    stoptouchMove() {
      return this.isMove;
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
      console.log('-----', this.$refs.customerInfo.formData.license);
      if (this.$refs.customerInfo.formData.license) {
        this.curIndex = i;
        this.isMove = false;
      } else {
        this.isMove = true;
      }
    },
    previewClick() {
      let params = {
        license: this.$refs.customerInfo.formData.license,
        vin: this.$refs.customerInfo.formData.vin,
        model: this.$refs.customerInfo.formData.model[0],
        ownerName: this.$refs.customerInfo.formData.ownerName,
        phone: this.$refs.customerInfo.formData.phone,
        eMail: this.$refs.customerInfo.formData.eMail,
        contactorName: this.$refs.customerInfo.formData.contactorName,
        contactorPhone: this.$refs.customerInfo.formData.contactorPhone,
        inMileage: this.$refs.customerInfo.formData.inMileage,
        firstInDate: this.$refs.customerInfo.formData.firstInDate,
        salesDate: this.$refs.customerInfo.formData.salesDate,
        address: this.$refs.customerInfo.formData.address,
        serviceAdvisor: this.$refs.customerInfo.formData.serviceAdvisor[0],
        remark2:this.$refs.customerDemand.formData.remark2,
        inReason:this.$refs.customerDemand.formData.inReason[0],
        contentCodes:this.$refs.vehicleFace.formData.contentCodes
      };
      uni.navigateTo({
        url: `/pages/customer-reception/customer-detail?previewOrder=${encodeURIComponent(
          JSON.stringify(params)
        )}&fromPage=preview`
      });
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
