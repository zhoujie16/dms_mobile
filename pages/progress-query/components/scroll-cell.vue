<template>
  <view class="list-cell-wrap">
    <view class="list-cell-wrap-inner">
      <view class="list-cell-title" @click="cellTitleClick">
        <view class="name">
          <text class="radius"></text><text class="nowText">在修</text>张全蛋
         </view>
        <view class="info">
          <view class="info-lab">沪ADC10083</view>
          <view class="info-text">2020-01-01 16:16</view>
        </view>
      </view>
      <view class="list-cell-content" v-if="isShowDetail" @click="cellClick">
        <view class="info-item">
          <view class="info-item-lab">工单号：</view>
          <view class="info-item-text">YJ2001020002</view>
        </view>
        <view class="info-item">
          <view class="info-item-lab">车型：</view>
          <view class="info-item-text">全新福克斯三厢 1.6MT</view>
        </view>
        <view class="info-item">
          <view class="info-item-lab">服务顾问：</view>
          <view class="info-item-text">王大锤</view>
        </view>
        <view class="info-item">
          <view class="info-item-lab">技师：</view>
          <view class="info-item-text">王大锤</view>
        </view>
        <view class="info-item">
          <text class="customer">联系客户</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  name: 'list-cell-wrap',
  props: {
    cell: Object
  },
  mounted() {
    console.log('list-cell-wrap', 'mounted');
  },
  data() {
    return {
      isShowDetail: false
    };
  },
  methods: {
    change() {},
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    },
    cellClick(){
      console.log(111111);
      uni.navigateTo({
        url:`/pages/progress-query/repair-check`
      })
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss">
.list-cell-wrap {
}

.list-cell-wrap-inner {
  width: 100%;
  border-radius: 10rpx;
  overflow: hidden;
  background-color: #ffffff;
  margin-bottom: 30rpx;
}
.list-cell-title {
  padding: 10rpx 20rpx;
  .radius {
    height: 30rpx;
    width: 30rpx;
    margin-top: 10rpx;
    display: inline-block;
    background-color: #FF0000;
    border-radius: 50%;
    margin-right: 20rpx;
  }
  .nowText {
    border: 1px solid #C0C0C0;
    margin-right: 10rpx;
  }
  .name {
    padding: 10rpx 0;
    font-weight: 500;
  }
  .info {
    color: #999999;
    padding: 10rpx 0;
    display: flex;
    .info-lab {
      flex: 0 0 200rpx;
    }
    .info-text {
      flex: 1 1 auto;
      text-align: right;
    }
  }
}
.list-cell-content {
  background-color: #eeeeee;
  padding: 10rpx 20rpx;
  .info-item {
    padding: 10rpx 0;
    display: flex;
    .info-item-lab {
      flex: 0 0 200rpx;
      color: #999999;
    }
    .info-item-text {
      flex: 1 1 auto;
    }
  }
  .customer{
    width: 70%;
    height: 88rpx;
    line-height: 88rpx;
    margin-left: 80rpx;
    text-align: center;
    background-color: #2B4D86;
    border-radius: 5rpx;
    color: #FFFFFF;
  }
}

</style>
