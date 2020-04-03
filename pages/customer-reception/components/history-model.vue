<template>
  <!-- 维修历史 -->
  <view class="content-warp">
    <view class="m-break-space"></view>
    <scroll-view class="scroll-view-h" :style="{ maxHeight: '900rpx' }" scroll-y>
      <view class="item-warp" v-for="(list, index1) in formData" :key="index1">
        <view class="wx-warp">
          <view class="box">
            <view class="wx-label">服务顾问:</view>
            <view class="wx-data">{{ list.serviceAdvisor }}</view>
          </view>
          <view class="box">
            <view class="wx-label">工单日期:</view>
            <view class="wx-data">{{ list.createdAt }}</view>
          </view>
          <view class="box">
            <view class="wx-label">维修项目:</view>
            <view class="wx-data" v-for="(item, index) in list.roLabourList" :key="index">
              <text>{{ item }};</text>
            </view>
          </view>
          <view class="box">
            <view class="left">
              <view class="wx-label">
                <text class="red">*</text>
                里程:
              </view>
              <view class="wx-data">{{ list.inMileage }}</view>
            </view>
            <view class="right">
              <view class="wx-label">
                <text class="red">*</text>
                金额:
              </view>
              <view class="wx-data">{{ list.labourAmount }}</view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { queryRepairHistory } from '@/api/customer-reception/index.js';

export default {
  props: {
    vin: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      formData: []
    };
  },
  mounted() {
    this.queryHistory();
  },
  methods: {
    async queryHistory() {
      let params = {
        vin: this.vin
      };
      let [status, res] = await queryRepairHistory(params);
      this.formData = res.data;
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.content-warp {
  height: 70vh;
  background: $uni-m-color-cwhite;
  padding-bottom: 300rpx;
  .item-warp {
    margin: 10rpx 0;
    padding: 10rpx 30rpx;
    .wx-warp {
      padding: 20rpx;
      background: $uni-m-color-c4-2;
      border-radius: $uni-m-border-radius-b2;
      .box {
        display: flex;

        .left {
          flex: 1;
          display: flex;
        }
        .right {
          flex: 1;
          display: flex;
        }
      }
    }
  }
}
.wx-label {
  color: $uni-m-color-c3-2;
  flex: 0 0 130rpx;
  line-height: 50rpx;
  text-align: right;
  .red {
    color: $uni-m-color-c14-pressed;
  }
}
.wx-data {
  flex: 1;
  line-height: 50rpx;
  padding: 0 10rpx;
}
</style>
