<template>
	<view class="main">
		<view class="main-top">
		  <image src="../../static/image/newVersion.svg" class="main-img"></image>
		</view>
    <view class="main-bottom">
      <view class="bottom-title">
        更新内容
      </view>
      <!-- <uni-list>
        <uni-list-item title="" note="">车营销新上一波海报模板</uni-list-item>
        <uni-list-item title="" note="">优化战败审核流程</uni-list-item>
      </uni-list> -->
      <view class="bottom-list">
        <view class="bottom-text"><text class="bottom-radius"></text>车营销新上一波海报模板;</view>
        <view class="bottom-text"><text class="bottom-radius"></text>优化战败审核流程;</view>
      </view>
      
    </view>
    <view class="update">
      立即更新
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
  .main {
    margin: 200rpx auto;
    background:rgba(252,252,252,0.8) rgba(255,255,255,1);
    width: 600rpx;
    height: 720rpx;
    border-radius: 16rpx;
    .main-top {
      .main-img {
        width: 600rpx;
        height: 296rpx;
      }
    }
    .main-bottom {
      margin-top: 20rpx;
      .bottom-title {
        color: #17212E;
        font-size: 34rpx;
        padding-left: 50rpx;
        font-weight: 500;
      }
      .bottom-list {
        padding-left: 54rpx;
        margin-top: 60rpx;
        .bottom-text {
          height: 40rpx;
          line-height: 40rpx;
          .bottom-radius {
            border-radius: 50%;
            background-color: #000000;
            display: block;
            float: left;
          }
        }
        
      }
    }
  }
  .update {
    width: 480rpx;
    height: 84rpx;
    line-height: 84rpx;
    text-align: center;
    background: #1371F7;
    border-radius: 42rpx;
    margin: 94rpx 60rpx;
    color: #FFFFFF;
    font-size: 34rpx;
  }
</style>
