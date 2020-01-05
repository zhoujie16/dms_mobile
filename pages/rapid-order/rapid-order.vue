<template>
  <!-- 快速工单 -->
  <view class="page-wrap">
    <NavBarSelect>
      <NavBarSelectItem title="交车"></NavBarSelectItem>
      <NavBarSelectItem title="开单日期"></NavBarSelectItem>
      <NavBarSelectItem @click="showSearchFilter" title="高级筛选"></NavBarSelectItem>
    </NavBarSelect>
    <view class="search-filter">
      <search-filter ref="searchFilter">
        <!-- <SearchForm @confirm="searchFormConfirm"></SearchForm> -->
      </search-filter>
    </view>
    <MFadBtn @click.native="addOrderBtnClick">新建工单</MFadBtn>
    <!-- 弹窗内容 -->
    <MPopup ref="mPopup_addorder" type="center" title="新建工单">
      <OrderCell v-for="item in [1, 2]" @click.native="orderCellClick"></OrderCell>
    </MPopup>
  </view>
</template>

<script>
import OrderCell from './components/order-cell.vue';
export default {
  components: {
    OrderCell
  },
  data() {
    return {};
  },
  methods: {
    // 新建工单按钮
    addOrderBtnClick() {
      this.$refs.mPopup_addorder.open();
    },
    // 工单点击按钮
    async orderCellClick() {
      await uni.navigateTo({
        url: '/pages/rapid-order/order-detail'
      });
    },
    showSearchFilter() {
      this.$refs.searchFilter.showDrawer();
    }
  }
};
</script>

<style lang="scss">
.search-filter {
  height: 0;
  overflow: hidden;
}
</style>
