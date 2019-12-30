<template>
  <view class="m-date-picker-wrap">
    <MLabel :label="label">
      <view class="m-date-picker-btn" @click="open">
        {{ placeholder }}
      </view>
    </MLabel>
    <!-- 中间弹出层 -->
    <uni-popup ref="popup" type="center">
      <view class="date-picker-item-wrap">
        <view class="date-picker-item-title">
          选择时间段
        </view>
        <view class="date-picker-item" @click="close">
          当天
        </view>
        <view class="date-picker-item" @click="close">
          最近7天
        </view>
        <view class="date-picker-item" @click="close">
          最近一个月
        </view>
        <view class="date-picker-item" @click="close">
          自定义
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  name: "m-date-picker",
  components: {},
  props: {
    label: {
      type: String
    },
    dateType: {
      type: String
      /**
       * TIME  RANGE_TIME  TIME_SELECT  RANGE_TIME_SELECT
       * date  datetime  exactdate  month  daterange  datetimerange  exactdaterange  monthrange
       */
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  data() {
    return {};
  },
  methods: {
    open() {
      // 需要在 popup 组件，指定 ref 为 popup
      this.$refs.popup.open();
    },
    close() {
      // 需要在 popup 组件，指定 ref 为 popup
      this.$refs.popup.close();
    }
  }
};
</script>

<style>
.m-date-picker-btn {
  width: 100%;
  background-color: #f4f4f4;
  height: 60rpx;
  padding: 3px 13px;
}
.date-picker-item-wrap {
  width: 400rpx;
  background-color: #ffffff;
  border-radius: 30rpx;
  overflow: hidden;
  padding: 0 40rpx 40rpx 40rpx;
}
.date-picker-item-title {
  height: 100rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #cccccc;
  font-weight: 600;
}
.date-picker-item {
  height: 100rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #cccccc;
}
</style>
