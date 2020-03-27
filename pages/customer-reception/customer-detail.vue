<!-- 工单详情 -->
<template>
  <MPage ref="MPage">
    <view class="page-body">
      <view class="header-fixed">
        <view class="title-panel">
          <view class="title-panel-inner">
            <view class="customer-info">{{ previewInfoData.license }}</view>
            <view class="car-info">
              预检单号
              <text class="value">
                {{ previewInfoData.yjNo ? previewInfoData.yjNo : '—— 未生成 ——' }}
              </text>
            </view>
            <view class="car-info">
              工单号
              <text class="value">
                {{ previewInfoData.roNo ? previewInfoData.roNo : '—— 未生成 ——' }}
              </text>
            </view>
          </view>
          <view class="title-panel-bg"></view>
        </view>
      </view>
      <view class="content-warp">
        <CollapsePanel title="客户信息">
          <template slot="default">
            <MLabel label="vin">{{ previewInfoData.vin }}</MLabel>
            <MLabel label="车主姓名">{{ previewInfoData.ownerName }}</MLabel>
            <MLabel label="手机号">{{ previewInfoData.mobile }}</MLabel>
            <MLabel label="送修人">{{ previewInfoData.contactorName }}</MLabel>
            <MLabel label="送修人手机号">{{ previewInfoData.contactorPhone }}</MLabel>
            <MLabel label="送修人邮箱">{{ previewInfoData.contactorEMail }}</MLabel>
            <MLabel label="里程(KM)">{{ previewInfoData.inMileage }}</MLabel>
            <MLabel label="服务顾问">{{$auth.getRoleName(previewInfoData.serviceAdvisor,serviceAdvisorList) }} </MLabel>
          </template>
        </CollapsePanel>
        <CollapsePanel title="客户需求">
          <template slot="default">
            <MLabel label="需求类型">{{previewInfoData.inReason}}</MLabel>
            <MLabel label="故障描述">{{previewInfoData.remark2}}</MLabel>
          </template>
        </CollapsePanel>
        <CollapsePanel title="故障记录点">
          <template slot="default">
            <MLabel label="暂无记录"></MLabel>
          </template>
        </CollapsePanel>
        <CollapsePanel title="物品清单">
          <template slot="default">
            <MCheckboxPanel
              label="其他备注"
              type="inner"
              v-model="previewInfoData.contentCodes"
              :itemList="itemList_1"
            ></MCheckboxPanel>
          </template>
        </CollapsePanel>
      </view>
      <view class="operate" v-if="fromPage == 'detail'">
        <view class="m-break-space"></view>
        <view class="btn-box">
          <view class="btn"><m-button type="primary">车辆检查</m-button></view>
        </view>
      </view>
    </view>
    <!-- 签名信息 -->
    <MPopup ref="mPopup_sign" type="bottom" title="客户签名">
      <view class="sign-warp">
        <m-button type="primary" size="mini" @click.native="saveSign">保存签名</m-button>
        
      </view>
    </MPopup>
  </MPage>
</template>

<script>
import { savePreview, queryPreviewDetail } from '@/api/customer-reception/index.js';
import dictCode from '@/common/dictCode.js';
export default {
  components: {
    // AmonitorInfo
  },
  onLoad(option) {
    if (option.fromPage == 'preview') {
      this.previewInfoData = JSON.parse(decodeURIComponent(option.previewOrder));
      console.log('999', this.previewInfoData);
    } else {
      const webView = this.$mp.page.$getAppWebview();
      webView.setTitleNViewButtonStyle(0, {
        width: '0px'
      });
      console.log('预检单号', option.yjNo);
      this.getOrderInfo(option.yjNo);
    }
    this.fromPage = option.fromPage;
  },
  onNavigationBarButtonTap(e) {
    console.log(e);
    if (e.index == 0) {
      //保存
      this.openSign();
    }
  },
  mounted() {
    this.getServiceAdvisorList();
  },
  data() {
    return {
      previewInfoData: {},
      fromPage: 'detail',
      value_1: [1, 3, 6],
      itemList_1: this.$commonDict.ITEM_LIST,
      serviceAdvisorList:[]
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    //通过预检单号查看详情
    async getOrderInfo(yjNo) {
      const params = {
        yjNo
      };
      let [status, res] = await queryPreviewDetail(params);
      console.log(res, '预约检查详情信息');
      this.previewInfoData = res.data;
    },
    openSign() {
      this.$refs.mPopup_sign.open();
    },
    async saveSign() {
      // 他们出选择  预检单保存成功  是否进入车辆检查
      await this.$util.showLoading('正在保存...');
      await savePreview(this.previewInfoData);
      await this.$sleep(1000);
      
      await this.$util.hideLoading();
       const res = await this.SHOW_MODAL({
         title: '',
         content: '预检单保存成功，是否进入车辆检查。',
         showCancel: '取消', // 是否显示取消按钮，默认为 true
         confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
       });
       console.log(res)
      
      if (res=='confirm') {
        console.log('点击 确定');
        await uni.navigateTo({
          url: '/pages/vehicle-inspection/vehicle-detail'
        });
      } else  {
        console.log('点击 取消');
        // await uni.navigateBack();
        await uni.navigateTo({
          url: '/pages/customer-reception/customer-reception'
        });
      }
    },
    //服务顾问列表
    async getServiceAdvisorList() {
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.title-panel {
  position: relative;
  height: 260rpx;
  padding: 10rpx 30rpx 30rpx 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $uni-m-color-white-pressed;
  .title-panel-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 160rpx;
    left: 0;
    background: linear-gradient(to right, #41c5ff, #1371f7);
    z-index: 0;
  }
  .title-panel-inner {
    width: 100%;
    height: 240rpx;
    background-color: $uni-m-color-cwhite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30rpx;
    border-radius: 10rpx;
    z-index: 1;
    box-shadow: 0px 2px 5px #eeeeee;
    .customer-info {
      font-size: 34rpx;
      height: 60rpx;
      line-height: 60rpx;
    }
    .car-info {
      font-size: 30rpx;
      height: 60rpx;
      line-height: 60rpx;
      color: $uni-m-color-c2;
      .value {
        color: $uni-m-color-c1;
      }
    }
  }
}
.page-body {
  // height: calc(100vh - 128rpx);
  height: 100vh;
  overflow: auto;
  .content-warp {
    margin-top: 260rpx;
    margin-bottom: 160rpx;
  }
}
.operate {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  .btn-box {
    display: flex;
    background: $uni-m-color-cwhite;
    padding: 20rpx 30rpx;
    .btn {
      flex: 1;
      padding: 0 20rpx;
    }
  }
}
.sign-warp{
  position: absolute;
  bottom: 20rpx;
  width: 100%;
  text-align: center;
}
</style>
