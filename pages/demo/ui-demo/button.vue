<!-- 按钮demo -->
<template>
  <MPage style="padding: 20rpx;">
    <m-button type="primary">页面主操作 Normal</m-button>
    <m-button type="primary" :loading="true">页面主操作 Loading</m-button>
    <m-button type="primary" :disabled="true">页面主操作 Disabled</m-button>

    <m-button type="default">页面次要操作 Normal</m-button>
    <m-button type="default" :disabled="true">页面次要操作 Disabled</m-button>

    <m-button type="warn">警告类操作 Normal</m-button>
    <m-button type="warn" :disabled="true">警告类操作 Disabled</m-button>

    <m-button type="primary" :plain="true">按钮</m-button>
    <m-button type="primary" :disabled="true" :plain="true">不可点击的按钮</m-button>

    <m-button type="default" :plain="true">按钮</m-button>
    <m-button type="default" :disabled="true" :plain="true">按钮</m-button>

    <m-button type="primary" size="mini">按钮</m-button>
    <m-button type="default" size="mini">按钮</m-button>
    <m-button type="warn" size="mini">按钮</m-button>

    <m-button type="primary" :block="true">页面主操作 Normal</m-button>

    <m-button type="default" :block="true">页面次要操作 Normal</m-button>

    <m-button type="warn" :block="true">警告类操作 Normal</m-button>
  </MPage>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.m-button {
  margin-bottom: 20rpx;
}
</style>
