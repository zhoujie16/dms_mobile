<template>
  <!-- 单选 多选  弹窗选择 组件 -->
  <view class="m-date-picker-popup-wrap">
    <!-- 中间弹出层 -->
    <uni-popup ref="popup" type="center">
      <view v-if="isShowPopup" class="date-picker-item-wrap">
        <view class="date-picker-item-title">选择时间段</view>
        <view class="date-picker-item" @click="datePickerItem(1)">当天</view>
        <view class="date-picker-item" @click="datePickerItem(2)">最近7天</view>
        <view class="date-picker-item" @click="datePickerItem(3)">最近一个月</view>
        <view class="date-picker-item" @click="datePickerItem(4)">自定义</view>
      </view>
    </uni-popup>
    <!-- <uni-calendar
      v-if="isShowPopup"
      ref="calendar"
      :insert="false"
      :range="true"
      @confirm="confirmCalendar"
    ></uni-calendar> -->
  </view>
</template>

<script>
export default {
  name: 'm-checkbox-popup',
  components: {},
  props: {},
  data() {
    return {
      isShowPopup: false
    };
  },
  methods: {
    showPicker() {
      return new Promise(reslove => {
        this.isShowPopup = true;
        this.$refs.popup.open();
        this.confirm = value => {
          reslove(value);
        };
      });
    },
    async datePickerItem(index) {
      const moment = this.$moment;
      if (index === 1) {
        // 当天
        const date = moment().format('YYYY-MM-DD');
        this.confirm([date]);
      } else if (index === 2) {
        // 最近7天
        const date_e = moment().format('YYYY-MM-DD');
        const date_s = moment()
          .add(-7, 'days')
          .format('YYYY-MM-DD');
        this.confirm([date_s, date_e]);
      } else if (index === 3) {
        // 最近一个月
        const date_e = moment().format('YYYY-MM-DD');
        const date_s = moment()
          .add(-30, 'days')
          .format('YYYY-MM-DD');
        this.confirm([date_s, date_e]);
      } else if (index === 4) {
        // 自定义
        // this.$refs.calendar.open();
        const res_p = await this.$root.$refs.MPage.$refs.MPicker.showPicker({
          mode: 'range',
          startYear: '2018',
          endYear: '2020',
          defaultVal: ['2018-01-01', '2020-01-01']
        });
        this.confirm(res_p);
      }
      this.$refs.popup.close();
    }
    // confirmCalendar(val) {
    //   console.log('确认日期', val);
    //   const range = val.range;
    //   const { before, after } = range;
    //   if (before && after) {
    //     this.confirm([before, after]);
    //   }
    // }
  }
};
</script>

<style lang="scss">
.m-date-picker-popup-wrap {
  .date-picker-item-wrap {
    color: #333;
    width: 400rpx;
    background-color: #ffffff;
    border-radius: 30rpx;
    overflow: hidden;
    padding: 0 40rpx 40rpx 40rpx;

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
  }
}
</style>
