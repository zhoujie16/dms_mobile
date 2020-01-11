<template>
  <view class="m-page-wrap" :class="type">
    <slot></slot>
    <view class="m-page-popup-group">
      <MPickerPopup ref="MPickerPopup"></MPickerPopup>
      <MCheckboxPopup ref="MCheckboxPopup"></MCheckboxPopup>
      <MDatePickerPopup ref="MDatePickerPopup"></MDatePickerPopup>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-page',
  props:{
    // 页面背景色，可选值 primary  default
    type:{
      type: String,
      default: 'default'
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.MPickerPopup = this.$refs.MPickerPopup;
    this.MCheckboxPopup = this.$refs.MCheckboxPopup;
    this.MDatePickerPopup = this.$refs.MDatePickerPopup;
  },
  methods: {}
};
</script>

<style lang="scss">
.m-page-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  /* #ifdef H5 */
  height: calc(100vh - 88rpx);
  /* #endif */
  &.default{
    background-color: #ffffff;
  }
  &.primary{
    background-color: $uni-bg-color-page;
  }
}
</style>
