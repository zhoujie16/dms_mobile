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
      <view class="list-cell-content" v-if="isShowDetail">
        <view  @click="cellClick">
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
        </view>
        <!-- <view class="info-item">
          <text class="customer">联系客户</text>
        </view> -->
        <view class="customer" @click="phoneClick">
          <uni-icons type="phone" color="white" size="30" style="margin-right: 20rpx;"></uni-icons>联系客户
        </view>
        <!-- <m-button type="primary" @click="phoneClick">
          <uni-icons type="phone" color="white" size="30" style="margin-right: 20rpx;"></uni-icons>联系客户
        </m-button> -->
      </view>
    </view>
    <uni-popup ref="popup" type="bottom">
      <view style="padding: 0 30rpx;margin-bottom: 55rpx;">
        <view class="text" style="margin-bottom: 15rpx;" @click="phoneCall">呼叫18583285531</view>
        <view class="text" @click="phoneClose">
          取消
        </view>
      </view>
    </uni-popup>
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
  },
  data() {
    return {
      isShowDetail: false
    };
  },
  computed: {
  },
  methods: {
    change() {},
    cellTitleClick() {      
      this.isShowDetail = !isShowDetail;
    },
    cellClick(){
      console.log(111111);
      uni.navigateTo({
        url:`/pages/progress-query/repair-check`
      })
      this.$emit('click')
    },
    phoneClick(){
      console.log(1111)
      this.$refs.popup.open();
    },
    phoneCall() {
      // let phone = this.phone;
      // console.log(phone,'phone');
      uni.makePhoneCall({
          phoneNumber: '18583285531', 
      });
    },
    phoneClose() {
      this.$refs.popup.close();
    },
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
    border: 2px solid #66AAFF;
    margin-right: 10rpx;
    padding: 0 10rpx;
    color: #66AAFF;
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
    width: 85%;
    height: 68rpx;
    line-height: 68rpx;
    margin-left: 60rpx;
    text-align: center;
    background-color: #2B4D86;
    border-radius: 5rpx;
    color: #FFFFFF;
  }
}
.text {
    height: 100rpx;
    background-color: #808080;
    border-radius: 10rpx;
    line-height: 100rpx;
    text-align: center;
  }
</style>
