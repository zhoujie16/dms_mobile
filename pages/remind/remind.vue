<template>
  <MPage ref="MPage" type="primary">
    <view class="top-box">
      <view class="left">
        <uni-icons
          :type="isSelect ? 'circle-filled' : 'circle'"
          :color="isSelect ? '#1371F7' : ''"
          size="21"
          @click="selectAllClick"
        ></uni-icons><text>全选</text>
      </view>
      <view class="right">
        <m-button type="primary" size="mini">删除</m-button>
      </view>
    </view>
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
        <view v-for="(data, i) in dataSource" :key="i"><RemindCell :cell="data"></RemindCell></view>
      </view>
    </BaseScroll> -->
	  <view v-for="(data, i) in dataSource" :key="i"><RemindCell :cell="data"></RemindCell></view>
  </MPage>
</template>

<script>
import RemindCell from './components/remind-cell.vue';
import { AjaxScrollData } from '@/api/test/index.js';

export default {
  components: {
    RemindCell
  },
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight + 'px';
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: [1,2],
      isSelect:true,
    };
  },
  methods: {
    // 全选
    selectAllClick(){
      this.isSelect = !this.isSelect
    },
    // 列表点击事件
    scrollCellClick(cell) {
      console.log('cellClick', cell);
      return;
      uni.navigateTo({
        url: '/pages/demo/detail-demo'
      });
    },
    onNavigationBarButtonTap(val) {
      console.log(val.index);
      // 删除的按钮调用
      if (val.index == 1) {
        console.log('第一个按钮');
      }
      //全选的按钮调用
      if (val.index == 0) {
        console.log('第二个按钮');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .top-box{
    background: $uni-m-color-cwhite;
    display: flex;
    padding:10rpx 40rpx;
    .left{
      flex: 1;
      
    }
  }
</style>
