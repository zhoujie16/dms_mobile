<template>
	<view class="container">
	  <image src="../../static/image/bg_NoRecord.png" class="records-img"></image>
	  <view class="access-text">没有访问权限</view>
    <view class="access-sorry">
      很抱歉，系统拒绝了您的请求！
    </view>
    <view class="access-request">
      申请访问
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
.container {
  text-align: center;
  margin: 0 auto;
  .records-img {
    width: 400rpx;
    height: 230rpx;
    margin-top: 200rpx;
  }
  .access-text {
    // text-align: center;
    margin-top: 20rpx;
    font-size: 30rpx;
    color: #70767F;
  }
  .access-sorry {
    // width: 364rpx;
    height: 60rpx;
    font-size: 26rpx;
    color: #70767F;
    line-height: 60rpx;
    margin-top: 20rpx;
  }
  .access-request {
    width: 620rpx;
    height: 82rpx;
    line-height: 82rpx;
    text-align: center;
    border-radius: 40rpx;
    border:1px solid #2F84EB;
    margin: 92rpx 80rpx;
    font-size: 34rpx;
    color: #1371F7;
  }
}
</style>
