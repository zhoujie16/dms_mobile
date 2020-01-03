<template>
  <!-- 工单详情 -->
  <view class="page-wrap">
    <!-- 车辆信息 -->
    <view class="car-info-panel">
      <view class="user">
        <text class="name">姓名</text>
        <text class="license">车牌号</text>
      </view>
      <view class="car">新福克斯两厢</view>
      <view class="btns">
        <view @click="btnClick_wxls" class="btn">维修历史</view>
        <view @click="btnClick_jkxx" class="btn">监控信息</view>
      </view>
    </view>
    <view style="padding: 0 40rpx;">
      <MLabel label="工单号">1111111</MLabel>
      <MLabel label="预检单号">11111</MLabel>
      <MCheckbox label="工单类型" single v-model="gdlx_value" :itemList="gdlx_itemList"></MCheckbox>
      <MCheckbox label="维修类型" single v-model="wxlx_value" :itemList="wxlx_itemList"></MCheckbox>
      <MCheckbox label="服务专员" single v-model="fwzy_value" :itemList="fwzy_itemList"></MCheckbox>
      <MLabel label="行驶证号">11111</MLabel>
      <MDatePicker label="上牌日期" v-model="sprq_value"></MDatePicker>
      <MCheckbox label="工时单价" single v-model="gsdj_value" :itemList="gsdj_itemList"></MCheckbox>
    </view>
    <!-- 底部悬浮按钮 -->

    <!-- 弹出层 -->
    <view class="popup-group">
      <MCheckboxPopup ref="MCheckboxPopup"></MCheckboxPopup>
      <MDatePickerPopup ref="MDatePickerPopup"></MDatePickerPopup>
      <!-- 维修历史 -->
      <MPopup ref="mPopup_wxls" type="bottom" title="维修历史">维修历史</MPopup>
      <MPopup ref="mPopup_jkxx" type="bottom" title="监控信息">监控信息</MPopup>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 工单类型 选项
      gdlx_value: ['1'],
      gdlx_itemList: [{ text: '维修', value: '1' }],
      // 维修类型 选项
      wxlx_value: ['1'],
      wxlx_itemList: [
        { text: '首次保养', value: '1' },
        { text: '常规保养', value: '2' },
        { text: '更换发动机', value: '3' },
        { text: '普通维修', value: '4' },
        { text: '钣金喷漆', value: '5' },
        { text: '事故修复', value: '6' },
        { text: '新车装潢', value: '7' },
        { text: '定期保养', value: '8' }
      ],
      // 服务专员 选项
      fwzy_value: ['1'],
      fwzy_itemList: [
        { text: '专员1', value: '1' },
        { text: '专员2', value: '2' },
        { text: '专员3', value: '3' },
        { text: '专员4', value: '4' },
        { text: '专员5', value: '5' },
        { text: '专员6', value: '6' }
      ],
      // 工时单价
      gsdj_value: ['1'],
      gsdj_itemList: [{ text: '100', value: '100' }, { text: '200', value: '200' }],
      // 上牌日期
      sprq_value: []
    };
  },
  methods: {
    change() {},
    btnClick_wxls() {
      this.$refs.mPopup_wxls.open();
    },
    btnClick_jkxx() {
      this.$refs.mPopup_jkxx.open();
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
}
.car-info-panel {
  padding: 0 40rpx;
  border-bottom: solid 20rpx #eeeeee;
  .user {
    padding: 20rpx 0;
    .name {
    }
    .license {
      border: solid 1rpx #dddddd;
      margin-left: 30rpx;
      padding: 5rpx 10rpx;
    }
  }
  .car {
    color: #888888;
    padding: 20rpx 0;
  }
  .btns {
    display: flex;
    height: 100rpx;
    align-items: center;
    border-top: dotted 1rpx #dddddd;
    .btn {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
