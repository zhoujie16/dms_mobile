<template>
  <!-- 监控信息 -->
  <view class="monitor-info-wrap">
    <uni-nav-bar
      left-text="取消"
      right-text="确认"
      title="监控信息"
      @clickLeft="clickLeft"
      @clickRight="clickRight"
    ></uni-nav-bar>
    <view class="monitor-info-inner">
      
      
    </view>
  </view>
</template>

<script>
export default {
  name: '',
  methods: {
    clickLeft() {
      this.$emit('cancel');
    },
    clickRight() {
      this.$emit('confirm');
    }
  }
};
</script>

<style></style>
