<template>
  <view class="collapse-panel-wrap">
    <view class="collapse-panel-inner">
      <view class="collapse-panel-title" @click="cellTitleClick">{{ title }}</view>
      <view class="collapse-panel-content" v-if="isShowDetail"><slot></slot></view>
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
    return {
      isShowDetail: true
    };
  },
  methods: {
    change() {},
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    }
  }
};
</script>

<style lang="scss">
.collapse-panel-wrap {
  border-bottom: solid 30rpx #dddddd;
  padding-bottom: 40rpx;
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
