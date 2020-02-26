<template>
  <MPage ref="MPage" type="primary">
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
        <view v-for="(data, i) in dataSource" :key="i"><RemindCell :cell="data"></RemindCell></view>
      </view>
    </BaseScroll>
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
      dataSource: []
    };
  },
  methods: {
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

<style lang="scss"></style>
