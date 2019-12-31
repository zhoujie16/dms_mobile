<template>
  <view class="page-wrap">
    <!-- 提醒 -->
    <uni-notice-bar
      class="notice-bar"
      :speed="50"
      single
      scrollable
      showIcon="true"
      text=" 这是 通告栏，这是 通告栏  这是 通告栏，这是 通告栏"
    ></uni-notice-bar>
    <!-- 头图 -->
    <view>
      <image class="header-img" src="../../../static/demo/pp.jpg" mode="widthFix"></image>
    </view>
    <!-- 菜单 -->
    <view class="menu-wrap">
      <uni-grid :column="3" :highlight="true" @change="gridItemClick">
        <uni-grid-item v-for="(item, index) in list" :key="index">
          <MenuItem :item="item"></MenuItem>
        </uni-grid-item>
      </uni-grid>
    </view>
    <uni-drawer :visible="isShowDrawer" mode="left" @close="closeDrawer">
      <!-- 左侧菜单 -->
      <!-- ahhaha -->
      <DrawerLeft></DrawerLeft>
    </uni-drawer>
  </view>
</template>

<script>
import uniGrid from '@/libs/uni-ui/uni-grid/uni-grid.vue';
import uniGridItem from '@/libs/uni-ui/uni-grid-item/uni-grid-item.vue';
import uniNoticeBar from '@/libs/uni-ui/uni-notice-bar/uni-notice-bar.vue';
import MenuItem from '../components/MenuItem.vue';
import UniDrawer from '@/libs/uni-ui/uni-drawer/uni-drawer.vue';
import DrawerLeft from '@/pages/tabBar/components/DrawerLeft.vue';

export default {
  components: {
    uniGrid,
    uniGridItem,
    uniNoticeBar,
    MenuItem,
    UniDrawer,
    DrawerLeft
  },
  // 导航栏按钮点击事件
  onNavigationBarButtonTap(btn) {
    console.log('导航栏按钮点击事件', btn);
    this.isShowDrawer = !this.isShowDrawer;
  },
  onReady() {
    console.log('tabbar1 ready', this);
  },
  data() {
    return {
      isShowDrawer: false,
      list: [
        {
          url: '/static/demo/60x60.png',
          text: '预约检查',
          path: '/pages/appointment-check/appointment-check'
        },
        {
          url: '/static/demo/60x60.png',
          text: '客户接待',
          // path: '/pages/demo/base-demo'
          path: '/pages/customer-reception/customer-reception'
        },
        {
          url: '/static/demo/60x60.png',
          text: '快速工单',
          path: '/pages/rapid-order/rapid-order'
        },
        {
          url: '/static/demo/60x60.png',
          text: '进度查询',
          path: '/pages/progress-query/progress-query'
        },
        {
          url: '/static/demo/60x60.png',
          text: '车辆检查',
          path: '/pages/vehicle-inspection/vehicle-inspection'
        },
        {
          url: '/static/demo/60x60.png',
          text: '交车',
          path: '/pages/vehicles-delivery/vehicles-delivery'
        },
        {
          url: '/static/demo/60x60.png',
          text: '服务工具',
          path: '/pages/index/index'
        },
        {
          url: '/static/demo/60x60.png',
          text: 'QC',
          path: '/pages/index/index'
        },
        {
          url: '/static/demo/60x60.png',
          text: '提醒',
          path: '/pages/index/index'
        },
        {
          url: '/static/demo/60x60.png',
          text: 'Demo',
          path: '/pages/demo/base-demo'
        }
      ]
    };
  },
  methods: {
    gridItemClick(e) {
      const index = e.detail.index;
      const item = this.list[index];
      uni.navigateTo({
        url: item.path
      });
    },
    closeDrawer() {
      this.isShowDrawer = false;
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  background-color: $uni-bg-color-page;
}
/* 通知 */
.notice-bar {
  margin: 10rpx 0;
}

/* 头图 */
.header-img {
  width: 750rpx;
  height: 421.875rpx;
}
</style>
