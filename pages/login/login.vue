<template>
  <view class="page-wrap m-page-fixed">
    <image class="bg-img" src="../../static/login/login_bg.png" mode="aspectFill"></image>
    <view class="login-inner">
      <view class="logo-wrap"><view class="logo-inner">服务助手</view></view>
      <view class="login-input-group">
        <view class="login-icon-wrap">
          <uni-icons class="input-icon" type="person" size="30"></uni-icons>
        </view>
        <view class="login-input-wrap">
          <input class="login-input" type="text" v-model="username" placeholder="用户名/手机号" />
        </view>
      </view>
      <view class="login-input-group">
        <view class="login-icon-wrap">
          <uni-icons class="input-icon" type="locked" size="30"></uni-icons>
        </view>
        <view class="login-input-wrap">
          <input class="login-input" type="password" v-model="password" placeholder="密码" />
        </view>
      </view>
      <button class="login-button" @click="testLogin" type="primary">登录</button>
    </view>
  </view>
</template>

<script>
import { loginHttp } from '@/api/login/index.js';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  onReady() {
    console.log('login onReady');
    // this.testLogin();
    console.log(this);
  },
  methods: {
    async testLogin() {
      const res = await loginHttp({
        appId: 'cyx',
        username: this.username,
        password: this.$auth.jsEncrypt(this.password)
      });
      console.log('登录结果', res);
      if (!res) {
        return;
      }
      const res2 = await uni.switchTab({
        url: '/pages/tabBar/tabPage1/tabPage1'
      });
      console.log(res2);
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  .bg-img {
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    will-change: transform;
  }
  .login-inner {
    width: 100%;
    height: 100%;
    padding: 0 80rpx; 
    .logo-wrap{
      margin: 20vh 0 10vh 0;
      .logo-inner{
        width: 100%;
        text-align: center;
        line-height: 100rpx;
        color: #888888;
        font-size: 80rpx;
        font-weight: 600;
        color: $uni-bg-color-page;
        letter-spacing: 30rpx;
      }
    }
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
    }
  }
}
</style>
