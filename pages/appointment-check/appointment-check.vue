<template>
  <!-- 预约检查 -->
  <MPage ref="MPage">
    <search-filter ref="searchFilter" :height="700">
      <view slot="panel" class="panel-box">
        <view v-for="(item, index) in itemList" :key="index" @click="changeIndex(item, index)">
          <view
            :class="[
              { 'panel-tab-pressed': activeindex == index },
              { 'panel-tab': activeindex !== index }
            ]"
          >
            {{ item.title }}
            <text>{{ item.count }}</text>
          </view>
        </view>
      </view>
      <view slot="form"><SearchForm @confirm="conformSearch"></SearchForm></view>
    </search-filter>
    <!-- <view class="refresh">已为您刷新三条信息</view> -->
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
      <view slot="scroll" class="wrap">
       <scroll-cell
         @click.native="scrollCellClick(data)"
         v-for="(data, i) in dataSource"
         :key="i"
         :cell="data"
         :activeindex="activeindex"
         :serviceAdvisorList="serviceAdvisorList"
       ></scroll-cell>
      </view>
    </BaseScroll>
    <!-- <scroll-cell
     @click.native="scrollCellClick"
      :activeindex="activeindex"
    ></scroll-cell> -->
  </MPage>
</template>

<script>
import { queryAllAppointment, queryStatusNum } from '@/api/appointment-check/index.js';
import SearchForm from '@/pages/appointment-check/components/search-form.vue';
import ScrollCell from '@/pages/appointment-check/components/scroll-cell.vue';
// import { dictionary } from '@/common/dictMixin.js';
import dictCode from '@/common/dictCode.js';
import { searchRoleByCode } from '@/api/util/index.js';
// import commonDict from '@/common/commonDIct.js'
export default {
  components: {
    SearchForm,
    ScrollCell
  },
  // mixins:[dictionary],
  data() {
    return {
      fetchApi: queryAllAppointment,
      fetchParams: {
        bookingOrderStatus: '80401001'
      },
      dataSource: [],
      activeindex: 0,
      isFolding: true,
      itemList: [
        {
          id: '80401001',
          title: '未进厂',
          count: 0
        },
        {
          id: '80401002',
          title: '已进厂',
          count: 0
        },
        {
          id: '80401005',
          title: '已取消',
          count: 0
        }
      ],
      serviceAdvisorList: []
    };
  },
  onReady() {
    // this.queryServiceAdvisor();
    this.getServiceAdvisorList();
    this.queryStatusCount();
  },
  methods: {
    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
    conformSearch(params){
      this.fetchParams = {
        ...params,
        t: new Date().getTime()
      };
    },
    //统计数量
    async queryStatusCount() {
      let res = await queryStatusNum(this.fetchParams);
      console.log(res, '统计数量');
      this.itemList[0].count=res.data.unEnter;
      this.itemList[1].count=res.data.entered;
      this.itemList[2].count=res.data.cancelled;
    },
    changeIndex(item, index) {
      this.activeindex = index;
      this.dataSource = [];
      this.fetchParams.bookingOrderStatus = item.id;
      this.fetchParams = { ...this.fetchParams };
    },
    // 列表点击事件
    async scrollCellClick(cell) {
      console.log('cellClick', cell);
      await uni.navigateTo({
        url: `/pages/appointment-check/appointment-detail?bookingOrderNo=${cell.bookingOrderNo}&activeindex=${this.activeindex}`
      });
    },
    //获取服务列表
    async getServiceAdvisorList() {
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-box {
  display: flex;
  flex: 3;
  .panel-tab {
    width: 140rpx;
    height: 40rpx;
    line-height: 40rpx;
    border-radius: $uni-m-border-radius-b4;
    background-color: $uni-m-color-c5;
    color: $uni-m-color-c1;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 30rpx;
  }
  .panel-tab-pressed {
    width: 140rpx;
    height: 55rpx;
    line-height: 55rpx;
    border-radius: $uni-m-border-radius-b8;
    background-color: $uni-m-color-c11;
    color: $uni-m-color-cwhite;
    text-align: center;
    margin-left: 30rpx;
    margin-top: 20rpx;
  }
}
.wrap {
  margin-top: 20rpx;
}
.refresh {
  height: 60rpx;
  line-height: 60rpx;
  background-color: $uni-m-color-c11;
  color: $uni-m-color-cwhite;
  text-align: center;
  font-size: $uni-m-font-size-f4;
}
</style>
