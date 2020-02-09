<template>
  <MPage ref="MPage" type="primary">
    <search-filter ref="searchFilter">
      <SearchForm @confirm="searchFormConfirm"></SearchForm>
    </search-filter>
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
      <view style="padding: 20rpx;">
        <ScrollCell
          @click="scrollCellClick(data)"
          v-for="(data, i) in dataSource"
          :key="i"
          :cell="data"
        ></ScrollCell>
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
  mounted() {},
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 50 + 'px';
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

</style>
