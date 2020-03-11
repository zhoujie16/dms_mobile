<template>
  <button
    class="m-button"
    :size="size"
    :type="type"
    :plain="plain"
    :loading="loading"
    :disabled="disabled"
    :block="block"
  >
    <slot name="default"></slot>
  </button>
</template>

<script>
export default {
  name: 'm-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    
  }
};
</script>

<style lang="scss">
.m-button {
  height: 80rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: $uni-m-border-radius-b3;
  &[type='default'] {
    border: solid 1rpx $uni-m-color-c11;
    color: $uni-m-color-c11;
  }
  &[type='primary'] {
    border: solid 1rpx $uni-m-color-c11;
    background-color: $uni-m-color-c11;
  }
  &[type='warn'] {
    border: solid 1rpx $uni-m-color-c14;
    background-color: $uni-m-color-c14;
  }
  &[plain] {
    border: solid 1rpx $uni-m-color-c11;
    background-color: initial;
  }
  &[disabled] {
    border: solid 1rpx $uni-m-color-c4;
    background-color: $uni-m-color-c4;
    color: #ffffff;
  }
  &[block] {
    border-radius: 0rpx;
  }
  &[size=mini]{
    display: inline-block;
    height: 60rpx;
    border-radius: 60rpx;
  }
}
</style>
