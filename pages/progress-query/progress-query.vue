<template>
  <!-- 进度查询 -->
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
    <view class="refresh">已为您刷新。。。条信息</view>
    <view class="wrap">
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
            <ScrollCell :cell="data"></ScrollCell>
          </view>
        </view>
      </BaseScroll>
    </view>
  </MPage>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import SearchForm from '@/pages/progress-query/components/search-form.vue';
import ScrollCell from '@/pages/progress-query/components/scroll-cell.vue';

export default {
  components: {
    SearchForm,
    ScrollCell
  },
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 50 + 'px';
    return {      
      activeindex:0,
      isFolding:true,
      itemList:[
        {
          title:'未交车',
          count:4
        },
        {
          title:'已交车',
          count:3
        },
      ],
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
