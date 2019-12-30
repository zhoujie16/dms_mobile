<template>
  <view class="list-cell-wrap">
    <view class="list-cell-wrap-inner">
      <view class="scroll-cell-title" @click="cellTitleClick">
        <view class="m-flex m-align-center m-height-80">姓名</view>
        <view class="m-flex m-justify-around m-align-center">
          <view class="m-height-80" style="flex: 0 0 200rpx;">沪ADC10086</view>
          <view class="m-height-80" style="flex: 1;text-align: right;">
            2019-12-12 12:12:12
          </view>
        </view>
      </view>
      <view class="scroll-cell-content" v-if="isShowDetail">
        <m-label label="预检单号">
          <view>YJ1111111111111</view>
        </m-label>
        <m-label label="工单号">
          <view>YJ1111111111111</view>
        </m-label>
        <m-label label="接待车型">
          <view>YJ1111111111111</view>
        </m-label>
        <m-label label="接待顾问">
          <view>YJ1111111111111</view>
        </m-label>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  name: "list-cell-wrap",
  props: {
    cell: Object
  },
  mounted() {
    console.log("list-cell-wrap", "mounted");
  },
  data() {
    return {
      isShowDetail: false
    };
  },
  methods: {
    change() {},
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    }
  }
};
</script>

<style lang="scss">
.list-cell-wrap { 
  padding: 20rpx;     
  color: $uni-text-color-inverse;  
}

.list-cell-wrap-inner { 
  width: 100%;
  padding: 30rpx;
  border-radius: 20rpx;
  border: 1px solid #999999;
}
</style>
