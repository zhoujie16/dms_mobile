<template>
  <view class="search-filter-wrap">
    <view class="search-filter-wrap-inner">
      <view class="search-button" @click="showDrawer">筛选</view>
      <view class="camera-btn"><uni-icons type="camera" size="30"></uni-icons></view>
    </view>
    <uni-drawer :visible="isShowDrawer" mode="right" @close="closeDrawer">
      <!-- 表单展示 -->
      <scroll-view class="scroll-view-h" scroll-y><slot></slot></scroll-view>
    </uni-drawer>
  </view>
</template>

<script>
export default {
  name: 'search-filter',
  components: {},
  data() {
    return {
      isShowDrawer: false
    };
  },
  methods: {
    // 显示抽屉组件
    showDrawer() {
      this.isShowDrawer = true;
    },
    // 抽屉组件关闭
    closeDrawer() {
      console.log('抽屉组件关闭');
      this.isShowDrawer = false;
    },
    hideDrawer() {
      console.log('抽屉组件关闭');
      this.isShowDrawer = false;
    }
  }
};
</script>

<style lang="scss">
.search-filter-wrap {
  background-color: $uni-bg-color-navbar;
  color: $uni-text-color-inverse;
}
.search-filter-wrap-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100rpx;
  padding: 0 30rpx;
}

.search-button {
  height: 74rpx;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #888888;
}

.camera-btn {
  flex: 0 0 74rpx;
  margin-left: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-view-h {
  height: 100%;
}
</style>
