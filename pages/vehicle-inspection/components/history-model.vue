<template>
  <!-- 维修历史 -->
	<view class="wrap">
    <view class="h-title">
      <text>维修历史</text>
      <uni-icons type="closeempty" size="26" color="#fff" class="close" @click="close"></uni-icons>
      
    </view>
		<view class="container">
      <view class="uni-flex uni-row">
        <view class="flex-item1">服专：</view>
        <view class="flex-item2">赵凤</view>
      </view>
      <view class="uni-flex uni-row">
        <view class="flex-item1">工单日期：</view>
        <view class="flex-item2">2019-08-06 08:46:15</view>
      </view>
      <view class="uni-flex uni-row">
        <view class="flex-item1">维修项目：</view>
        <view class="flex-item2">前杠修复；前杠喷漆。左大灯抛光前杠修复；前杠喷漆。左大灯抛光前杠修复；前杠喷漆。左大灯抛光</view>
      </view>
      <view class="uni-flex uni-row">
        <view class="flex-item3">里程：70342</view>
        <view class="flex-item3">金额：1300</view>
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
			close(){
        this.$emit('close')
      }
		}
	}
</script>

<style lang="scss" scoped>
  .wrap{
    width: 100vw;
    height: 100vh;
    background: #fff;
    .h-title{
      height: 100rpx;
      background: $uni-bg-color-page;
      position: relative;
      color: #fff;
      padding: 0 10rpx;
      line-height: 100rpx ;
      margin-bottom: 20rpx ;
      .close {
        position: absolute;
        right: 10rpx;
      }
    }
    .container{
      border-top: 2rpx solid #ccc;
      border-bottom: 2rpx solid #ccc;
      padding: 20rpx;
      margin-bottom: 20rpx;
      .flex-item1{
        width: 20%;
      }
      .flex-item2{
        width: 80%;
      }
      .flex-item3{
        width: 50%;
        color: #007AFF;
      }
    }
  }

</style>
