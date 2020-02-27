<template>
	<view class="lg_container">
	  <view class="login-input-group">
	    <view class="login-input-wrap">
	      <input class="login-input" type="text" v-model="phoneNumber" placeholder="手机号" />
        <text class="lg-text">获取验证码</text>
	    </view>
	  </view>
	  <view class="login-input-group">
	    <view class="login-input-wrap">
	      <input class="login-input" type="number" v-model="verificationCode" placeholder="验证码" />
	    </view>
	  </view>
	  <button class="login-button" @click="testLogin" type="primary" :disabled="true">下一步</button>
    <!-- <m-button type="primary" :disabled="true" :plain="true">下一步</m-button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber: '', // 手机号
        verificationCode: '' // 验证码
			};
		}
	}
</script>

<style lang="scss" scoped>
.lg_container {
      margin-top: 20rpx;
      .login-input-group {
        display: flex;
        margin-bottom: 30rpx;
        background-color: #FFFFFF;
        // border-bottom: solid 1rpx #E1E1E1;
        .login-icon-wrap {
          flex: 0 0 80rpx;
          height: 80rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          .phoneNumber {
            width: 48rpx;
            height: 48rpx;
          }
        }
        .login-input-wrap {
          flex: 1;
          height: 100rpx;
          display: flex;
          align-items: center;
          padding: 0 30rpx;
          .login-input {
            flex: 1;
            color: #E1E1E1;
          }
          .lg-text {
            width:170rpx;
            height:60rpx;
            line-height: 60rpx;
            text-align: center;
            border-radius:8rpx;
            display: block;
            border:2rpx solid rgba(225,225,225,1);
            color: #C3C3C3;
            font-size: 26rpx;
          }
        }
      }
      .miss_password {
        width:100%;
        height:26rpx;
        font-size:26rpx;
        font-weight:400;
        color:#1371F7;
        line-height:26rpx;
        text-align: right;
        padding-right: 34rpx;
      }
      .login-button {
        margin: 80rpx 30rpx;
        height: 80rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 40rpx;
      }
    }
</style>
