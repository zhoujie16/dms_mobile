<template>
  <view class="m-page-wrap" :class="type">
    <view class="m-page-inner">
      <slot name="default"></slot>
    </view>
    <view class="m-page-popup-group">
      <MPickerPopup ref="MPickerPopup"></MPickerPopup>
      <MCheckboxPopup ref="MCheckboxPopup"></MCheckboxPopup>
      <MDatePickerPopup ref="MDatePickerPopup"></MDatePickerPopup>
      <MModal ref="MModal"></MModal>
      <MActionSheet ref="MActionSheet"></MActionSheet>
      <MKeyboard ref="MKeyboard"></MKeyboard>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-page',
  props: {
    // 页面背景色，可选值 primary  default
    type: {
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
    this.MModal = this.$refs.MModal;
    this.MActionSheet = this.$refs.MActionSheet;
    this.MKeyboard = this.$refs.MKeyboard;
  },
  methods: {}
};
</script>

<style lang="scss">
.m-page-wrap {
  position: relative;
  width: 100%;
  &.default {
    background-color: $uni-m-color-white-pressed;
  }
  &.primary {
    background-color: $uni-m-color-white-pressed;
  }
  .m-page-inner {
    height: 100vh;
    overflow: auto;
  }
}
</style>
