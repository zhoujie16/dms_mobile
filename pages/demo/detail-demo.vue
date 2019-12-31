<template>
  <view class="page-wrap">
    <image class="image" src="../../static/demo/pp.jpg" mode="widthFix"></image>
    <MLabel label="车牌号">沪ADC10086</MLabel>
    <MLabel label="车架号">12345543211234512</MLabel>
    <MLabel label="工单号">RO191218001</MLabel>
    <MLabel label="车主">周先生</MLabel>
    <MLabel label="故障描述">无</MLabel>
    <MLabel label="维修技术">王工</MLabel>
    <MLabel label="备注 " :row="2">
      备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注
      备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注 备注
    </MLabel>
    <button class="button" type="primary">按钮</button>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.image {
  margin: 30rpx;
  width: 690rpx;
  height: 388.125rpx;
}
.button {
  margin: 30rpx;
}
</style>
