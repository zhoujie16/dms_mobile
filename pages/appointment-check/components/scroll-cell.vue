<template>
  <view class="list-cell-wrap">
    <view class="list-cell-wrap-inner">
      <view class="list-cell-title">
        <view class="left">
          <text class="vin">{{ cell.license }}</text>
          <text class="name">{{ cell.ownerName ? cell.ownerName : '未知' }}</text>
        </view>
        <view class="right">{{ cell.bookingComeTime }}</view>
      </view>
      <view class="list-cell-content">
        <view class="box">
          <view class="label">预约单号</view>
          <view>{{ cell.bookingOrderNo }}</view>
        </view>
        <view class="box">
          <view class="label">服务顾问</view>
          <view>{{ $auth.getRoleName(cell.serviceAdvisor, serviceAdvisorList) }}</view>
        </view>
        <view class="box" v-if="activeindex == 1">
          <view class="label">工单号</view>
          <view>{{ cell.roNo }}</view>
        </view>
        <view class="box">
          <view class="label">联系电话</view>
          <view>{{ cell.contactorPhone }}</view>
        </view>
        <view class="phone">
          <image @click.native="callClick(cell.contactorPhone)" src="/static/image/dianhua2.svg" mode="scaleToFill" class="img"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { searchRoleByCode } from '@/api/util/index.js';
export default {
  components: {},
  name: 'list-cell-wrap',
  props: {
    cell: Object,
    activeindex: {
      type: Number,
      default: 0
    },
    serviceAdvisorList: Array
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
    cellClick() {
      this.$emit('click');
    },
    callClick(phone){
      uni.makePhoneCall({
        phoneNumber: phone //仅为示例
      });
    }
    // getServiceAdvisorName(code) {

    //   let item = this.serviceAdvisorList.find(x => x.value == code);

    //   return item == undefined ? '未知' : item.text;
    // }
  }
};
</script>

<style lang="scss">
.list-cell-wrap {
}

.list-cell-wrap-inner {
  // width: 100%;
  border-radius: $uni-m-border-radius-b2;
  overflow: hidden;
  background-color: #ffffff;
  padding: 26rpx 30rpx;
  margin: 20rpx;
}
.list-cell-title {
  display: flex;
  border-bottom: 1rpx solid $uni-m-color-c4-2;
  .left {
    flex: 1;
    margin-bottom: 20rpx;
    .vin {
      font-weight: 800;
      font-size: $uni-m-font-size-f2;
    }
    .name {
      display: inline-block;
      margin-left: 20rpx;
      border: 2rpx dashed $uni-m-color-c3;
      background-color: $uni-m-color-c4;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
  }
  .right {
    color: $uni-m-color-c12;
    margin-bottom: 20rpx;
  }
}
.list-cell-content {
  margin-top: 10rpx;
  position: relative;
  .box {
    display: flex;
    height: 60rpx;
    line-height: 60rpx;
    .label {
      flex: 0 0 130rpx;
      color: $uni-m-color-c2;
    }
  }
  .phone {
    position: absolute;
    width: 70rpx;
    height: 70rpx;
    bottom: 40rpx;
    right: 30rpx;
    .img {
      width: 70rpx;
      height: 70rpx;
    }
  }
}
</style>
