<template>
  <view class="wrap">
    <view class="repair-top">
      <view class="uni-flex uni-row">
        <view class="flex-item item-left" @click="repairSuggestClick">
          <image
            src="../../../static/image/suggest-repair.png"
            mode=""
            class="suggest-repair"
          ></image>
          维修建议
        </view>
        <view class="flex-item item-center" @click="serviceActivitiesClick">
          <image
            src="../../../static/image/service-activity.png"
            mode=""
            class="suggest-repair"
          ></image>
          服务活动
        </view>
        <view class="flex-item item-right" @click="repairGroupClick">
          <image
            src="../../../static/image/repair-group.png"
            mode=""
            class="suggest-repair"
          ></image>
          维修组合
        </view>
      </view>
    </view>
    <CollapsePanel title="维修建议" style="margin-bottom: 20rpx;">
      <template slot="default">
        <MLabel label="工单编号">xxxxxxxxxx</MLabel>
        <MLabel label="维修类型">普通维修</MLabel>
        <MLabel label="工单状态">在修</MLabel>
        <MLabel label="开单日期">2020-0202 20:20:20</MLabel>
        <MLabel label="工时单价">￥1,000.00</MLabel>
        <MLabel label="工时费">￥1,000.00</MLabel>
      </template>
    </CollapsePanel>
    <CollapsePanel title="服务活动" style="margin-bottom: 20rpx;">
      <template slot="default">
        <view class="service-box">
          <view class="service-operating">
            <view class="service-none"></view>
            <view class="service-btn"><button type="primary" :disabled="this.isSelectService">查看</button></view>
          </view>
          <serviceActivities
            v-for="(item, index) in serviceActivitiesList"
            :key="index"
            :selectIndex="index"
            :currentIndex="currentIndex"
            :cell="item"
            @emitChangeSelect="emitChangeSelect"
          ></serviceActivities>
        </view>
      </template>
    </CollapsePanel>
    <CollapsePanel title="维修组合" style="margin-bottom: 100rpx;">
      <template slot="default">
        <view class="service-box">
          <view class="group-operating">
            <view class="service-text1"></view>
            <view>
              <button type="primary" style="width: 100rpx;" :disabled="this.isSelectGroup">编辑</button>
            </view>
            <view><button type="warn" :disabled="this.isSelectGroup">删除</button></view>
          </view>
          <reapirGroup 
            v-for="(item, index) in serviceActivitiesList"
            :key="index"
            :selectIndex="index"
            :currentIndex1="currentIndex1"
            :cell="item"
            @emitChangeSelect="groupChangeSelect"
          ></reapirGroup>
        </view>
      </template>
    </CollapsePanel>
    <view class="uni-flex uni-row repair-bottom">
      <view class="flex-item repair-text">
        <view class="repair-fees" style="font-size: 24rpx; color: #262626;">维修费: ￥0.00</view>
        <view class="repair-calculation" style="font-size: 20rpx; color: #666666;">
          (材料费: ￥0.00 + 工时费: ￥0.00)
        </view>
      </view>
      <view class="flex-item repair-button">
        <m-button type="primary" class="completeBtn" style="width: 108rpx;">完成</m-button>
      </view>
    </view>
    <!-- 维修建议 -->
    <MPopup ref="mPopup_repairSuggest" type="bottom" title="维修建议">
      <view class="order-box"></view>
    </MPopup>
    <!-- 服务活动 -->
    <MPopup ref="mPopup_serviceActivities" type="bottom" title="服务活动">
      <view class="order-box"><addServiceActivities></addServiceActivities></view>
    </MPopup>
    <!-- 维修组合 -->
    <MPopup ref="mPopup_repairGroup" type="bottom" title="维修组合">
      <view class="order-box"><searchGroup></searchGroup></view>
    </MPopup>
  </view>
</template>

<script>
// import serviceActivities from '/pages/rapid-order/components/service-activities.vue';
import serviceActivities from './service-activities.vue';
import reapirGroup from './rapid-reapirGroup.vue';
import searchGroup from './search-group.vue';
import addServiceActivities from './add-service-activities.vue';
export default {
  data() {
    return {
      serviceActivitiesList: [{
        id:1,
        isSelect:false
      },{
        id:2,
        isSelect:false
      }],
      isEditFlag: true,
      isDelFlag: true,
      isViewFlag: true, // 维修建议查看
      currentIndex: 0,
      currentIndex1: 0,
      isSelectService: true,
      isSelectGroup: true
    };
  },
  components: {
    serviceActivities, //  服务活动
    reapirGroup, //  维修组合
    searchGroup,  // 查询添加维修组合
    addServiceActivities,  // 查询添加服务活动
  },
  methods: {
    emitChangeSelect(index,cell){
      // console.log(111,cell.isSelect,index)
      this.currentIndex = index;
      this.serviceActivitiesList.forEach(x=>{
        x.isSelect = false;
      })
      this.serviceActivitiesList[index].isSelect = !cell.isSelect
      this.isSelectService = !cell.isSelect;
      // console.log(params,'params=====');
      // this.isViewFlag = params;
    },
    groupChangeSelect(index,cell){
      this.currentIndex1 = index;
      this.serviceActivitiesList.forEach(x=>{
        x.isSelect = false;
      })
      this.serviceActivitiesList[index].isSelect = !cell.isSelect;
      this.isSelectGroup = !cell.isSelect;
    },
    // 维修建议
    async repairSuggestClick() {
      this.$refs.mPopup_repairSuggest.open();
    },
    // 服务活动
    async serviceActivitiesClick() {
      this.$refs.mPopup_serviceActivities.open();
    },
    // 维修组合
    async repairGroupClick() {
      this.$refs.mPopup_repairGroup.open();
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
.service-box {
  padding: 0 40rpx;
  margin-top: 12rpx;
  .group-operating {
    display: flex;
    margin-bottom: 10rpx;
    .service-text1 {
      flex: 1;
    }
  }
  .service-operating {
    display: flex;
    margin-bottom: 10rpx;
    .service-none {
      flex: 1;
    }
  }
}
.repair-top {
  width: 100vw;
  height: 100rpx;
  margin-bottom: 26rpx;
  background-color: #ffffff;
  .flex-item {
    width: 32%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    display: table;
    .suggest-repair {
      width: 28rpx;
      height: 40rpx;
      vertical-align: middle;
    }
  }
  .item-left {
    border-right: 1px #f5f5f5 solid;
  }
  .item-center {
    border-right: 1px #f5f5f5 solid;
  }
}
.repair-bottom {
  width: 100vw;
  height: 100rpx;
  background-color: #ffffff;
  box-shadow: 0px 1px 0px 0px rgba(225, 225, 225, 1);
  position: fixed;
  bottom: 0;
  padding: 20rpx 0 0 40rpx;
  // padding-left: 20rpx;
  margin-top: 20rpx;
  .repair-text {
    width: 70%;
    .repair-fees {
      color: #262626;
      font-size: 24rpx;
    }
    .repair-calculation {
      color: #666666;
      font-size: 16rpx;
    }
  }
  .repair-button {
    width: 30%;
    height: 100%;
    // position: relative;
    .completeBtn {
      width: 108rpx;
      height: 60rpx;
      border-radius: 50rpx;
      position: absolute;
      top: 20rpx;
      right: 44rpx;
    }
  }
  .bottom-text {
    width: 50%;
    padding: 20rpx 40rpx;
  }
}
</style>
