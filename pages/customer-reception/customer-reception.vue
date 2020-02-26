<template>
  <MPage ref="MPage" type="primary">
    <view class="m-status-bar"></view>
    <!-- 自定义导航栏 -->
    <uni-nav-bar left-icon="arrowleft" title="车辆预检" @clickLeft="back" @clickRight="handClick">
      <block slot="right">
        <view><text class="m-iconfont icon">&#xe721;</text></view>
      </block>
    </uni-nav-bar>
    <SearchFilter ref="searchFilter" :isShow="false">
      <view slot="form"><searchForm @confirm="searchFormConfirm"></searchForm></view>
    </SearchFilter>
    <BaseScroll
      :height="scrollHeight"
      :fetchApi="fetchApi"
      :fetchParams="fetchParams"
      @listChange="
        arr => {
          this.dataSource = arr;
        }
      "
    >
      <view slot="scroll" style="padding: 20rpx;">
        <view v-for="(data, i) in dataSource" :key="i">
          <scrollCell @click="scrollCellClick(data)"></scrollCell>
        </view>
      </view>
    </BaseScroll>

    <view class="popup-group">
      <image
        @click="addBtnClick"
        src="/static/image/add_btn.svg"
        mode="scaleToFill"
        style="width: 120rpx;height: 120rpx;"
      ></image>
    </view>
  </MPage>
</template>

<script>
import searchForm from '@/pages/customer-reception/components/search-form.vue';
import { AjaxScrollData } from '@/api/test/index.js';
import scrollCell from '@/pages/customer-reception/components/scroll-cell.vue';

export default {
  components: {
    scrollCell,
    searchForm
  },
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 50 + 'px';
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: []
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    // 列表点击事件
    scrollCellClick(cell) {
      console.log('cellClick', cell);
      uni.navigateTo({
        url: '/pages/customer-reception/customer-detail'
      });
    },
    //
    handClick() {
      this.$refs.searchFilter.open();
    },
    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = { t: new Date().getTime() };
    },
    // 新增客户接待
    async addBtnClick() {
      await uni.navigateTo({
        url: '/pages/customer-reception/customer-add'
      });
    }
  }
};
</script>

<style lang="scss">
.popup-group {
  position: fixed;
  width: 120rpx;
  height: 120rpx;
  right: 20rpx;
  bottom: 20rpx;
}
.icon {
  font-size: 42rpx;
}
</style>
