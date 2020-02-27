<template>
  <!-- 客户信息 -->
  <view class="panel-wrap">
   <!-- <MInput label="车牌号"></MInput> -->
   <MLicense label="车牌号"></MLicense>
    <MInput label="车架号"></MInput>
    <MInput label="车主姓名"></MInput>
    <MInput label="手机号"></MInput>
    <MInput label="邮箱"></MInput>
    <MInput label="送修人"></MInput>
    <MInput label="送修人手机号"></MInput>
    <MInput label="车型"></MInput>
    <MInput label="进厂时间"></MInput>
    <MInput label="销售日期"></MInput>
    <MInput label="地址"></MInput>
    <!-- <InfoPanel title="客户信息">
      
    </InfoPanel> -->
  </view>
</template>

<script>
import InfoPanel from './info-panel.vue';
export default {
  components: {
    InfoPanel
  },
  name: '',
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.panel-wrap {
  padding: 30rpx 0;
}
</style>
