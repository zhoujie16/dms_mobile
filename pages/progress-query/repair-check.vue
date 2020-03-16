<template>
  <MPage ref="MPage">
    <view class="page-body">
      <view class="title-panel">
        <view class="title-panel-inner">
          <view class="info-panel">
            <view class="customer-info">王大锤 - 沪ADC520</view>
            <view class="car-info">13322111234</view>
          </view>
          <view class="phone" @click="phoneClick">
            <image src="/static/image/dianhua2.svg" mode="scaleToFill" class="img" ></image>
          </view>
        </view>
        <view class="title-panel-bg"></view>
      </view>
      <CollapsePanel title="客户信息">
        <template slot="default">
          <MLabel label="工单号">xxxxxxxxxx</MLabel>
          <MLabel label="VIN">xxxxxxxxxx</MLabel>
          <MLabel label="送修人">xxxxxxxx</MLabel>
          <MLabel label="送修人电话">
            13322111234
            <image src="/static/image/dianhua2.svg" mode="scaleToFill" class="img"  @click="phoneClick"></image>
          </MLabel>
          <MLabel label="故障描述">测试品牌</MLabel>
          <MLabel label="维修技师">王一</MLabel>
          <view class="m-break-space"></view>
        </template>
      </CollapsePanel>
       <view class="m-break-space"></view>
      <view class="operate">
        <view class="btn">
          <m-button type="default" @click.native="checkClick">车辆检查</m-button>
        </view>
        <view class="btn">
          <m-button type="primary">交车</m-button>
        </view>
      </view>
    </view>
     <MtelephoneCall ref='phone' type="bottom">13322111234</MtelephoneCall>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      value_1:'',
      telphoneNumber: '18583285531'
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    phoneClick(){
      // this.$refs.phone.open();
      uni.makePhoneCall({
          // 手机号
              phoneNumber: this.telphoneNumber, 
          	// 成功回调
          	success: (res) => {
          		console.log('调用成功!');
          	},
          	// 失败回调
          	fail: (res) => {
          		console.log('调用失败!')
          	}
      });
    },
    
    phoneClose() {
      this.$refs.phone.close();
    },
    async checkClick() {
      uni.navigateTo({
        url: '/pages/vehicle-inspection/vehicle-inspection'
      })
    },
    deliveryClick() {
      
    }
  }
};
</script>

<style lang="scss">
.title-panel {
  position: relative;
  padding: 10rpx 30rpx 30rpx 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  .title-panel-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100rpx;
    background: linear-gradient(to right, #41c5ff, #1371f7);
    z-index: 0;
  }
  .title-panel-inner {
    width: 100%;
    background-color: #ffffff;
    padding: 0 30rpx;
    border-radius: 10rpx;
    z-index: 1;
    box-shadow: 0px 2px 5px #eeeeee;
    position: relative;
    .info-panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: solid 1px #efefef;
      padding-top: 12rpx;
      .customer-info {
        font-size: 34rpx;
        height: 80rpx;
        line-height: 80rpx;
      }
      .car-info {
        font-size: 30rpx;
        height: 80rpx;
        line-height: 80rpx;
        color: #70767f;
      }
    }
    .phone{
      position: absolute;
      top: 30rpx;
      right: 40rpx;
      width: 70rpx;
      height: 70rpx;
      .img{
        width: 70rpx;
        height: 70rpx;
      }
    }
     }
}
.img{
      width: 56rpx;
      height: 56rpx;
    }
.page-body {
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
