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
      width: 235rpx;
      height: 300rpx;
      margin: 5rpx 8rpx;
      border: 1px solid #FFF7CC;
      .doc-icon{
        width: 90rpx;
        margin-bottom: 20rpx;
      }
      .doc-text{
        
      }
    }
  }
</style>
