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
      <uni-grid :column="4" :highlight="true">
        <uni-grid-item v-for="(item, index) in list" :key="index">
          <MenuItem @click.native="gridItemClick(item)" :item="item"></MenuItem>
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
          image: '/static/image/yuyuejiancha.svg',
          text: '预约检查',
          path: '/pages/appointment-check/appointment-check'
        },
        {
          image: '/static/image/waiguanjiancha.svg',
          text: '车辆预检',
          // path: '/pages/demo/base-demo'
          path: '/pages/customer-reception/customer-reception'
        },
        {
          image: '/static/image/kuaisugongdan.svg',
          text: '快速工单',
          path: '/pages/rapid-order/rapid-order'
        },
        {
          image: '/static/image/jinduchaxun.svg',
          text: '进度查询',
          path: '/pages/progress-query/progress-query'
        },
        {
          image: '/static/image/neishijiancha.svg',
          text: '车辆检查',
          path: '/pages/vehicle-inspection/vehicle-inspection'
        },
        {
          image: '/static/image/jiaoche.svg',
          text: '交车',
          path: '/pages/vehicles-delivery/vehicles-delivery'
        },
        {
          image: '/static/image/fuwugongju.svg',
          text: '服务工具',
          path: '/pages/services-tools/index'
        },
        {
          image: '/static/image/fuwubaobiao.svg',
          text: '服务报表',
          path: '/pages/qcReport/qcReport'
        },
        {
          image: '/static/image/shouhoubaobiao.svg',
          text: '售后报表',
          path: '/pages/tabBar/tabPage3/tabPage3'
        },
        {
          image: '/static/image/xiaoxitixing.svg',
          text: '消息提醒',
          path: '/pages/remind/remind'
        },
        {
          image: '../../../static/image/yuyuejiancha.svg',
          text: 'Demo',
          path: '/pages/demo/base-demo'
        },
        {
          image: '../../../static/image/yuyuejiancha.svg',
          text: 'Demo2',
          path: '/pages/demo/base-demo2'
        },
        {
          image: '../../../static/image/yuyuejiancha.svg',
          text: 'UI-DEMO',
          path: '/pages/demo/ui-demo/ui-demo'
        }
      ]
    };
  },
  methods: {
    gridItemClick(item) {
      console.log('gridItemClick');
      uni.navigateTo({
        url: item.path
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  background-color: $uni-m-color-cwhite;
}
/* 通知 */
.notice-bar {
  margin: 10rpx 0;
}
/deep/ .uni-grid-item--border-top{
  border: none!important;
}
</style>
