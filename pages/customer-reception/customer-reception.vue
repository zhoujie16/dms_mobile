<template>
  <MPage ref="MPage" type="primary">
    <SearchFilter ref="searchFilter">
      <searchForm @confirm="searchFormConfirm"></searchForm>
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
