<template>
  <MPage ref="MPage">
    <view class="m-status-bar"></view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar left-icon="arrowleft" title="内饰检查" @clickLeft="back"></uni-nav-bar>
    <view class="swiper-page-wrap">
      <SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
        <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
          <!--全部 -->
          <!-- <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <VehiclePreview></VehiclePreview>
            </scroll-view>
          </swiper-item> -->
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <InteriorCheck></InteriorCheck>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <EngineNacelle></EngineNacelle>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <ChassisRound></ChassisRound>
            </scroll-view>
          </swiper-item>
        </swiper>
      </SwiperTab>
      <!-- right -->
      <view class="v-right">
        <view class="r-box" @click="historyClick">
          <uni-icons type="refresh" size="26" color="#fff"></uni-icons>
          <view class="r-title">维修历史</view>
        </view>
        <view class="r-box" @click="remindClick">
          <uni-icons type="gear" size="26" color="#fff"></uni-icons>
          <view class="r-title">增修提醒</view>
        </view>
        <view class="r-box" @click="keyClick">
          <uni-icons type="info" size="26" color="#fff"></uni-icons>
          <view class="r-title">关键信息</view>
        </view>
      </view>
      <!-- footer -->
      <view class="uni-flex uni-row v-footer">
        <view class="flex-item1 v-border" @click="adviseClick">
          <text class="m-iconfont icon">&#xe72c;</text>
          <text class="title">预检单</text>
        </view>
        <view class="flex-item btn1 v-border" @click="previewClick">暂存</view>
        <view class="flex-item btn2">保存</view>
      </view>
      <!-- 维修历史 -->
      <uni-popup ref="history" type="bottom">
        <HistoryModel @close="closeHistory"></HistoryModel>
      </uni-popup>
      <!-- 关键信息 -->
      <uni-popup ref="popup" type="center">
        <KeyInfoModel @close="closeKey"></KeyInfoModel>
      </uni-popup>
    </view>
  </MPage>
</template>

<script>
import VehiclePreview from './components/vehicle-preview.vue';
import InteriorCheck from './components/interior-check.vue';
import EngineNacelle from './components/engine-nacelle.vue';
import ChassisRound from './components/chassis-round.vue';
import KeyInfoModel from './components/keyInfo-model.vue';
import HistoryModel from './components/history-model.vue';
export default {
  components: {
    VehiclePreview,
    InteriorCheck,
    EngineNacelle,
    ChassisRound,
    KeyInfoModel,
    HistoryModel
  },
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 40 + 'px';
    return {
      tabs: ['内饰检查', '发动机舱', '底盘四轮'],
      curIndex: 0 // 当前tab的下标
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
    // 建议
    adviseClick() {
      uni.navigateTo({
        url: `/pages/vehicle-inspection/components/advise`
      });
    },
    // 预览
    previewClick() {
      uni.navigateTo({
        url: `/pages/vehicle-inspection/components/preview`
      });
    },
    // 关键信息
    keyClick() {
      this.$refs.popup.open();
    },
    closeKey() {
      this.$refs.popup.close();
    },
    // 维修历史
    historyClick() {
      this.$refs.history.open();
    },
    closeHistory() {
      this.$refs.history.close();
    },
    //增修提醒
    remindClick() {
      uni.navigateTo({
        url: `/pages/vehicle-inspection/components/service-remind`
      });
    }
  }
};
</script>

<style lang="scss">
.swiper-page-wrap {
  position: relative;
  .v-right {
    position: fixed;
    bottom: 40vh;
    right: 0;
    height: 200rpx;
    width: 120rpx;
    .r-box {
      width: 100rpx;
      height: 100rpx;
      background:$uni-m-color-c11;
      color: #fff;
      align-items: right;
      margin-bottom: 20rpx;
      border-radius: 6rpx;
      text-align: center;
      .r-title {
        font-size: 20rpx;
        font-weight: bold;
      }
    }
  }
  .v-footer {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 120rpx;
    // line-height: 120rpx;
    // padding: 30rpx 0;
    .flex-item1 {
      flex: 0 0 150rpx;
      text-align: center;
      padding: 30rpx 0;
      .icon {
        color: $uni-m-color-c11;
        font-size: 42rpx;
      }
      .title {
        display: block;
        color: $uni-m-color-c2;
        font-size: 26rpx;
      }
    }
    .flex-item {
      // width: 25%;
      flex: 1;
      text-align: center;
      line-height: 60rpx;
      // line-height: 200rpx;
    }
    .v-border {
      border-right: 2rpx solid $uni-m-color-c4-2;
    }
    .btn1 {
      line-height: 120rpx;
      color: $uni-m-color-c11;
      font-size: $uni-m-font-size-f2;
    }
    .btn2 {
      line-height: 120rpx;
      background-color: $uni-m-color-c11;
      color: $uni-m-color-cwhite;
      font-size: $uni-m-font-size-f2;
    }
  }
}
.swiper-wrap {
  // background-color: $uni-bg-color-page;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: initial;
}
.swiper-scroll-wrap {
  height: 100%;
}
</style>
