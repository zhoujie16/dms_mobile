<template>
  <view class="list-cell-wrap">
    <view class="list-cell-wrap-inner" @click="cellClick">
      <view class="list-cell-title">
        <view class="left">
          <text class="state">{{ cell.roStatus ? $auth.getRoleName(cell.roStatus,$dict.createDictList('8049'))  : '无' }}</text>
          <text class="vin">{{ cell.license ? cell.license : '未知' }}</text>
        </view>
        <view class="right">{{ cell.endTimeSupposed }}</view>
      </view>
      <view class="list-cell-content">
        <view class="box">
          <view class="label">车主名称</view>
          <view>{{ cell.ownerName ? cell.ownerName : '未知' }}</view>
        </view>
        <view class="box">
          <view class="label">工单编号</view>
          <view>{{ cell.roNo }}</view>
        </view>
        <view class="box">
          <view class="label">服务顾问</view>
          <view>{{ $auth.getRoleName(cell.serviceAdvisor, serviceAdvisorList) }}</view>
        </view>
        <view class="box">
          <view class="label">服务技师</view>
          <view>{{ $auth.getRoleName(cell.chiefTechnician, technicianList) }}</view>
        </view>
        <view class="box">
          <view class="font-color">车辆检查数据是否录入</view>
          <view :class="cell.isInput == '12781001' ? 'record' : 'record-red'">
            {{ cell.isInput ? $auth.getRoleName(cell.isInput, $commonDict.RECORD_LIST) : '无' }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  components: {},
  name: 'list-cell-vehicle-inspection',
  props: {
    cell: Object,
    serviceAdvisorList:Array,
    technicianList:Array
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
   
  }
};
</script>

<style lang="scss" scoped>
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
    .state {
      display: inline-block;
      margin-right: 20rpx;
      border: 2rpx dashed $uni-m-color-c12;
      background-color: $uni-m-color-c11;
      color: $uni-m-color-cwhite;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
    .vin {
      font-weight: 800;
      font-size: $uni-m-font-size-f2;
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
    .font-color {
      color: $uni-m-color-c2;
    }
    .record {
      display: inline-block;
      margin-left: 20rpx;
      color: $uni-m-color-c15;
    }
    .record-red {
      display: inline-block;
      margin-left: 20rpx;
      color: $uni-m-color-c14-pressed;
    }
  }
}
</style>
