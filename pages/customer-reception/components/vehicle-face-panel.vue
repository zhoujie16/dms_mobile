<template>
  <!-- 车辆外观 -->
  <view class="panel-wrap">
    <InfoPanel></InfoPanel>
    <CollapsePanel title="故障点记录"><template slot="default"></template></CollapsePanel>
    <CollapsePanel title="物品清点">
      <template slot="default">
        <MSwitch label="贵重物品"></MSwitch>
        <MSwitch label="保养手册"></MSwitch>
        <MSwitch label="备胎"></MSwitch>
        <MSwitch label="行驶证"></MSwitch>
        <MSwitch label="千斤顶"></MSwitch>
        <MSwitch label="灭火器"></MSwitch>
        <MSwitch label="三脚架"></MSwitch>
      </template>
    </CollapsePanel>
  </view>
</template>

<script>
export default {
  name: '',
  components: {},
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
