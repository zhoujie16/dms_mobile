<template>
  <MPage ref="MPage" type="primary">
    <SearchFilter ref="searchFilter" :isShow="false">
      <view slot="form"><searchForm @confirm="searchFormConfirm"></searchForm></view>
    </SearchFilter>
  <!--  <BaseScroll
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
    </BaseScroll> -->
    <scrollCell @click="scrollCellClick(1)"></scrollCell>
  </MPage>
</template>

<script>
import searchForm from '@/pages/vehicle-inspection/components/search-form.vue';
import scrollCell from '@/pages/vehicle-inspection/components/scroll-cell.vue';
import { AjaxScrollData } from '@/api/test/index.js';
export default {
  components: {
    searchForm,
    scrollCell
  },
  data() {
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: []
    };
  },
  // 监听导航栏删选事件
  onNavigationBarButtonTap(e) {
    if (e.float == 'right') {
      this.$refs.searchFilter.open();
    }
  },
  methods: {
    scrollCellClick(i) {
      uni.navigateTo({
        url: `/pages/vehicle-inspection/vehicle-detail`
      });
    },
    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = { t: new Date().getTime() };
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  // background-color: $uni-bg-color-page;
  overflow: hidden;
}
.icon {
  font-size: 48rpx;
}
</style>
