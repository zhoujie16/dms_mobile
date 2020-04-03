<template>
  <MPage ref="MPage">
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
              <InteriorCheck
                ref="interiorCheck"
                :vehicleCheckDetailResultVos="vehicleCheckDetailResultVos"
              ></InteriorCheck>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <EngineNacelle
                ref="engineNacelle"
                :vehicleCheckDetailResultVos2="vehicleCheckDetailResultVos2"
              ></EngineNacelle>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view class="swiper-scroll-wrap" scroll-y="true">
              <ChassisRound
                ref="chassisRound"
                :vehicleCheckDetailResultVos3="vehicleCheckDetailResultVos3"
              ></ChassisRound>
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
        <view class="r-box" @click="amonitorClick">
          <uni-icons type="info" size="26" color="#fff"></uni-icons>
          <view class="r-title">监控信息</view>
        </view>
      </view>
      <!-- footer -->
      <view class="uni-flex uni-row v-footer">
        <view class="flex-item1 v-border" @click="adviseClick">
          <text class="m-iconfont icon">&#xe72c;</text>
          <text class="title">预检单</text>
        </view>
        <view class="flex-item btn1 v-border" @click="previewClick">暂存</view>
        <view class="flex-item btn2" @click="saveClick">保存</view>
      </view>
      <!-- 维修历史 -->
      <MPopup ref="mPopup_history" type="bottom" title="维修历史">
        <HistoryModel></HistoryModel>
      </MPopup>
      <!-- 监控信息 -->
      <MPopup ref="mPopup_amonitor_info" type="bottom" title="监控信息">
        <AmonitorInfo></AmonitorInfo>
      </MPopup>
    </view>
  </MPage>
</template>

<script>
import { saveVehicleCheckDetail, queryVehicleCheckDetail } from '@/api/vehicle-inspection/index.js';

// import VehiclePreview from './components/vehicle-preview.vue';
import InteriorCheck from './components/interior-check.vue';
import EngineNacelle from './components/engine-nacelle.vue';
import ChassisRound from './components/chassis-round.vue';
import AmonitorInfo from '@/pages/customer-reception/components/monitor-info.vue'; //监控信息
import HistoryModel from '@/pages/customer-reception/components/history-model.vue'; //维修历史
export default {
  components: {
    InteriorCheck,
    EngineNacelle,
    ChassisRound,
    AmonitorInfo,
    HistoryModel
  },
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 40 + 'px';
    return {
      tabs: ['内饰检查', '发动机舱', '底盘四轮'],
      curIndex: 0, // 当前tab的下标
      roNo: '',
      yjNo: '',
      vehicleCheckDetailResultVos: [],
      vehicleCheckDetailResultVos2: [],
      vehicleCheckDetailResultVos3: []
    };
  },
  onLoad: function(option) {
    this.roNo = option.roNo=="null"?'':option.roNo;
    this.yjNo = option.yjNo;
    this.queryCheckDetail();
  },
  methods: {
    //根据工单号或者预约单号查询数据
    async queryCheckDetail() {
      let params = {
        roNo: this.roNo,
        yjNo: this.yjNo
      };
      let [status, res] = await queryVehicleCheckDetail(params);
      console.log(res.data, '查询数据');
      this.vehicleCheckDetailResultVos = res.data.vehicleCheckDetailResultVos;
      this.vehicleCheckDetailResultVos2 = res.data.vehicleCheckDetailResultVos2;
      this.vehicleCheckDetailResultVos3 = res.data.vehicleCheckDetailResultVos3;
    },
    // 轮播菜单
    swiperChange(e) {
      this.curIndex = e.detail.current;
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    },
    //保存
    async saveClick() {
      // contentCode fileBaseUrl  remark3 statusCode videoUrl
      let bodyAppearanceInfoList = [];
      //内饰检查组合数据
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.interiorCheck.formData,
        bodyAppearanceInfoList
      );
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.interiorCheck.formData1,
        bodyAppearanceInfoList
      );

      //发动机舱组合数据
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.engineNacelle.formData,
        bodyAppearanceInfoList
      );
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.engineNacelle.formData1,
        bodyAppearanceInfoList
      );
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.engineNacelle.formData2,
        bodyAppearanceInfoList
      );
      //底盘四轮组合数据
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.chassisRound.formData,
        bodyAppearanceInfoList
      );
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.chassisRound.formData1,
        bodyAppearanceInfoList
      );
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.chassisRound.formData2,
        bodyAppearanceInfoList
      );
      bodyAppearanceInfoList = this.makeUpWays(
        this.$refs.chassisRound.formData3,
        bodyAppearanceInfoList
      );

      //请求后台
      let params = {
        bodyAppearanceInfoList: bodyAppearanceInfoList,
        roNo: this.roNo,
        yjNo: this.yjNo
      };
      console.log('---11---', params);
      let [status, res] = await saveVehicleCheckDetail(params);
      if (res.resultCode == 200) {
        const res1 = await this.SHOW_MODAL({
          title: '保存成功',
          content: '',
          showCancel: false, // 是否显示取消按钮，默认为 true
          confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
        });
        console.log(res1);
      }

      // console.log(JSON.stringify(bodyAppearanceInfoList))
    },
    //组合后台数据
    makeUpWays(oldArr, newArr) {
      oldArr.forEach(x => {
        if (x.value) {
          newArr.push({
            contentCode: x.fieldName,
            fileBaseUrl: x.photoPath,
            remark3: '',
            statusCode: x.value,
            videoUrl: x.videoUrl
          });
        } else {
          if (x.remark3) {
            newArr.push({
              contentCode: x.fieldName,
              fileBaseUrl: '',
              remark3: x.remark3,
              statusCode: '',
              videoUrl: ''
            });
          }
        }
      });
      return newArr;
    },
    // 建议
    adviseClick() {
      console.log("预约单号",this.yjNo)
      if(this.yjNo){
        uni.navigateTo({
          url: `/pages/customer-reception/customer-detail?yjNo=${this.yjNo}`
        });
      }
      
      // uni.navigateTo({
      //   url: `/pages/vehicle-inspection/components/advise`
      // });
    },
    // 预览
    previewClick() {
      uni.navigateTo({
        url: `/pages/vehicle-inspection/components/preview`
      });
    },
    // 关键信息
    amonitorClick() {
      this.$refs.mPopup_amonitor_info.open();
    },

    // 维修历史
    historyClick() {
      this.$refs.mPopup_history.open();
    },

    //增修提醒
    remindClick() {
      uni.navigateTo({
        url: `/pages/vehicle-inspection/service-remind?roNo=${this.roNo}&&yjNo=${this.yjNo}`
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
      background: $uni-m-color-c11;
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
