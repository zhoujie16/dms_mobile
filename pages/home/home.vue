<template>
  <MPage ref="MPage">
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
  </MPage>
</template>

<script>
import { mapActions } from 'vuex';
import { queryDict } from '@/api/util/index.js';
import uniGrid from '@/libs/uni-ui/uni-grid/uni-grid.vue';
import uniGridItem from '@/libs/uni-ui/uni-grid-item/uni-grid-item.vue';
import uniNoticeBar from '@/libs/uni-ui/uni-notice-bar/uni-notice-bar.vue';
import MenuItem from './components/menu-item.vue';
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
    // 登录后，获取所有的数据字典值
    this.createDictData();
  },
  data() {
    return {
      isShowDrawer: false,
      list: [
        {
          image: '/static/image/yuyuejiancha.svg',
          text: '基础案例',
          path: '/pages/demo/ui-demo/ui-demo'
        },
        {
          image: '/static/image/yuyuejiancha.svg',
          text: '预约检查',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/waiguanjiancha.svg',
          text: '车辆预检', 
          path: '/pages/index/index'
        },
        {
          image: '/static/image/kuaisugongdan.svg',
          text: '快速工单',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/jinduchaxun.svg',
          text: '进度查询',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/neishijiancha.svg',
          text: '车辆检查',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/jiaoche.svg',
          text: '交车',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/fuwugongju.svg',
          text: '服务工具',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/fuwubaobiao.svg',
          text: '服务报表',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/shouhoubaobiao.svg',
          text: '售后报表',
          path: '/pages/index/index'
        },
        {
          image: '/static/image/xiaoxitixing.svg',
          text: '消息提醒',
          path: '/pages/index/index'
        }
      ]
    };
  },
  methods: {
    // 下载数据字典
    async createDictData() {
      const [err, res_dict] = await queryDict();
      if (err) {
        console.log('字典下载失败');
        const res_modal = await this.SHOW_MODAL({
          title: '提示',
          content: '数据字典下载失败, 请重新登录',
          showCancel: false,
          confirmText: '确定'
        });
        await uni.reLaunch({
          url: '/pages/login/login'
        });
        return;
      }
      // 字典下载成功 保存字典
      const dict = res_dict.data.dict;
      const region = res_dict.data.region;
      this.$dict.initDict({ dict, region });
    },
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
/* 通知 */
.notice-bar {
  margin: 10rpx 0;
}
/deep/ .uni-grid-item--border-top {
  border: none !important;
}
</style>
