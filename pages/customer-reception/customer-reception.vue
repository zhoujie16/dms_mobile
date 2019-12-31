<template>
  <view class="page-wrap">
    <SearchFilter ref="searchFilter">
      <searchForm @confirm="searchFormConfirm"></searchForm>
    </SearchFilter>
    <BaseScroll
      :top="100"
      :fetchApi="fetchApi"
      :fetchParams="fetchParams"
      @listChange="
        arr => {
          this.dataSource = arr;
        }
      "
    >
      <view
        class="base-scroll-inner"
        @click="scrollCellClick"
        v-for="(data, i) in dataSource"
        :key="i"
      >
        <ScrollCell :cell="data"></ScrollCell>
      </view>
    </BaseScroll>
  </view>
</template>

<script>
// import searchFilter from '@/components/search-filter/search-filter.vue'
import searchForm from '@/pages/customer-reception/components/search-form.vue';
import { AjaxScrollData } from '@/api/test/index.js';
import scrollCell from '@/pages/customer-reception/components/scroll-cell.vue';

export default {
  components: {
    // searchFilter,
    scrollCell,
    searchForm
  },
  data() {
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: []
    };
  },
  methods: {
    // 列表点击事件
    scrollCellClick(cell) {
      console.log('cellClick', cell);
      return;
      uni.navigateTo({
        url: '/pages/customer-reception/customer-detail'
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
  background-color: $uni-bg-color-page;
}
</style>
