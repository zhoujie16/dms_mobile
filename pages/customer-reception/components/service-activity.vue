<template>
  <!-- 服务活动 -->
  <view class="content-warp">
    <view class="m-break-space"></view>
    <view class="item-warp">
    	<view class="aty-warp">
        <view class="left">
          <view>燃油系统清洗</view>
          <view class="left-second"><text>保养</text>&nbsp;&nbsp;|&nbsp;&nbsp;<text>收费工时：0.00</text></view>
        </view>
        <view class="right">
          <text>¥0.00</text>
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
       .aty-warp{
         background: $uni-m-color-c4-2;
         color: $uni-m-color-c17;
         height: 160rpx;
         display: flex;
         border-radius: $uni-m-border-radius-b2;
         .left{
           flex: 1;
           line-height: 80rpx;
           padding: 0 20rpx;
           .left-second{
             color: $uni-m-color-c3-2;
           }
         }
         .right{
           flex: 0 0 100rpx;
           text-align: center;
           line-height: 160rpx;
         }
       }
    }
  
  }

</style>
