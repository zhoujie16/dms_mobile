<template>
  <!-- 信息面板 -->
  <view class="collapse-panel-wrap">
    <view class="collapse-panel-inner">
      <view class="collapse-panel-title">{{ title }}</view>
      <view class="collapse-panel-content"><slot></slot></view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  name: 'collapse-panel',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {
    change() {}
  }
};
</script>

<style lang="scss">
.collapse-panel-wrap {
  background-color: #ffffff;
  border-radius: 20rpx;
  overflow: hidden;
  padding-bottom: 20rpx;
  margin-bottom: 30rpx;
  .collapse-panel-inner {
    .collapse-panel-title {
      font-weight: 600;
      padding: 30rpx 40rpx;
      border-bottom: solid 1rpx #eeeeee;
    }
    .collapse-panel-content {
      padding: 0 40rpx;
    }
  }
}
</style>
