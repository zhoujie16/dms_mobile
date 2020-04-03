<template>
  <view class="doc-cell-wrap">
    <view class="doc-cell-inner">
      <image class="doc-icon" src="/static/demo/icon_doc.png" mode="widthFix"></image>
      <text class="doc-text">示例文档</text>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss">
  .doc-cell-wrap{
    .doc-cell-inner{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 250rpx;
      height: 250rpx;
      .doc-icon{
        width: 90rpx;
        margin-bottom: 20rpx;
      }
      .doc-text{
        
      }
    }
  }
</style>
