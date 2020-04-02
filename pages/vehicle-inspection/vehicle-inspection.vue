<template>
  <MPage ref="MPage" type="primary">
    <SearchFilter ref="searchFilter" :isShow="false">
      <view slot="form">
        <searchForm  @confirm="searchFormConfirm"></searchForm>
      </view>
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
      <view slot="scroll" style="padding: 20rpx;">
        <view v-for="(data, i) in dataSource" :key="i">
          <scrollCell :cell="data" @click="scrollCellClick(data)" :serviceAdvisorList="serviceAdvisorList" :technicianList="technicianList"></scrollCell>
        </view>
      </view>
    </BaseScroll>
   <!-- <scrollCell @click="scrollCellClick(1)"></scrollCell> -->
  </MPage>
</template>

<script>
import { queryVehicleCheckList } from '@/api/vehicle-inspection/index.js';
  import dictCode from '@/common/dict/dictCode.js';
import searchForm from '@/pages/vehicle-inspection/components/search-form.vue';
import scrollCell from '@/pages/vehicle-inspection/components/scroll-cell.vue';
export default {
  components: {
    searchForm,
    scrollCell
  },
  data() {
    return {
      fetchApi: queryVehicleCheckList,
      fetchParams: {},
      dataSource: [],
      serviceAdvisorList:[],//服务顾问
      technicianList:[] //服务技师
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
    this.getTechnicianList();
  },
  methods: {
    scrollCellClick(item) {
      uni.navigateTo({
        url: `/pages/vehicle-inspection/vehicle-detail?roNo=${item.roNo}&yjNo=${item.yjNo}`
      });
    },
    // 表单查询
    searchFormConfirm(params) {
      this.fetchParams = {
        ...params,
        t: new Date().getTime()
      };
      this.$refs.searchFilter.close();
      // this.fetchParams = { t: new Date().getTime() };
    },
    //服务顾问列表
    async getServiceAdvisorList() {
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
    },
    //服务技师列表
    async getTechnicianList() {
      //服务技师
      let technician = { role: dictCode.TECHNICIAN, companyId: this.$auth.getCompanyId() };
      this.technicianList = await this.$auth.queryServiceAdvisor(technician);
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
