<template>
	<view class="page-wrap">
		<view class="login-inner">
		  <view class="login-input-group">
		    <view class="login-icon-wrap">
		      <uni-icons class="input-icon" type="person" color="#ffffff" size="30"></uni-icons>
		    </view>
		    <view class="login-input-wrap">
		      <input class="login-input" type="text" v-model="username" placeholder="当前用户" placeholder-style='color:#fff'/>
		    </view>
		  </view>
		  <view class="login-input-group">
		    <view class="login-icon-wrap">
		      <uni-icons class="input-icon" type="locked" color="#ffffff" size="30"></uni-icons>
		    </view>
		    <view class="login-input-wrap">
		      <input class="login-input" type="password" v-model="oldPassword" placeholder="旧密码" placeholder-style='color:#fff'/>
		    </view>
		  </view>
      <view class="login-input-group">
        <view class="login-icon-wrap">
          <uni-icons class="input-icon" type="locked" color="#ffffff" size="30"></uni-icons>
        </view>
        <view class="login-input-wrap">
          <input class="login-input" type="password" v-model="newPassword" placeholder="新密码" placeholder-style='color:#fff'/>
        </view>
      </view>
      <view class="login-input-group">
        <view class="login-icon-wrap">
          <uni-icons class="input-icon" type="locked" color="#ffffff" size="30"></uni-icons>
        </view>
        <view class="login-input-wrap">
          <input class="login-input" type="password" v-model="confirmPassword" placeholder="确认密码" placeholder-style='color:#fff'/>
        </view>
      </view>
		  <button class="login-button" @click="editPassword" type="primary">修改密码</button>
		</view>
	</view>
</template>

<script>
  import { editPasswordHttp } from '@/api/login/index.js';
  
	export default {
		data() {
			
				return {
				  username: '',
				  oldPassword: '',
          newPassword: '',
          confirmPassword: '',
				};
			
		},
		methods: {
			async editPassword(){
        const res = await editPasswordHttp({
          username: this.username,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword,
          
        });
        console.log('修改结果', res);
        // if (!res) {
        //   return;
        // }
        const res2 = await uni.reLaunch({
          url: '/pages/login/login'
        });
        console.log(res2);
      }
		}
	}
</script>

<style lang="scss" scoped>
.page-wrap {
  height: 100vh;
  background-color: $uni-bg-color-page;
  .login-inner{
    width: 100%;
    height: 100%;
    padding: 10vh 80rpx;
    .login-input-group {
      display: flex;
      margin-bottom: 30rpx;
      border-bottom: solid 1rpx #888888;
      .login-icon-wrap {
        flex: 0 0 80rpx;
        height: 80rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        .input-icon {
        }
      }
      .login-input-wrap {
        flex: 1;
        height: 80rpx;
        display: flex;
        align-items: center;
        padding: 0 20rpx;
        .login-input {
          flex: 1;
        }
      }
    }
    .login-button {
      margin-top: 80rpx;
      height: 80rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40rpx;
    }
  }
  
}
</style>
