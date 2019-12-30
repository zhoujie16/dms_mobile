<template>
  <view class="y-lab-wrap">
    <view class="y-lab-inner" :class="{ 'y-lab-inner2': row > 1 }">
      <view class="y-lab-title">{{ label }}</view>
      <view class="y-lab-content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "m-label",
  props: {
    label: {
      type: String,
      default: "标题"
    },
    row: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.y-lab-wrap {
  font-size: 32rpx;
}

.y-lab-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border-bottom: solid 1px #999999; */
}

.y-lab-inner2 {
  display: block;
}

.y-lab-title {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100rpx;
}

.y-lab-content {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.y-lab-inner2 .y-lab-content {
  justify-content: flex-start;
}
</style>
