<template>
  <view class="page-wrap">
    <MPage ref="MPage">
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
        <view style="padding: 20rpx;">
          <ScrollCell
            @click="scrollCellClick(data)"
            v-for="(data, i) in dataSource"
            :key="i"
            :cell="data"
          ></ScrollCell>
        </view>
      </BaseScroll>
      <view class="popup-group"><MFadBtn @click="addBtnClick" type="right">新增</MFadBtn></view>
    </MPage>
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
      uni.navigateTo({
        url: '/pages/customer-reception/customer-detail'
      });
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

<style lang="scss"></style>
