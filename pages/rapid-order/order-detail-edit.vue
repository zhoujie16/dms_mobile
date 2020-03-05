<!-- 工单详情 -->
<template>
  <MPage ref="MPage"> 
    <view class="page-body">
      <view class="title-panel">
        <view class="title-panel-inner">
          <view class="info-panel">
            <view class="customer-info">王大锤 - 沪ADC520</view>
            <view class="car-info">皮蛋卡丁车 1.5L AT</view>
          </view>
          <view class="btn-info">
            <view class="btn" @click="historyClick">
              <image class="btn-icon" src="../../static/image/car.svg" mode="scaleToFill"></image>
              <text>维修历史</text>
            </view>
            <view class="btn" @click="monitorClick">
              <image class="btn-icon" src="../../static/image/pc.svg" mode="scaleToFill"></image>
              <text>监控信息</text>
            </view>
          </view>
        </view>
        <view class="title-panel-bg"></view>
      </view>
      <CollapsePanel title="基本信息">
        <template slot="default">
          <MLabel label="车主">王大锤</MLabel>
          <MLabel label="车主编号">xxxxxxxxxx</MLabel>
          <MLabel label="VIN">xxxxxxxxxxxxxxxxx</MLabel>
          <MLabel label="品牌">测试品牌</MLabel>
          <MLabel label="送修人">王尼玛</MLabel>
          <MLabel label="送修人邮箱">xxxxxxxxx@xxx.com</MLabel>
          <MLabel label="进厂里程">100000km</MLabel>
          <MLabel label="服务顾问">张全蛋</MLabel>
          <MLabel label="预约单号">xxxxxxxxxx</MLabel>
        </template>
      </CollapsePanel>
      <CollapsePanel title="工单信息">
        <template slot="default">
          <MLabel label="工单编号">xxxxxxxxxx</MLabel>
          <MLabel label="维修类型">普通维修</MLabel>
          <MLabel label="工单状态">在修</MLabel>
          <MLabel label="开单日期">2020-0202 20:20:20</MLabel>
          <MCheckboxPanel
            label="其他备注"
            type="inner"
            v-model="value_1"
            :itemList="itemList_1"
          ></MCheckboxPanel>
          <MLabel label="工时单价">￥1,000.00</MLabel>
          <MLabel label="工时费">￥1,000.00</MLabel>
        </template>
      </CollapsePanel>
      <CollapsePanel title="维修项目与估价信息">
        <template slot="default">
          <MCheckboxPanel
            label="工时单价"
            type="inner"
            v-model="value_2"
            :itemList="itemList_2"
          ></MCheckboxPanel>
          <view class="price-wrap">
            <view class="price-inner">
              <view class="price-title">
                <text class="l">费用统计</text>
                <text class="r">￥16,000.00</text>
              </view>
              <view class="m-bottom-border"></view>
              <view class="price-cell">
                <text class="l">工时费用</text>
                <text class="r">￥10,000.00</text>
              </view>
              <view class="price-cell">
                <text class="l">维修材料</text>
                <text class="r">￥1,000.00</text>
              </view>
              <view class="price-cell">
                <text class="l">销售材料</text>
                <text class="r">￥2,000.00</text>
              </view>
              <view class="price-cell">
                <text class="l">辅助管理</text>
                <text class="r">￥3,000.00</text>
              </view>
            </view>
          </view>
        </template>
      </CollapsePanel>
      <CollapsePanel title="时间中断">
        <template slot="default">
          <MTextArea v-model="value_4" label="午间中断"></MTextArea>
          <view class="m-break-space"></view>
          <MTextArea v-model="value_4" label="午间中断"></MTextArea>
        </template>
      </CollapsePanel>
      <CollapsePanel title="预计交车时间">
        <template slot="default">
          <MCheckboxPanel
            label="三日电访日期"
            type="inner"
            v-model="value_3"
            :itemList="itemList_3"
          ></MCheckboxPanel>
          <MLabel label="下次保养日期">2020-0202 20:20:20</MLabel>
          <MLabel label="其他备注">2020-0202 20:20:20</MLabel>
          <MCheckboxPanel
            label="其他备注"
            type="inner"
            v-model="value_1"
            :itemList="itemList_1"
          ></MCheckboxPanel>
          <MLabel label="预计交车时间">2020-0202 20:20:20</MLabel>
        </template>
      </CollapsePanel>
    </view>
    <!-- 监控信息 -->
	<MPopup ref="mPopup_amonitor_info" type="bottom" title="监控信息">
	  <AmonitorInfo></AmonitorInfo>
	</MPopup>
  <!-- 维修历史 -->
  <MPopup ref="mPopup_history" type="bottom" title="维修历史">
    <RepaidHistory></RepaidHistory>
  </MPopup>
  </MPage>
</template>

<script>
import AmonitorInfo from './components/monitor-info.vue';
import RepaidHistory from './components/repaid-history.vue';
export default {
  components: {
    AmonitorInfo,
    RepaidHistory
  },
  data() {
    return {
      value_1: [1, 3, 6],
      itemList_1: [
        { text: '客户在厂', value: 1 },
        { text: '需要洗车', value: 2 },
        { text: '需要路试', value: 3 },
        { text: '需要质检', value: 4 },
        { text: '带走旧件', value: 5 },
        { text: '曾秀保养', value: 6 },
        { text: '不要积分', value: 7 },
        { text: '三日电访', value: 8 }
      ],
      value_2: [],
      itemList_2: [{ text: '100', value: 100 }, { text: '200', value: 200 }],
      value_3: [],
      itemList_3: [
        { text: '全天', value: 1 },
        { text: '上午', value: 2 },
        { text: '中午', value: 3 },
        { text: '下午', value: 4 },
        { text: '晚上', value: 5 }
      ],
      value_4: ''
    };
  },
  methods: {
    async back() {
      uni.navigateBack({
        delta: 1
      });
    },
    // 监控信息
    monitorClick(){
       this.$refs.mPopup_amonitor_info.open();
    },
    // 维修历史
    historyClick(){
      this.$refs.mPopup_history.open();
    }
  }
};
</script>

<style lang="scss"> 
.title-panel {
  position: relative;
  padding: 10rpx 30rpx 30rpx 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  .title-panel-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100rpx;
    background: linear-gradient(to right, #41c5ff, #1371f7);
    z-index: 0;
  }
  .title-panel-inner {
    width: 100%;
    background-color: #ffffff;
    padding: 0 30rpx;
    border-radius: 10rpx;
    z-index: 1;
    box-shadow: 0px 2px 5px #eeeeee;
    .info-panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: solid 1px #efefef;
      padding-top: 12rpx;
      .customer-info {
        font-size: 34rpx;
        height: 60rpx;
        line-height: 60rpx;
      }
      .car-info {
        font-size: 30rpx;
        height: 60rpx;
        line-height: 60rpx;
        color: #70767f;
      }
    }
    .btn-info {
      display: flex;
      height: 90rpx;
      font-size: 30rpx;
      .btn {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-icon {
          width: 48rpx;
          height: 48rpx;
          margin-right: 4rpx;
        }
      }
    }
  }
} 

.price-wrap {
  padding: 30rpx;
  .price-inner {
    background-color: #f9f9f9;
    border-radius: 20rpx;
    padding: 0 30rpx 20rpx 30rpx;
    .price-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80rpx;
      font-size: 30rpx;
      font-weight: 500;
      .l {
      }
      .r {
      }
    }
    .price-cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60rpx;
      .l {
        color: #70767f;
        font-size: 26rpx;
      }
      .r {
      }
    }
  }
}
</style>
