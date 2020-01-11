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
    <HomeHeader></HomeHeader>
    <!-- 菜单 -->
    <view class="menu-wrap">
      <uni-grid :column="3" :highlight="true" @change="gridItemClick">
        <uni-grid-item v-for="(item, index) in list" :key="index">
          <MenuItem :item="item"></MenuItem>
        </uni-grid-item>
      </uni-grid>
    </view>
  </view>
</template>

<script>
import uniGrid from '@/libs/uni-ui/uni-grid/uni-grid.vue';
import uniGridItem from '@/libs/uni-ui/uni-grid-item/uni-grid-item.vue';
import uniNoticeBar from '@/libs/uni-ui/uni-notice-bar/uni-notice-bar.vue';
import MenuItem from '../components/menu-item.vue';
import UniDrawer from '@/libs/uni-ui/uni-drawer/uni-drawer.vue';
import HomeHeader from './components/home-header.vue';

export default {
  components: {
    uniGrid,
    uniGridItem,
    uniNoticeBar,
    MenuItem,
    UniDrawer,
    HomeHeader
  },
  // 导航栏按钮点击事件
  onNavigationBarButtonTap(btn) {
    console.log('导航栏按钮点击事件', btn);
    uni.getSubNVueById('drawer').show('slide-in-left', 200);
  },
  onReady() {
    console.log('tabbar1 ready', this);
  },
  data() {
    return {
      isShowDrawer: false,
      list: [
        {
          icon: 'search',
          text: '预约检查',
          path: '/pages/appointment-check/appointment-check'
        },
        {
          icon: 'handshake-o',
          text: '客户接待',
          // path: '/pages/demo/base-demo'
          path: '/pages/customer-reception/customer-reception'
        },
        {
          icon: 'file-text',
          text: '快速工单',
          path: '/pages/rapid-order/rapid-order'
        },
        {
          icon: 'spinner',
          text: '进度查询',
          path: '/pages/progress-query/progress-query'
        },
        {
          icon: 'calendar-check-o',
          text: '车辆检查',
          path: '/pages/vehicle-inspection/vehicle-inspection'
        },
        {
          icon: 'car',
          text: '交车',
          path: '/pages/vehicles-delivery/vehicles-delivery'
        },
        {
          icon: 'cogs',
          text: '服务工具',
          path: '/pages/services-tools/index'
        },
        {
          icon: 'tasks',
          text: 'QC',
          path: '/pages/qcReport/qcReport'
        },
        {
          icon: 'bell-o',
          text: '提醒',
          path: '/pages/index/index'
        },
        // {
        //   icon: 'desktop',
        //   text: 'Demo',
        //   path: '/pages/demo/base-demo'
        // },
        // {
        //   icon: 'desktop',
        //   text: 'Demo2',
        //   path: '/pages/demo/base-demo2'
        // }
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
</style>
