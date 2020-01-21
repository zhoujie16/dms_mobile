<template>
  <MPage ref="MPage">
    <view class="page-wrap">
      <NavDateRangePicker @change="dateRangeChange"></NavDateRangePicker>
      <view class="menu-wrap">
        <uni-grid :column="2" :showBorder="false" :highlight="true" @change="detailUrl">
          <uni-grid-item v-for="(item, index) in list" :key="index">
            <view class="wrap-text">{{ item.title }}</view>
          </uni-grid-item>
        </uni-grid>
      </view>

      <!-- <view class="box" @click="detailUrl">
      预约率
    </view> -->
    </view>
  </MPage>
</template>

<script>
import uniGrid from '@/libs/uni-ui/uni-grid/uni-grid.vue';
import uniGridItem from '@/libs/uni-ui/uni-grid-item/uni-grid-item.vue';
export default {
  components: {
    uniGrid,
    uniGridItem
  },
  data() {
    return {
      list: [
        {
          title: '预约率'
        },
        {
          title: '保养提醒率'
        },
        {
          title: '准时完工率'
        },
        {
          title: '服务回访率'
        },
        {
          title: '快保工单权重'
        },
        {
          title: '快保客户等待时间'
        }
      ]
    };
  },
  methods: {
    detailUrl() {
      uni.navigateTo({
        url: `/pages/qcReport/qcReport-detail`
      });
    },
    dateRangeChange() {}
  }
};
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  background-color: $uni-bg-color-page;
  .wrap-text {
    text-align: center;
    line-height: 30vh;
    color: $uni-text-color-inverse;
  }
}
</style>
