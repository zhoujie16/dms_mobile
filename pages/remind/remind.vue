<template>
  <MPage ref="MPage" type="primary">
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
      <view style="padding: 20rpx;">
        <RemindCell
          @click="scrollCellClick(data)"
          v-for="(data, i) in dataSource"
          :key="i"
          :cell="data"
        ></RemindCell>
      </view>
    </BaseScroll> -->
    <view style="padding: 20rpx;">
      <RemindCell
        @click="scrollCellClick(data)"
        v-for="(data, i) in dataSource"
        :key="i"
        :cell="data"
      ></RemindCell>
    </view>
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
      dataSource: [1,2,3]
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
