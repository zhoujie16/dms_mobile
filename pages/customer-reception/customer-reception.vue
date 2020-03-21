<template>
  <MPage ref="MPage" type="primary">
    <SearchFilter ref="searchFilter" :isShow="false">
      <view slot="form"><searchForm :serviceAdvisorList="serviceAdvisorList" @confirm="searchFormConfirm"></searchForm></view>
    </SearchFilter>
    <!-- <BaseScroll
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
    <view class="cell-pad">
      <MSwipeCell
        :disabled="false"
        :options="[{ text: '删除', type: 'warn' }]"
        @optionClick="optionClick"
        @change="swipeChange"
      >
        <template v-slot:cell>
          <scrollCell @click="scrollCellClick(1)"></scrollCell>
        </template>
      </MSwipeCell>
    </view>

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
import dictCode from '@/common/dictCode.js';
export default {
  components: {
    scrollCell,
    searchForm
  },
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 20 + 'px';
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: [],
      serviceAdvisorList: []
    };
  },
  // 监听导航栏删选事件
  onNavigationBarButtonTap(e) {
    if (e.float == 'right') {
      this.$refs.searchFilter.open();
    }
  },
  mounted() {
    this.getServiceAdvisorList();
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
    },
    //左滑删除
    optionClick({ text, index }) {
      console.log('点击滑动区域按钮', { text, index });
      this.SHOW_TOAST(text);
    },
    swipeChange(state) {
      console.log('状态', state);
    },
    
    //服务顾问列表
    async getServiceAdvisorList() {
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
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
  font-size: 48rpx;
}
.cell-pad {
  margin: 20rpx 0;
}
</style>
