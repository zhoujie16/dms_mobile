<!-- 工单详情 -->
<template>
  <MPage ref="MPage">
    <view class="page-body">
      <view class="title-panel">
        <view class="title-panel-inner">
          <view class="customer-info">{{previewInfoData.license}}</view>
          <view class="car-info">
            预检单号
            <text class="value">{{previewInfoData.yjNo}}</text>
          </view>
          <view class="car-info">
            工单号
            <text class="value">{{previewInfoData.roNo}}</text>
          </view>
        </view>
        <view class="title-panel-bg"></view>
      </view>
      <CollapsePanel title="客户信息">
        <template slot="default">
          <MLabel label="vin">{{previewInfoData.vin}}</MLabel>
          <MLabel label="车主姓名">{{previewInfoData.ownerName}}</MLabel>
          <MLabel label="手机号">{{previewInfoData.mobile}}</MLabel>
          <MLabel label="送修人">{{previewInfoData.contactorName}}</MLabel>
          <MLabel label="送修人手机号">{{previewInfoData.contactorPhone}}</MLabel>
          <MLabel label="送修人邮箱">{{previewInfoData.contactorEMail	}}</MLabel>
          <MLabel label="里程(KM)">{{previewInfoData.inMileage}}</MLabel>
          <MLabel label="服务顾问">{{previewInfoData.serviceAdvisor}}</MLabel>
        </template>
      </CollapsePanel>
      <CollapsePanel title="客户需求">
        <template slot="default">
          <MLabel label="需求类型">召回</MLabel>
          <MLabel label="故障描述">普通维修</MLabel>
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
            v-model="value_1"
            :itemList="itemList_1"
          ></MCheckboxPanel>
        </template>
      </CollapsePanel>
      <view class="operate">
        <view class="btn">
          <m-button type="default">删除</m-button>
        </view>
        <view class="btn">
          <m-button type="primary">存为预检单</m-button>
        </view>
      </view>
    </view>
  </MPage>
</template>

<script>
// import AmonitorInfo from './components/monitor-info.vue';
export default {
  components: {
    // AmonitorInfo
  },
  data() {
    return {
      previewInfoData:{},
      value_1: [1, 3, 6],
      itemList_1: [
        { text: '客户在厂', value: 1 },
        { text: '需要洗车', value: 2 },
        { text: '需要路试', value: 3 },
        { text: '需要质检', value: 4 },
        { text: '带走旧件', value: 5 },
        { text: '曾秀保养', value: 6 },
        { text: '不要积分', value: 7 },
        { text: '三日电访', value: 8 }
      ]
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title-panel {
  position: relative;
  height: 260rpx;
  padding: 10rpx 30rpx 30rpx 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $uni-m-color-cwhite;
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
}
.operate{
  display: flex;
  background: $uni-m-color-cwhite;
  padding: 20rpx 30rpx;
  .btn{
    flex: 1;
    padding: 0 20rpx;
  }
}
</style>
