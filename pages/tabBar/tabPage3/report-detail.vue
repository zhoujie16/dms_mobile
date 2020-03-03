<template>
  <view class="page-warp">
    <view class="r-switch-box"><switch @change="switchChange" /></view>

    <view class="r-box" v-if="isShow">
      <text class="r-title">{{ type }}</text>
      <reportTable></reportTable>
    </view>
    <view class="r-box" v-else><reportBar :type='type'></reportBar></view>
  </view>
</template>

<script>
import reportTable from './components/report-table.vue';
import reportBar from './components/report-bar.vue';

export default {
  components: {
    reportTable,
    reportBar
  },
  data() {
    this.type = '';
    return {
      isShow: false
    };
  },
  onLoad: function(option) {
    //option为object类型，会序列化上个页面传递的参数
    this.type = option.type;
    console.log(this.type); //打印出上个页面传递的参数。
  },
  methods: {
    switchChange(e) {
      this.isShow = e.target.value;
      console.log(e.target.value);
    }
  }
};
</script>

<style lang="scss">
.page-warp {
  height: 100vh;
  background-color: $uni-m-color-white-pressed;
  .r-switch-box {
    text-align: right;
    padding: 30rpx;
  }
  .r-box {
    padding: 30rpx;
    .r-title {
      display: block;
      color: #1371F7;
      font-size: 36rpx;
      margin-bottom: 20rpx;
    }
  }
}
.swiper-page {
  height: 600rpx;
}
.swiper-item-wrap {
  height: 100%;
}
</style>
