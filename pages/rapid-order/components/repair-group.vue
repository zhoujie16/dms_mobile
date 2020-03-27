<template>
	<view class="wrap">
		<view class="repair-top" >
		  <view class="uni-flex uni-row">
        <view class="flex-item item-left">
          <image src="../../../static/image/suggest-repair.png" mode="" class="suggest-repair"></image>
          建议维修
        </view>
        <view class="flex-item item-center">
          <image src="../../../static/image/service-activity.png" mode="" class="suggest-repair"></image>
          服务活动
        </view>
        <view class="flex-item item-right">
          <image src="../../../static/image/repair-group.png" mode="" class="suggest-repair"></image>
          维修组合
        </view>
      </view>
		</view>
    <CollapsePanel title="工单信息" style="margin-bottom: 20rpx;">
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
        <MLabel label="工单编号">xxxxxxxxxx</MLabel>
        <MLabel label="维修类型">普通维修</MLabel>
        <MLabel label="工单状态">在修</MLabel>
        <MLabel label="开单日期">2020-0202 20:20:20</MLabel>
        <MLabel label="工时单价">￥1,000.00</MLabel>
        <MLabel label="工时费">￥1,000.00</MLabel>
      </template>
    </CollapsePanel>
    <CollapsePanel title="维修组合">
      <template slot="default">
        <MLabel label="工单编号">xxxxxxxxxx</MLabel>
        <MLabel label="维修类型">普通维修</MLabel>
        <MLabel label="工单状态">在修</MLabel>
        <MLabel label="开单日期">2020-0202 20:20:20</MLabel>
        <MLabel label="工时单价">￥1,000.00</MLabel>
        <MLabel label="工时费">￥1,000.00</MLabel>
      </template>
    </CollapsePanel>
    <view class="repair-bottom">
      <view class="uni-flex uni-row">
                <view class="flex-item item-cost">
                  <view class="flex-item flex-item-V text-count">维修费: ￥0.00</view>
                  <view class="flex-item flex-item-V text-calculation">(材料费: ￥0.00 + 工时费: ￥0.00)</view>
                </view>
                <view class="flex-item item-button">
                  <m-button type="primary" class="completeBtn">完成</m-button>
                </view>
            </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
  .wrap {
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;
  }
.repair-top {
  width: 100vw;
  height:100rpx;
  margin-bottom: 26rpx;
  background-color: #FFFFFF;
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
    border-right: 1px #F5F5F5 solid;
  }
  .item-center {
    border-right: 1px #F5F5F5 solid;
  }
}
.repair-bottom {
  width: 100vw;
  height: 100rpx;
  background-color: #FFFFFF;
  box-shadow:0px 1px 0px 0px rgba(225,225,225,1);
  position: fixed;
  bottom: 20rpx;
  padding-left: 20rpx;
  item-cost {
    width: 60%;
    .text-count {
      // background-color: pink;
      color: #262626;    
      font-size: 24rpx;
    }
    .text-calculation {
      color: #666666;
      font-size: 20rpx;
      // background-color: blue;
    }
  }
  .item-button {
    width: 40%;
    position: relative;
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
    padding : 20rpx 40rpx;
    
  }
}

</style>
