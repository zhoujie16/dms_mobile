<!-- 工单详情 -->
<template>
  <MPage ref="MPage">
    <view class="page-body">
      <view class="header-fixed">
        <view class="title-panel">
          <view class="title-panel-inner">
            <view class="info-panel">
              <view class="customer-info">王大锤 - 沪ADC520</view>
              <view class="car-info">13322111234</view>
            </view>
            <view class="phone" @click="phoneClick">
              <image src="/static/image/dianhua2.svg" mode="scaleToFill" class="img"></image>
            </view>
          </view>
          <view class="title-panel-bg"></view>
        </view>
      </view>

      <view class="content-warp">
        <MLabel label="预约进厂时间">2020-02-04</MLabel>

        <MLabel label="预约单号">xxxxxxxxxx</MLabel>
        <MLabel label="VIN">xxxxxxxxxx</MLabel>
        <MLabel label="车型">QASW</MLabel>
        <MLabel label="里程(KM)">100</MLabel>
        <MLabel label="服务顾问">张全蛋</MLabel>
        <MLabel label="维修技师">王尼玛</MLabel>

        <MLabel label="客户需求">测试品牌</MLabel>
        <view class="m-break-space"></view>
        <MTextArea label="备注" v-model="value_1"></MTextArea>
      </view>
      <view class="m-break-space"></view>
      <view class="operate">
        <view class="btn">
          <m-button type="default" @click.native="cancelClick">修改预约时间</m-button>
        </view>
        <view class="btn"><m-button type="primary">外观预检</m-button></view>
      </view>
    </view>
    <MPopup ref="mPopup" type="center" title="修改预约时间">
      <!-- 弹窗内容 -->
      <view class="a-time-wrap">
        <view class="container">
          <MLabel label="预约单号">xxxxxxxxxx</MLabel>
          <MLabel label="预约时间" :row="2" :border="false">
            <view class="time-box">
              <view @click="showPopupClick">{{ appointTime }}</view>
            </view>
          </MLabel>
        </view>
        
        <view class="operate-time">
          <view class="btn">
            <m-button type="default" :plain="true" :block="true" @click.native="cancelAppointClick">取消</m-button>
          </view>
          <view class="btn"><m-button type="default" :block="true">确认</m-button></view>
        </view>
      </view>
    </MPopup>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      value_1: '',
      appointTime: '请选择'
    };
  },
  computed: {},
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    phoneClick() {
      // this.$refs.phone.open();
      uni.makePhoneCall({
        phoneNumber: '114', //仅为示例
        success: e => {
          //成功
        },
        fail: e => {
          //失败
        }
      });
    },

    phoneClose() {
      this.$refs.phone.close();
    },
    async cancelClick() {
      this.$refs.mPopup.open();
      // const res = await this.SHOW_ACTION_SHEET({
      //   itemList: [
      //     { text: '未与工单关联', value: '1' },
      //     { text: '超出预约进厂时间', value: '2' },
      //     { text: '未与工单关联', value: '3' },
      //     { text: '超出预约进厂时间', value: '4' },
      //     { text: '其他原因取消', value: '5' }
      //   ]
      // });
      // console.log('showActionSheet', res);
      // this.SHOW_TOAST(JSON.stringify(res));
    },
    //预约时间
    async showPopupClick() {
      //选择预约时间
      const res = await this.SHOW_TIME_PICKER({
        mode: 'dateTime',
        startYear: '2015',
        endYear: '2021',
        defaultVal: '2020-02-02 02:02:02',
        hasSecond: true
      });
      // console.log(res);
      // this.SHOW_TOAST(JSON.stringify(res));
      if(res[0]!='cancel'){
        this.appointTime = res[0]
      }else{
        return;
      }
    },
    //取消预约时间
    cancelAppointClick(){
       this.$refs.mPopup.close();
        this.appointTime = '请选择'
    }
  }
};
</script>

<style lang="scss">
// .status-bar-wrap {
//   position: relative;
//   background: #ffffff;
//   /deep/ .nav-bar {
//     .uni-navbar__content {
//       z-index: 1;
//       background-color: initial !important;
//       .uni-navbar__header {
//         background-color: initial !important;
//       }
//     }
//     .uni-icons,
//     .uni-nav-bar-text {
//       color: #ffffff !important;
//     }
//   }
//   .status-bar-bg {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background: linear-gradient(to right, #41c5ff, #1371f7);
//     z-index: 0;
//   }
// }
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.title-panel {
  position: relative;
  padding: 10rpx 30rpx 30rpx 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $uni-m-color-white-pressed;
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
    box-shadow: 0px 2px 5px $uni-m-color-c4;
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
    .phone {
      position: absolute;
      top: 30rpx;
      right: 40rpx;
      width: 70rpx;
      height: 70rpx;
      .img {
        width: 70rpx;
        height: 70rpx;
      }
    }
  }
}
.page-body {
  height: 100vh;
  overflow: auto;
  .content-warp {
    margin-top: 200rpx;
    margin-bottom: 160rpx;
  }
}

.operate {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: $uni-m-color-white-pressed;
  padding: 20rpx 30rpx;
  .btn {
    flex: 1;
    padding: 0 20rpx;
  }
}
.a-time-wrap {
  position: relative;
  // padding-top: 100rpx;
  height: 400rpx;
  .container{
    margin-top: 20rpx;
    .time-box {
      width: 100%;
      text-align: right;
    }
  }
  
  .operate-time {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    .btn {
      flex: 1;
    }
  }
}
</style>
