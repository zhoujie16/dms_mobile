<template>
  <MPage ref="MPage" type="primary">
    <view>
      <view class="top-wrap">
        <view class="list-cell-title">车辆信息</view>
        <view class="list-cell-content">
          <view class="box">
            <view class="label">车牌号码:</view>
            <view>{{formData.license}}</view>
          </view>
          <view class="box">
            <view class="label">工单号:</view>
            <view>{{formData.roNo}}</view>
          </view>
          <view class="box">
            <view class="label">预检单号:</view>
            <view>{{formData.yjNo}}</view>
          </view>
          <view class="box">
            <view class="label">服务顾问:</view>
            <view>{{formData.serviceAdvisor}}</view>
          </view>
          <view class="box">
            <view class="label">创建人:</view>
            <view>{{formData.createdBy}}</view>
          </view>
        </view>
      </view>
      <view class="content-warp">
        <MLabel label="内饰检查异常项"></MLabel>
        <view>
          <view v-for="(item,index) in formData.bodyAppearanceInfoList" :key="index">
            <view class="item">
              <view class="left">
                <uni-icons
                   :type="isSelect ? 'circle-filled' : 'circle'"
                   :color="isSelect ? '#1371F7' : ''"
                   size="21"
                   @click="changeSelect"
                 ></uni-icons>
                <text class="label-pad">雨刷</text>
              </view>
              <view class="right">
                <image class="img" src="../../hybrid/html/favicon.ico"></image>
              </view>
            </view>
          </view>
        
        </view>
        </view>
      <view class="content-warp"><MLabel label="发动机异常项"></MLabel></view>
      <view class="content-warp"><MLabel label="底盘四轮异常项"></MLabel></view>
      <view class="content-warp">
        <MTextArea label="故障描述" speech="true" v-model="formData1.remark"></MTextArea>
      </view>
    </view>

    <!-- <MLabel label="内饰检查异常项"></MLabel> -->
    <!-- <view class="m-break-space"></view> -->
  </MPage>
</template>

<script>
import { queryAdditionalTraining } from '@/api/vehicle-inspection/index.js';

export default {
  components: {},
  data() {
    return {
      formData:{},
      formData1: {
        remark: ''
      },
      isSelect: true,
      yjNo:'',
       roNo:''
    };
  },
  onLoad(option) {
    this.yjNo = option.yjNo;
    this.roNo = option.roNo;
  },
  mounted() {
    this.queryRemind();
  },
  methods: {
    changeSelect() {
      this.isSelect = !this.isSelect;
    },
    async queryRemind(){
      let params = {
        yjNo:this.yjNo,
        roNo:this.roNo
      }
      let [status, res] = await queryAdditionalTraining(params);
      this.formData = res.data;
      console.log(res,'---')
    }
  }
};
</script>

<style lang="scss">
.top-wrap {
  border-radius: $uni-m-border-radius-b2;
  overflow: hidden;
  background-color: #ffffff;
  padding: 26rpx 30rpx;
  margin: 20rpx;
  .list-cell-title {
    font-size: $uni-m-font-size-f2;
    height: 100rpx;
    line-height: 100rpx;
    border-bottom: 1rpx solid $uni-m-color-c4-2;
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
        text-align: justify;
      }
    }
  }
}
.content-warp {
  border-radius: $uni-m-border-radius-b2;
  overflow: hidden;
  background-color: #ffffff;
  // padding: 26rpx 30rpx;
  margin: 20rpx;
  .item{
    padding: 26rpx 30rpx;
    display: flex;

    border-bottom: 1rpx solid $uni-m-color-c4-2;
    .left{
      flex: 1;
      height: 60rpx;
      line-height: 60rpx;
      .label-pad{
        display: inline-block;
        margin-left: 20rpx;
      }
    }
    .right{
      flex: 0 0 130rpx;
      text-align: right;
      height: 60rpx;
      line-height: 60rpx;
      .img{
        width: 36rpx;
        height: 36rpx;
      }
    }
    
  }
}
</style>
