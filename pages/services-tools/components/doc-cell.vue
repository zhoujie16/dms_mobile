<template>
  <view class="doc-cell-wrap">
    <view class="doc-cell-inner">
      <image class="doc-icon" :src="item.image" mode="widthFix"></image>
    </view>
    <view class="doc-text">{{item.text | ellipsis}}</view>
  </view>
</template>

<script>
export default {
    props: {
      item: Object
    },
    name: 'decCell',
    filters: {
      // 版本号显示15位，超过15位显示...
      ellipsis: function(value) {
        if (!value) return "";
        if (value.length > 15) {
          return value.slice(0, 15) + "...";
        }
        return value;
      }
    }
  };
</script>

<style lang="scss">
  .doc-cell-wrap{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    width: 233rpx;
    margin: 0 8rpx;
    text-align: center;
    // height: 300rpx;
    .doc-cell-inner{
      position: relative;
      width: 233rpx;
      height: 300rpx;
      // margin: 0 18rpx;
      border: 1px solid #FFF7CC;
      background-color: #FFFFFF;
      border-radius: 20rpx;
      .doc-icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80rpx;
        // margin-top: 20rpx;
        height: 80rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
    }
    .doc-text{
      padding-top: 14rpx;
      font-size: $uni-m-font-size-f4;
      color: $uni-m-color-c17;
    }
  }
</style>
