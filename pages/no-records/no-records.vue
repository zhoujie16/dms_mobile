<template>
	<view class="container">
	  <image src="../../static/image/bg_NoRecord.png" class="records-img"></image>
	  <view class="records-text">暂无记录</view>
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
  .records-img {
    width: 400rpx;
    height: 230rpx;
    margin: 200rpx auto;
  }
  .records-text {
    // text-align: center;
    font-size: 30rpx;
    color: #70767F;
  }
}
</style>
