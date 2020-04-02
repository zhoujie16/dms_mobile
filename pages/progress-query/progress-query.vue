<template>
  <!-- 进度查询 -->
  <MPage ref="MPage" title="进度查询">
    <search-filter ref="searchFilter">
      <view slot="panel" class="panel-box">
        <view v-for="(item, index) in itemList" :key="index" @click="changeIndex(item,index)">
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
      <view slot="form">
        <SearchForm 
          :wxlxSelect="wxlxSelect" 
          :serviceAdvisorList="serviceAdvisorList"
          :technicianList="technicianList"
          @confirm="conformSearch">
        </SearchForm>
      </view>
    </search-filter>
    <!-- <view class="refresh">已为您刷新。。。条信息</view> -->
    <view class="wrap">
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
        <view slot="scroll">
          <scroll-cell
            @click.native="scrollCellClick(data)"
            v-for="(data, i) in dataSource"
            :key="i"
            :cell="data"
            :activeindex="activeindex"
            :serviceAdvisorList='serviceAdvisorList'
          ></scroll-cell>
        </view>
      </BaseScroll>
    </view>
  </MPage>
</template>

<script>
// import { AjaxScrollData } from '@/api/test/index.js';
import { progressQueryAll, findSubmitCarStatus } from '@/api/progress-query/index.js';
import SearchForm from '@/pages/progress-query/components/search-form.vue';
import ScrollCell from '@/pages/progress-query/components/scroll-cell.vue';
// import { dictionary } from '@/common/dictMixin.js';
import dictCode from '@/common/dict/dictCode.js';

export default {
  components: {
    SearchForm,
    ScrollCell
  },
  // mixins: [dictionary],
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 50 + 'px';
    return {      
      activeindex:0,
      isFolding:true,
      deliveredVehicleStatus: '80011002', // 交车状态
      itemList:[
        {
          id: '80011002',
          title:'未交车',
          count:0
        },
        {
          id: '80011001',
          title:'已交车',
          count:0
        },
      ],
      // fetchApi: AjaxScrollData,
      fetchApi: progressQueryAll,
      fetchParams: {
        
      },
      dataSource: [],
      wxlxSelect: [],  // 维修类型列表
      serviceAdvisorList: [],  // 服务顾问
      technicianList: [],   // 指定技师
    };
  },
  onReady() {
    this.getServiceAdvisorList();
    this.queryStatusCount();
    this.getRepairTypeList()
  },
  methods: {
    //获取列表
    async getServiceAdvisorList() {
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
      // console.log(this.serviceAdvisorList,'this.serviceAdvisorList')
      //服务技师
      let technician = { role: dictCode.TECHNICIAN , companyId: this.$auth.getCompanyId()};
      // console.log(technician,'technician')
      this.technicianList = await this.$auth.queryServiceAdvisor(technician);
     },
     
     // 获取维修类型
     async getRepairTypeList() {
       this.wxlxSelect = await this.$auth.getRepairTypeList()
     },
     
     
     conformSearch(params){
       this.fetchParams = {
         ...params,
         t: new Date().getTime()
       };
       this.$refs.searchFilter.close();
       this.queryStatusCount();
     },
     
     //统计数量
     async queryStatusCount() {
       let res = await findSubmitCarStatus(this.fetchParams);
       console.log(res, '统计数量');
       this.itemList[0].count=res[1].data.undeliveredVehicle;
       this.itemList[1].count=res[1].data.deliveredVehicle;
     },

    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = {
        t: new Date().getTime()
      };
    },
    changeIndex(item,index){
      this.activeindex= index;
      this.dataSource = [];
      this.fetchParams.deliveredVehicleStatus = item.id;
      this.fetchParams = { ...this.fetchParams };
    },
    scrollCellClick(data){
      // this.$emit('click')
      uni.navigateTo({
        url: `/pages/progress-query/repair-check?orderNum=${data.roNo}&activeindex=${this.activeindex}&roStatus=${data.roStatus}&completeTag=${data.completeTag}`
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .wrap {
    margin-top: 84rpx;
  }
  .panel-box{
    display: flex;
    flex:3;
    .panel-tab{
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
    .panel-tab-pressed{
      width: 140rpx;
      height: 55rpx;
      line-height: 55rpx;
      border-radius: $uni-m-border-radius-b4;
      background-color: $uni-m-color-c11;
      color: $uni-m-color-cwhite;
      text-align: center;
      margin-left: 30rpx;
      margin-top: 20rpx;
    }
  }
  .wrap{
    // margin-top: 20rpx;
  }
.refresh{
  height: 60rpx;
  line-height: 60rpx;
  background-color: $uni-m-color-c11;
  color: $uni-m-color-cwhite;
  text-align: center;
  font-size: $uni-m-font-size-f4;
}
</style>
