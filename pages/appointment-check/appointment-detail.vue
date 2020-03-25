<!-- 工单详情 -->
<template>
  <MPage ref="MPage">
    <view class="page-body">
      <view class="header-fixed">
        <view class="title-panel">
          <view class="title-panel-inner">
            <view class="info-panel">
              <view class="customer-info">
                {{ appointmentInfo.ownerName ? appointmentInfo.ownerName : '未知' }} -
                {{ appointmentInfo.license }}
              </view>
              <view class="car-info">{{ appointmentInfo.contactorPhone }}</view>
            </view>
            <view class="phone" @click="phoneClick(appointmentInfo.contactorPhone)">
              <image src="/static/image/dianhua2.svg" mode="scaleToFill" class="img"></image>
            </view>
          </view>
          <view class="title-panel-bg"></view>
        </view>
      </view>

      <view class="content-warp">
        <MLabel label="预约进厂时间">{{ appointmentInfo.bookingComeTime }}</MLabel>

        <MLabel label="预约单号">{{ appointmentInfo.bookingOrderNo }}</MLabel>
        <MLabel label="VIN">{{ appointmentInfo.vin }}</MLabel>
        <MLabel label="车型">{{ appointmentInfo.model }}</MLabel>
        <MLabel label="里程(KM)">{{ appointmentInfo.inMileage }}</MLabel>
        <MLabel label="服务顾问">{{ appointmentInfo.serviceAdvisor }}</MLabel>
        <MLabel label="维修技师">{{ appointmentInfo.chiefTechnician }}</MLabel>

        <MLabel label="客户需求">{{ appointmentInfo.customerDesc }}</MLabel>
        <view class="m-break-space"></view>
        <MTextArea readonly label="备注" v-model="appointmentInfo.remark==null?'':appointmentInfo.remark"></MTextArea>
      </view>
      <view class="m-break-space"></view>
      <view class="operate" v-if="activeindex != 2">
        <view class="btn" v-if="activeindex == 0">
          <m-button type="warn" @click.native="cancelClick">取消预约</m-button>
        </view>
        <view class="btn" v-if="activeindex == 0">
          <m-button type="default" @click.native="editClick">修改预约</m-button>
        </view>
        <view class="btn"><m-button type="primary">车辆预检</m-button></view>
      </view>
    </view>
    <MPopup ref="mPopup" type="center" title="修改预约时间">
      <!-- 弹窗内容 -->
      <view class="a-time-wrap">
        <view class="container">
          <MLabel label="预约单号">{{ this.bookingOrderNo }}</MLabel>
          <MLabel label="预约时间" :border="false">
            <view class="time-box">
              <view @click="showPopupClick">{{ bookingComeTime }}</view>
            </view>
          </MLabel>
        </view>

        <view class="operate-time">
          <view class="btn">
            <m-button type="default" :plain="true" :block="true" @click.native="cancelAppointClick">
              取消
            </m-button>
          </view>
          <view class="btn">
            <m-button type="default" :block="true" @click.native="confirmAppointTime">
              确认
            </m-button>
          </view>
        </view>
      </view>
    </MPopup>
  </MPage>
</template>

<script>
import {
  queryAppointmentDetail,
  deleteAppointment,
  editAppointment
} from '@/api/appointment-check/index.js';

export default {
  data() {
    return {
      activeindex: 0,
      bookingOrderNo: '', //预约单号
      appointmentInfo: {},
      bookingComeTime: '请选择'
    };
  },
  computed: {},
  onLoad(option) {
    console.warn(option.bookingOrderNo, '预约单号');
    this.activeindex = option.activeindex;
    this.bookingOrderNo = option.bookingOrderNo;
    this.getOrderInfo(option.bookingOrderNo);
  },
  methods: {
    //根据预约单号查询信息
    async getOrderInfo(roNo) {
      let [status,res] = await queryAppointmentDetail(roNo);
      console.log(res, '预约检查详情信息');
      this.appointmentInfo = res.data;
    },
    phoneClick(phone) {
      // this.$refs.phone.open();
      uni.makePhoneCall({
        phoneNumber: phone, 
      });
    },

    phoneClose() {
      this.$refs.phone.close();
    },
    editClick() {
      this.$refs.mPopup.open();
    },
    async cancelClick() {
      const res = await deleteAppointment(this.bookingOrderNo);
      console.log('取消预约', res);
      const res1 = await this.SHOW_MODAL({
        title: '取消成功',
        content: '',
        showCancel: false, // 是否显示取消按钮，默认为 true
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      console.log(res1, res1 == 'confirm');
      if (res1 == 'confirm') {
        uni.navigateTo({
          url: '/pages/appointment-check/appointment-check'
        });
      }
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
      if (res[0] != 'cancel') {
        this.bookingComeTime = res[0];
      } else {
        return;
      }
    },
    //保存预约时间
    async confirmAppointTime() {
      let params = {
        bookingOrderNo: this.bookingOrderNo,
        bookingComeTime: this.bookingComeTime
      };
      const res = await editAppointment(params);
      console.log('修改预约时间', res);
      this.getOrderInfo(this.bookingOrderNo);
      this.cancelAppointClick();
    },
    //取消预约时间
    cancelAppointClick() {
      this.$refs.mPopup.close();
      this.bookingComeTime = '请选择';
    }
  }
};
</script>

<style lang="scss">
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
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
    padding: 0 10rpx;
  }
}
.a-time-wrap {
  position: relative;
  // padding-top: 100rpx;
  height: 400rpx;
  .container {
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
