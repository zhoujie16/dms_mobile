<template>
  <!-- 快速工单 -->
  <view class="page-wrap">
    <view @click="addOrderBtnClick" class="add-order-btn">新建工单</view>
    <!-- 弹窗内容 -->
    <MPopup ref="mPopup_addorder" type="center" title="新建工单">
      <OrderCell v-for="item in [1,2]" @click.native="orderCellClick"></OrderCell>
    </MPopup>
  </view>
</template>

<script>
import OrderCell from './components/order-cell.vue';
export default {
  components: {
    OrderCell
  },
  data() {
    return {};
  },
  methods: {
    // 新建工单按钮
    addOrderBtnClick() {
      this.$refs.mPopup_addorder.open();
    },
    // 工单点击按钮
    async orderCellClick(){
      await uni.navigateTo({
        url: '/pages/rapid-order/order-detail'
      });
    }
  }
};
</script>

<style lang="scss">
  .add-order-btn{
    height: 90rpx;
    border-radius: 50rpx;
    width: 400rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 175rpx;
    bottom: 50rpx;
    font-size: $uni-font-size-lg;
    color: #ffffff;
    background-color: $uni-bg-color-navbar;
  }
</style>
