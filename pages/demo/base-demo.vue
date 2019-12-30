<template>
  <view>
    <!-- 搜索 -->
    <view class="top-filter">
      <TopFilter></TopFilter>
    </view>
    <!-- 列表 -->
    <BaseScroll :top="100" :fetchApi="fetchApi" :fetchParams="fetchParams" @listChange="arr=>{this.dataSource = arr}">
      <view @click="scrollCellClick" v-for="(data, i) in dataSource" :key="i">
        <ScrollCell :cell="data"></ScrollCell>
      </view>
    </BaseScroll>
  </view>
</template>

<script>
  /**
   * @Author: zhoujie
   * @Date: 2019-06-20 10:00:00
   * @Last Modified: 2019-06-20 10:00:00 zhoujie
   **/
  import BaseScroll from '@/components/base-scroll/base-scroll.vue'
  import {
    AjaxScrollData
  } from "@/api/test/index.js";
  import TopFilter from "./components/TopFilter";
  import ScrollCell from './components/ScrollCell.vue'

  export default {
    components: {
      TopFilter,
      BaseScroll,
      ScrollCell
    },
    data() {
      return {
        fetchApi: AjaxScrollData,
        fetchParams: {},
        dataSource: [],
      };
    },
    methods: {
      // 列表点击事件
      scrollCellClick(cell) {
        console.log("cellClick", cell);
        uni.navigateTo({
          url: '/pages/demo/detail-demo'
        });
      }
    }
  };
</script>

<style lang="scss">
  .menu {
    height: 100rpx;
  }
</style>
