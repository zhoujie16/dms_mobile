<template>
  <MPage ref="MPage">
    <search-filter ref="searchFilter">
      <SearchForm @confirm="searchFormConfirm"></SearchForm>
    </search-filter>
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
  </MPage>
</template>

<script>
/**
 * @Author: zhoujie
 * @Date: 2019-06-20 10:00:00
 * @Last Modified: 2019-06-20 10:00:00 zhoujie
 **/

import { AjaxScrollData } from '@/api/test/index.js';
import SearchForm from './components/search-form.vue';
import ScrollCell from './components/scroll-cell.vue';
export default {
  components: {
    ScrollCell,
    SearchForm
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
        url: '/pages/demo/detail-demo'
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
