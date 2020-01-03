<template>
  <view class="m-lab-wrap">
    <view class="m-lab-inner" :class="{ 'm-lab-inner2': row > 1, border: border }">
      <view class="m-lab-title">{{ label }}</view>
      <view class="m-lab-content"><slot></slot></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-label',
  props: {
    label: {
      type: String,
      default: '标题'
    },
    row: {
      type: Number,
      default: 1
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.m-lab-wrap {
  color: #333;
  font-size: 32rpx;
}

.m-lab-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.m-lab-inner.border {
  border-bottom: solid 1rpx #dddddd;
}

.m-lab-inner2 {
  display: block;
}

.m-lab-title {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100rpx;
}

.m-lab-content {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.m-lab-inner2 .m-lab-content {
  justify-content: flex-start;
}
</style>
