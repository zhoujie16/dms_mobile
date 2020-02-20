<template>
  <!-- 折叠面板 -->
  <view class="collapse-panel-wrap">
    <view class="collapse-panel-inner">
      <view class="uni-flex uni-row collapse-panel-item" @click="cellTitleClick">
        <view class="flex-item ">{{ title }}</view>
        <view class="flex-item" style="text-align: right;">
          <uni-icons
            :type="isShowDetail ? 'arrowup' : 'arrowdown'"
            size="30"
            color="#CCCCCC"
          ></uni-icons>
        </view>
      </view>
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
      isShowDetail: false
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
  border-radius: 20rpx;
  overflow: hidden;
  padding-bottom: 20rpx;
  .collapse-panel-inner {
    .collapse-panel-item {
      padding: 30rpx 40rpx;
      border-bottom: solid 1rpx #eeeeee;
      .title{
        font-weight: 600;
      }
    }
    .flex-item{
      width: 50%;
    }
    .collapse-panel-content {
      padding: 0 40rpx;
    }
  }
}
</style>
