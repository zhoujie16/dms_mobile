<template>
  <!-- 快速工单 -->
  <MPage ref="MPage" type="primary">
    <NavBarSelect>
      <NavBarSelectItem @click="showPickerSelect" title="交车"></NavBarSelectItem>
      <NavBarSelectItem @click="showPickerDate" title="开单日期"></NavBarSelectItem>
      <NavBarSelectItem @click="showSearchFilter" title="高级筛选"></NavBarSelectItem>
    </NavBarSelect>
    <view class="search-filter">
      <search-filter ref="searchFilter">
        <SearchForm @confirm="searchFormConfirm"></SearchForm>
      </search-filter>
    </view>
    <!-- 数据列表 -->
    <view>
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
        <!-- 自行循环列表，数据源是 dataSource -->
        <view class="base-scroll-inner" style="padding: 0 20rpx;">
          <ScrollCell
            class="base-scroll-inner"
            @click="scrollCellClick"
            v-for="(data, i) in dataSource"
            :key="i"
          ></ScrollCell>
        </view>
      </BaseScroll>
    </view>
    <!-- 弹窗内容 -->
    <view class="popup-group">
      <MFadBtn @click.native="addOrderBtnClick">新建工单</MFadBtn>
      <MPopup ref="mPopup_addorder" type="center" title="新建工单">
        <OrderCell v-for="item in [1, 2]" @click.native="orderCellClick"></OrderCell>
      </MPopup>
    </view>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from './components/scroll-cell.vue';
import OrderCell from './components/order-cell.vue';
import SearchForm from './components/search-form.vue';
export default {
  components: {
    ScrollCell,
    OrderCell,
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
    searchFormConfirm() {
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
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
    },
    // 列表点击事件
    async scrollCellClick(cell) {
      console.log('cellClick', cell);
      return;
      uni.navigateTo({
        url: '/pages/demo/detail-demo'
      });
    },
    // 选择 交车状况
    async showPickerSelect() {
      const res = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'selector',
        selectList: [{ label: '是', value: '1' }, { label: '否', value: '2' }],
        defaultVal: '1'
      });
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
    // 选择 开单日期
    async showPickerDate() {
      const res_date = await this.$root.$refs.MPage.MDatePickerPopup.showPicker();
      console.log('选择的日期', res_date);
      this.fetchParams = {
        t: new Date().getTime()
      };
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
