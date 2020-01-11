<template>
  <!-- 预约检查 -->
  <MPage ref="MPage">
    <search-filter ref="searchFilter">
      <SearchForm @confirm="searchFormConfirm"></SearchForm>
    </search-filter>
    <SwiperPage :fetchParams="fetchParams"></SwiperPage>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from '@/pages/customer-reception/components/scroll-cell.vue';
import SwiperPage from '@/pages/appointment-check/components/swiper-page.vue';
import SearchForm from '@/pages/appointment-check/components/search-form.vue';

export default {
  components: {
    SwiperPage,
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
      uni.navigateTo({
        url: '/pages/customer-reception/customer-detail'
      });
    },
    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = {
        t: new Date().getTime()
      };
    }
  }
};
</script>

<style lang="scss">

</style>
