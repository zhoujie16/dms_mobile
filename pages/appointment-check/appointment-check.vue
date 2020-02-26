<template>
  <!-- 预约检查 -->
  <MPage ref="MPage">
    <search-filter ref="searchFilter">
      <view slot="panel" class="panel-box">
        <view v-for="(item,index) in itemList" :key="index" @click="changeIndex(index)">
          <view :class="[{'panel-tab-pressed':activeindex==index},{'panel-tab':activeindex!==index}]">{{item.title}}<text>{{item.count}}</text></view>
        </view>
      </view>
      <view slot="form">
        <SearchForm></SearchForm>
      </view>
    </search-filter>
    <!-- <view class="refresh">已为您刷新三条信息</view> -->
    <BaseScroll
      :top="100"
      :fetchApi="fetchApi"
      :fetchParams="fetchParams"
      @listChange="
        arr => {
          this.dataSource = [1,2,3,4];
        }
      "
    >
    <view slot="scroll" class="wrap">
        <scroll-cell></scroll-cell>
      
    </view>
      </BaseScroll>
     
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import SearchForm from '@/pages/appointment-check/components/search-form.vue';
import ScrollCell from '@/pages/appointment-check/components/scroll-cell.vue';

export default {
  components: {
    SearchForm,
    ScrollCell
  },
  data() {
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: [],
      activeindex:0,
      isFolding:true,
      itemList:[
        {
          title:'未进厂',
          count:0
        },
        {
          title:'已进厂',
          count:4
        },
        {
          title:'已取消',
          count:3
        },
      ]
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
    },
    changeIndex(index){
      this.activeindex= index;
    }
  }
};
</script>

<style lang="scss" scoped>
  .panel-box{
    display: flex;
    flex:3;
    .panel-tab{
      width: 140rpx;
      height: 40rpx;
      line-height: 40rpx;
      border-radius: $uni-m-border-radius-b1;
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
      border-radius: $uni-m-border-radius-b1;
      background-color: $uni-m-color-c11;
      color: $uni-m-color-cwhite;
      text-align: center;
      margin-left: 30rpx;
      margin-top: 20rpx;
    }
  }
  .wrap{
    margin-top: 20rpx;
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
