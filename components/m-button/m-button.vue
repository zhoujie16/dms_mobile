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
  border-radius: 80rpx;
  &[type='default'] {
    border: solid 1rpx #2f84eb;
    color: #1371f7;
  }
  &[type='primary'] {
    border: solid 1rpx #1371f7;
    background-color: #1371f7;
  }
  &[type='warn'] {
    border: solid 1rpx #fe4766;
    background-color: #fe4766;
  }
  &[plain] {
    border: solid 1rpx #2f84eb;
    background-color: initial;
  }
  &[disabled] {
    border: solid 1rpx #e1e1e1;
    background-color: #e1e1e1;
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
