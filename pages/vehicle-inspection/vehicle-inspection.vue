<template>
   <MPage ref="MPage" type="primary">
	   <view class="m-status-bar"></view>
	   <!-- 自定义导航栏 -->
	   <uni-nav-bar left-icon="arrowleft" title="车辆预检" @clickLeft="back" @clickRight="handClick">
	     <block slot="right">
	       <view><text class="m-iconfont icon">&#xe721;</text></view>
	     </block>
	   </uni-nav-bar>
  <!-- <view class="page-wrap" >
    <SearchFilter ref="searchFilter"><searchForm @confirm="searchFormConfirm"></searchForm></SearchFilter>
  
  </view> -->
  <SearchFilter ref="searchFilter" :isShow="false">
    <view slot="form"><searchForm @confirm="searchFormConfirm"></searchForm></view>
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
  <scrollCell @click="scrollCellClick(1)"></scrollCell>
  </MPage>
</template>

<script>
import searchForm from '@/pages/vehicle-inspection/components/search-form.vue';
import scrollCell from '@/pages/vehicle-inspection/components/scroll-cell.vue';
import { AjaxScrollData } from '@/api/test/index.js';
export default {
  components: {
    searchForm,
    scrollCell
  },
  data() {
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: []
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    handClick() {
      this.$refs.searchFilter.open();
    },
    scrollCellClick(i){
      uni.navigateTo({
        url: `/pages/vehicle-inspection/vehicle-detail`
      });
    },
    // 表单查询
    searchFormConfirm() {
      console.log('searchFormConfirm');
      this.$refs.searchFilter.hideDrawer();
      this.fetchParams = { t: new Date().getTime() };
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  // background-color: $uni-bg-color-page;
  overflow: hidden;
  // .container {
  //   padding: 20rpx 0 80rpx;
  //   max-height: 1200rpx;
  //   overflow: scroll;
  //   .content {
  //     background-color: #ffffff;
  //     margin: 20rpx;
  //     border-radius: 20rpx;
  //     padding: 0 20rpx;
  //     .content-top {
  //       border-bottom: 1px solid #cccccc;
  //       padding-right: 10rpx;
  //       height: 80rpx;
  //       line-height: 80rpx;
  //       font-size: 30rpx;
  //       margin-bottom: 20rpx;
  //     }
  //   }
  // }
}
// .label-color {
//   color: #777777;
// }
// .label-pad {
//   display: inline-block;
//   padding-right: 20rpx;
// }
// .flex-item {
//   width: 50%;
//   color: #17A2B8;
// }
.icon {
  font-size: 48rpx;
}
</style>
