<template>
  <view @click="itemClick" class="nav-bar-select-item">
    <view class="title">
      {{title}}
    </view>
    <uni-icons class="icon" type="arrowdown" size="20"></uni-icons>
  </view>
</template>

<script>
export default {
  name: 'nav-bar-select-item',
  props: {
    title: {
      type: String,
      default: '请选择'
    }
  },
  methods: {
    itemClick() {
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss">
.nav-bar-select-item {
  width: 250rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80rpx;
  font-weight: 500;
  border-bottom: solid 1rpx #dddddd;
  font-size: 24rpx;
  .icon{
    margin-left: 10rpx;
  }
}
</style>
