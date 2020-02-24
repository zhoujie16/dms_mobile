<template>
  <MPage ref="MPage">
    <!-- 上面的表单哦哦哦哦哦 -->
    <search-filter ref="searchFilter">
      <!-- 自定义面板 -->
      <template slot="panel">
        <view class="m-flex m-justify-center m-align-center">自定义区域</view>
      </template>
      <!-- 弹窗的表单 -->
      <template slot="form">
        <FormDemo></FormDemo>
      </template>
    </search-filter>
    <!-- 下面的列表展示ooooo -->
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
        <ScrollCell
          @click="scrollCellClick(data)"
          v-for="(data, i) in dataSource"
          :key="i"
          :cell="data"
        ></ScrollCell>
      </view>
    </BaseScroll>
  </MPage>
</template>

<script>
import FormDemo from './../components/form-demo';
import ScrollCell from './../components/scroll-cell.vue';
import { AjaxScrollData } from '@/api/test/index.js';

export default {
  components: {
    FormDemo,
    ScrollCell
  },
  data() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 50 + 'px';
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: []
    };
  },
  onNavigationBarButtonTap(btn) {
    console.log('导航栏按钮点击事件', btn);
    this.$refs.searchFilter.open();
  },
  methods: {}
};
</script>

<style lang="scss"></style>
