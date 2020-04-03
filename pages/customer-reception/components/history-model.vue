<template>
  <!-- 维修历史 -->
  <view class="content-warp">
    <view class="m-break-space"></view>
    <view class="item-warp">
    	<view class="wx-warp">
        <view class="box">
          <view class="wx-label">服务顾问:</view>
          <view class="wx-data">小小</view>
        </view>
        <view class="box">
          <view class="wx-label">工单日期:</view>
          <view class="wx-data">2020:01:09</view>
        </view>
        <view class="box">
          <view class="wx-label">维修项目:</view>
          <view class="wx-data">哈哈哈哈回家啊还是拒绝回家啊还是家哈就睡觉回家啊还是拒绝</view>
        </view>
        <view class="box">
          <view class="left">
            <view class="wx-label"><text class="red">*</text>里程:</view>
            <view class="wx-data">98989</view>
          </view>
          <view class="right">
            <view class="wx-label"><text class="red">*</text>金额:</view>
            <view class="wx-data">98989</view>
          </view>
          
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

<style lang="scss" scoped>
  .content-warp{
   
    height: 70vh;
    background: $uni-m-color-cwhite;
    .item-warp{
       padding: 30rpx;
       .wx-warp{
         padding: 20rpx;
         background: $uni-m-color-c4-2;
         border-radius: $uni-m-border-radius-b2;
         .box{
          display: flex;
         
           .left{
             flex: 1;
             display: flex;
           }
           .right{
             flex:1;
             display: flex;
           }
         }
       }
    }
  
  }
  .wx-label{
             color: $uni-m-color-c3-2;
             flex: 0 0 130rpx;
             line-height: 50rpx;
             text-align: right;
             .red{
               color: $uni-m-color-c14-pressed;
             }
           }
           .wx-data{
             flex: 1;
             line-height: 50rpx;
             padding: 0 10rpx;
           }
</style>
