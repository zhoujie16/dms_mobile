<template>
  <!-- 折叠面板 -->
  <view class="collapse-panel-wrap">
    <view class="collapse-panel-inner">
      <view class="collapse-panel-title" @click="cellTitleClick">
        <view class="title">{{ title }}</view>
        <view class="right">
          <text v-if="isShowDetail" class="m-iconfont">&#xe718;</text>
          <text v-else class="m-iconfont">&#xe71c;</text>
        </view>
      </view>
      <view class="collapse-panel-content" v-if="isShowDetail"><slot name="default"></slot></view>
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
  background-color: #ffffff;
  border-radius: 10rpx;
  overflow: hidden;
  margin-bottom: 20rpx;
  .collapse-panel-inner {
    .collapse-panel-title {
      display: flex;
      height: 100rpx;
      justify-content: space-between;
      align-items: center;
      border: solid 1px #efefef;
      padding: 0 30rpx;
      .title {
        position: relative;
        font-size: 34rpx;
        font-weight: 500;
        padding-left: 20rpx;
      }
      .title:after {
        content: '';
        position: absolute;
        display: inline-block;
        height: 34rpx;
        width: 6rpx;
        border-radius: 4rpx;
        background-color: #1371f7;
        left: 0;
        top: 8rpx;
      }
      .right {
      }
    }
    .collapse-panel-content {
    }
  }
}
</style>
