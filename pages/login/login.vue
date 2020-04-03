<template>
  <view class="page-wrap m-page-fixed">
    <view class="bg-warp">
      <image class="bg-img" src="../../static/image/bg_login.png" mode="aspectFill"></image>
      <image class="logo-img" src="../../static/image/logo-login.png"></image>
      <view class="bg-title"><text>服务助手</text></view>
    </view>
    
    <view class="verification_code_login">验证码登录</view>
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
        <view class="miss_password" @click="forgetPassword">忘记密码</view>
        <button class="login-button" @click="loginHandleClick" type="primary">登录</button>
      </view>
    </view>
    <view class="weixin">
      <image class="vxImg" src="../../static/image/weixin.svg"></image>
      <view class="vx-text">微信登陆</view>
    </view>
    <view class="copy_right">v3.05.09.1-18</view>
  </view>
</template>

<script>
import { mapActions } from 'vuex';
import { loginHttp } from '@/api/login/index.js';
import { commonDict } from '@/api/test/index.js';
import { queryDict } from '@/api/util/index.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      isHasNull: true
    };
  },
  onReady() {
    console.log('login onReady');
    this.reloadUserInfo();
    // this.testLogin();
    // console.log(this);
    // uni.navigateTo({
    //   url: '/pages/demo/ui-demo/speech',
    //   success: res => {},
    //   fail: () => {},
    //   complete: () => {}
    // });
  },
  watch: {
    username(curVal, oldVal) {
      if (curVal) {
        this.isHasNull = false;
      } else {
        this.isHasNull = true;
      }
    }
  },
  methods: {
    // 回显用户名密码
    reloadUserInfo() {
      // 如果jwt存在 跳过登录
      // const jwt = uni.getStorageSync(LOGIN_JWT);
      // if (jwt) {
      //   this.goMenuPage();
      // }
      this.username = this.$auth.getLoginUser();
      this.password = this.$auth.getLoginPassword();
    },
    async loginHandleClick() {
      const [err, res] = await loginHttp({
        appId: 'cyx',
        // username: this.username,
        // password: this.$auth.jsEncrypt(this.password)

        username: 'FYH35',
        password: this.$auth.jsEncrypt('a12345678')
      });
      // console.log('登录结果', res);
      if (err) {
        return;
      }
      // 记住用户名密码
      this.$auth.saveLoginUser(this.username);
      this.$auth.saveLoginPassword(this.password);
      // 保存信息 rData 全部字段 不知道有些是干啥的 先存了再说 😅
      this.$auth.saveToken(res.data.jwt);
      const rData = res.data.rData;
      this.$auth.saveUserStatus(rData.userStatus);
      this.$auth.saveEmployeeId(rData.employeeId);
      this.$auth.saveUserId(rData.userId);
      this.$auth.saveUserCode(rData.userCode);
      this.$auth.saveCompanyId(rData.companyId);
      this.$auth.saveEmployeedudytype(rData.employeeDutyType);
      this.$auth.saveOrgCode(rData.orgCode);

      await this.goMenuPage();

      // 获取字典
      // const dictRes = await queryDict();
      // if (dictRes.resultCode == 200) {
      //   console.log('dictRes', dictRes);
      //   const { dict } = dictRes.data;
      //   const data = { ...dict };
      //   //数据字典本地存储
      //   if (!_.isEqual(data, JSON.parse(this.$auth.getStorgeData('dict')))) {
      //     this.$auth.setStorageData('dict', data);
      //   }
      // }
    },
    // 重定向到主页
    async goMenuPage() {
      await uni.reLaunch({
        url: '/pages/home/home'
      });
    },
    forgetPassword() {
      uni.navigateTo({
        url: '/pages/login/forgetPassword'
      });
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  position: relative;
  .bg-warp{
    position: relative;
    width: 100vw;
    height: 456rpx;
    .bg-img {
      // position: fixed;
      // z-index: -1;
      position: absolute;
      top: 0;
      width: 100vw;
      height: 456rpx;
      will-change: transform;
    }
    .logo-img{
      position: absolute;
      width: 144rpx;
      height: 104rpx;
      top: 220rpx;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .bg-title{
      width: 100%;
      position: absolute;
      top: 280rpx;
      font-size: 36rpx;
      font-weight: bold;
      z-index: 99;
      text-align: center;
      color: $uni-m-color-cwhite;
    }
  }

 
  .verification_code_login {
    width: 150rpx;
    height: 30rpx;
    font-size: 30rpx;
    font-weight: 500;
    color: #ffffff;
    line-height: 30rpx;
    text-align: right;
    position: absolute;
    top: 70rpx;
    right: 30rpx;
  }
  .container {
    position: absolute;
    top: 400rpx;
    left: 26rpx;
    .lg_inner {
      background-color: #ffffff;
      width: 698rpx;
      height: 866rpx;
      border-radius: 16rpx;
      padding: 56rpx 34rpx;
      box-shadow: 2rpx 12rpx 46rpx 0rpx rgba(218, 218, 218, 0.6);
      .login-input-group {
        display: flex;
        margin-bottom: 30rpx;
        border-bottom: solid 1rpx #e1e1e1;
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
            // color: #E1E1E1;
            color: #17212e;
            font-size: 34rpx;
          }
        }
      }
      .miss_password {
        width: 100%;
        height: 26rpx;
        font-size: 26rpx;
        font-weight: 400;
        color: #1371f7;
        line-height: 26rpx;
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
        background-color: #1371f7;
      }
    }
  }
  .copy_right {
    width: 100%;
    height: 26rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: #70767f;
    line-height: 26rpx;
    position: fixed;
    bottom: 10rpx;
    left: 45%;
    // transform: translateX(-50%);
  }
  .weixin {
    position: absolute;
    bottom: -720rpx;
    left: 350rpx;
    text-align: center;
    .vxImg {
      width: 84rpx;
      height: 84rpx;
      margin-bottom: 16rpx;
    }
    .vx-text {
      color: #c3c3c3;
      font-size: 22rpx;
    }
  }
}
</style>
