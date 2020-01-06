<template>
  <view class="m-page-wrap">
    <slot></slot>
    <view class="m-page-popup-group">
      <MPicker ref="MPicker"></MPicker>
      <MCheckboxPopup ref="MCheckboxPopup"></MCheckboxPopup>
      <MDatePickerPopup ref="MDatePickerPopup"></MDatePickerPopup>
      <MPicker ref="MPicker"></MPicker>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-page'
};
</script>

<style lang="scss">
.m-page-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* #ifdef H5 */
  top: 88rpx;
  /* #endif */
}
</style>
