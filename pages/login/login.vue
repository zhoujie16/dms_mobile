<template>
  <view class="page-wrap m-page-fixed">
      <image class="bg-img" src="../../static/image/bg_login.svg" mode="aspectFill"></image>
      <view class="verification_code_login">
        验证码登录
      </view>
    <view class="container">
      <view class="lg_inner">
        <view class="login-input-group">
          <view class="login-icon-wrap">
            <!-- <uni-icons class="input-icon" type="person" size="30"></uni-icons> -->
            <image class="username" src="../../static/image/user_name.svg" mode=""></image>
          </view>
          <view class="login-input-wrap">
            <input class="login-input" type="text" v-model="username" placeholder="用户名/手机号" />
          </view>
        </view>
        <view class="login-input-group">
          <view class="login-icon-wrap">
            <!-- <uni-icons class="input-icon" type="locked" size="30"></uni-icons> -->
            <image class="username" src="../../static/image/Password.svg" mode=""></image>
          </view>
          <view class="login-input-wrap">
            <input class="login-input" type="password" v-model="password" placeholder="密码" />
          </view>
        </view>
        <view class="miss_password">
          忘记密码
        </view>
        <button class="login-button" @click="testLogin" type="primary">登录</button>
      </view>
      <image class="weixin" src="../../static/image/weixin.svg" mode=""></image>
    </view>
    <view class="copy_right">
      v3.05.09.1-18
    </view>
  </view>
</template>

<script>
import { loginHttp } from '@/api/login/index.js';
import { commonDict } from '@/api/test/index.js';
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
      const res2 = await uni.navigateTo({
        url: '/pages/tabBar/tabPage1/tabPage1'
      });
      console.log(res2);
      
      const res3 = await commonDict({})
      console.log('res3',res3)
      uni.setStorage({
        key:'dict',
        data:res3.data.list
      })
      // 取值
      // uni.getStorage({
      // key:“属性名”,
      // success(e){
      // e.data//这就是你想要取的token
      // }
      // })
      
      
      
    }
  },
}
</script>

<style lang="scss">
.page-wrap {
  position: relative;
  .bg-img {
    // position: fixed;
    // z-index: -1;
    width: 100vw;
    // height: 100vh;
    will-change: transform;
  }
  .verification_code_login {
    width:150rpx;
    height:30rpx;
    font-size:30rpx;
    font-weight:500;
    color:#ffffff;
    line-height:30rpx;
    text-align: right;
    position: absolute;
    top: 70rpx;
    right: 30rpx;
  }
  .container {
    .lg_inner {
      background-color: #ffffff;
      position: absolute;
      top: 400rpx;
      left: 26rpx;
      width: 698rpx;
      height: 866rpx;
      border-radius: 16rpx;
      padding: 56rpx 34rpx;
      box-shadow:2rpx 12rpx 46rpx 0rpx rgba(218,218,218,0.6);
      .login-input-group {
        display: flex;
        margin-bottom: 30rpx;
        border-bottom: solid 1rpx #E1E1E1;
        .login-icon-wrap {
          flex: 0 0 80rpx;
          height: 80rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          .username {
            width: 48rpx;
            height: 48rpx;
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
            color: #E1E1E1;
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
        margin-top: 80rpx;
        height: 80rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 40rpx;
        background-color: #1371F7;
      }
    }
    .weixin {
      width: 84rpx;
      height: 84rpx;
      position: absolute;
      bottom: -720rpx;
      left: 350rpx;
    }
  }
  .copy_right {
    width:100%;
    height:26rpx;
    font-size:24rpx;
    font-weight:400;
    color: #70767F;
    line-height:26rpx;
    position: fixed;
    bottom: 10rpx;
    left: 300rpx;
  }
}
</style>
