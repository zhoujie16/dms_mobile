<template>
  <view
    class="page-wrap m-page-fixed m-flex m-column m-align-center m-justify-center"
  >
    <view class="login-inner">
      <input
        class="login-input"
        type="text"
        v-model="username"
        placeholder="用户名"
      />
      <input
        class="login-input"
        type="password"
        v-model="password"
        placeholder="密码"
      />
      <button class="button" @click="testLogin" type="primary">登录</button>
    </view>
  </view>
</template>

<script>
import { loginHttp } from "@/api/login/index.js";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  onReady() {
    console.log("login onReady");
    // this.testLogin();  
    console.log(this);
  },
  methods: {
    async testLogin() {
      const res = await loginHttp({
        appId: "cyx",
        username: this.username,
        password: this.$auth.jsEncrypt(this.password)
      });
      console.log("登录结果", res);
      if (!res) {
        return;
      }
      const res2 = await uni.switchTab({
        url: "/pages/tabBar/tabPage1/tabPage1"
      });
      console.log(res2);
    }
  }
};
</script>

<style lang="scss">
.login-input {
  height: 80rpx;
  background: $uni-bg-color-grey;
  padding: 15rpx 30rpx;
  margin-bottom: 30rpx;
}
.page-wrap {
  background-color: $uni-bg-color-page;
}
.button {
  width: 700rpx;
}
</style>
