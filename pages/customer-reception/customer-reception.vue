<template>
  <MPage ref="MPage" type="primary">
    <SearchFilter ref="searchFilter" :isShow="false">
      <view slot="form">
        <searchForm :serviceAdvisorList="serviceAdvisorList" @confirm="conformSearch"></searchForm>
      </view>
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
      <view slot="scroll" style="padding: 20rpx;">
        <view v-for="(data, i) in dataSource" :key="i">
          <!-- <scrollCell @click="scrollCellClick(data)"></scrollCell> -->
          <view class="cell-pad">
            <MSwipeCell
              :disabled="false"
              :options="[{ text: '删除', type: 'warn' }]"
              @optionClick="optionClick($event,data)"
              @change="swipeChange"
            >
              <template v-slot:cell>
                <scrollCell @click="scrollCellClick(data)" :cell="data"></scrollCell>
              </template>
            </MSwipeCell>
          </view>
        </view>
      </view>
    </BaseScroll>
    <!-- <MSwipeCell
   :disabled="false"
   :options="[{ text: '删除', type: 'warn' }]"
   @optionClick="optionClick(data)"
   @change="swipeChange"
 >
   <template v-slot:cell>
     <scrollCell @click="scrollCellClick(data)"></scrollCell>
   </template>
 </MSwipeCell> -->

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
import { queryAllPreview, deletePreview } from '@/api/customer-reception/index.js';
import searchForm from '@/pages/customer-reception/components/search-form.vue';
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
      fetchApi: queryAllPreview,
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
        url: `/pages/customer-reception/customer-detail?fromPage=detail&yjNo=${cell.yjNo}`
      });
    },
    // 表单查询
    conformSearch(params) {
     this.fetchParams = {
       ...params,
       t: new Date().getTime()
     };
      this.$refs.searchFilter.close();
    },
    // 新增客户接待
    async addBtnClick() {
      await uni.navigateTo({
        url: '/pages/customer-reception/customer-add'
      });
    },
    //左滑删除
    async optionClick(e,data) {
      
      if(e.index==0){
        const res = await this.SHOW_MODAL({
          title: '确认删除吗？',
          content: '',
          showCancel: true, // 是否显示取消按钮，默认为 true
          cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
          confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
        });
        if( res=='confirm'){
          //// 交互结果 确认
          let params ={
            yjNo:data.yjNo
          }
          let res1 = await deletePreview(params);
          this.fetchParams = {
            ...this.fetchParams,
          };
        }
        
        console.log('showModal_res', res=='confirm');
       
      }
      // console.log('点击滑动区域按钮', { text, index });
      // this.SHOW_TOAST(text);
    },
    swipeChange(state) {
      // console.log('状态', state);
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
