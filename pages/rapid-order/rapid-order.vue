<template>
  <!-- 快速工单 -->
  <view class="page-wrap">
    <MFadBtn @click.native="addOrderBtnClick">新建工单</MFadBtn>
    <!-- 弹窗内容 -->
    <MPopup ref="mPopup_addorder" type="center" title="新建工单">
      <OrderCell v-for="item in [1, 2]" @click.native="orderCellClick"></OrderCell>
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
    async orderCellClick() {
      await uni.navigateTo({
        url: '/pages/rapid-order/order-detail'
      });
    }
  }
};
</script>

<style lang="scss"></style>
