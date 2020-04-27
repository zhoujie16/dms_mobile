<!-- 按钮demo -->
<template>
  <MPage style="padding: 20rpx;">
    <!-- 按钮类型 支持 default primary warn -->
    
    <m-button type="primary">页面主操作 Normal</m-button>
    
    <m-button type="default">页面次要操作 Normal</m-button>
    
    <m-button type="warn">警告类操作 Normal</m-button>
    
    <!-- 禁用状态 -->
    
    <m-button type="default" :disabled="true">页面次要操作 Normal</m-button>
    
    <!-- 加载状态 -->
    
    <m-button type="primary" :loading="true">页面主操作 Loading</m-button>

    <!-- 块状按钮 -->
    
    <m-button type="primary" :block="true">页面主操作 Normal</m-button>
    
    <!-- 按钮尺寸 -->
    
    <m-button type="primary" size="mini">按钮</m-button>
    
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
