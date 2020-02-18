<template>
  <view class="nav-date-range-picker">
    <view class="start" @click="startClick">{{ startDateInfo }}</view>
    <view class="and">-</view>
    <view class="end" @click="endClick">{{ endDateInfo }}</view>
    <view class="btn" @click="btnClick">查询</view>
  </view>
</template>

<script>
export default {
  name: 'nav-date-range-picker',
  data() {
    return {
      startDate: '',
      endDate: ''
    };
  },
  computed: {
    startDateInfo() {
      return this.startDate || '开始时间';
    },
    endDateInfo() {
      return this.endDate || '结束时间';
    }
  },
  methods: {
    async startClick() {
      const params = {
        mode: 'date',
        startYear: '2016',
        endYear: '2020'
      };
      const [res] = await this.$root.$refs.MPage.MPickerPopup.showPicker(params);
      this.startDate = res;
    },
    async endClick() {
      const params = {
        mode: 'date',
        startYear: '2016',
        endYear: '2020'
      };
      const [res] = await this.$root.$refs.MPage.MPickerPopup.showPicker(params);
      this.endDate = res;
    },
    async btnClick() {
      if (this.startDate && this.endDate && new Date(Date.parse(this.startDate))<=new Date(Date.parse(this.endDate))) {
        this.$emit('change', [this.startDate, this.endDate]);
        await uni.showToast({
          title: '查询',
          icon: 'none',
          mask: true
        });
      } else {
        this.endDate = '';
        await uni.showToast({
          title: '请选择日期',
          icon: 'none',
          mask: true
        });
      }
    }
  }
};
</script>

<style lang="scss">
.nav-date-range-picker {
  display: flex;
  height: 100rpx;
  align-items: center;
  background-color: $uni-bg-color-navbar;
  padding: 20rpx 0 20rpx 20rpx;
  .start,
  .and,
  .end,
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .start {
    flex: 1;
    background-color: $uni-bg-color-page;
    color: #dddddd;
  }
  .and {
    flex: 0 0 50rpx;
    color: #dddddd;
  }
  .end {
    flex: 1;
    background-color: $uni-bg-color-page;
    color: #dddddd;
  }
  .btn {
    flex: 0 0 150rpx;
    color: #ffffff;
  }
}
</style>
