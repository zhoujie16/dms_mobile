<template>
  <view class="list-cell-wrap">
    <view class="list-cell-wrap-inner">
      <view>{{ cell.productId }}</view>
      <view>{{ cell.brandName }}</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'list-cell-wrap',
    props: {
      cell: Object
    },
    onLoad() {
      console.log('list-cell-wrap', mounted)
    },
    data() {
      return {

      };
    },
    methods: {

    }
  };
</script>

<style>
  .list-cell-wrap {
    box-sizing: border-box;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    padding: 20rpx;
    flex-direction: row;
    width: 750rpx;
    height: 200rpx;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
  .list-cell-wrap-inner{
    box-sizing: border-box;
    width: 100%;
    padding: 30rpx;
    border-radius: 20rpx;
    border: 1px solid #999999;
  }
</style>
