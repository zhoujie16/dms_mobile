<template>
  <!-- 详情预览 -->
  <view class="panel-wrap">
    <InfoPanel title="客户信息" isIcon=true>
      <MInput label="车牌号"></MInput>
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
    </InfoPanel>

    <InfoPanel title="客户需求" isIcon=true>
      <view class="type-title">选择类型</view>
      <view class="type-wrap">
        <uni-tag class="type-tag" type="default" inverted text="保养"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="召回"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="故障检测"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="维修"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="故障维修"></uni-tag>
      </view>
      <view class="type-title">故障描述</view>
      <textarea class="m-textarea question-border" placeholder="" />
    </InfoPanel>

   <InfoPanel title="物品清点" isIcon=true>
     <MSwitch label="贵重物品"></MSwitch>
     <MSwitch label="保养手册"></MSwitch>
     <MSwitch label="备胎"></MSwitch>
     <MSwitch label="行驶证"></MSwitch>
     <MSwitch label="千斤顶"></MSwitch>
     <MSwitch label="灭火器"></MSwitch>
     <MSwitch label="三脚架"></MSwitch> 
   </InfoPanel>
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
  padding: 30rpx;
}
.type-title{
  line-height: 80rpx;
}
.question-border{
  border: 2rpx solid #CCCCCC;
}
</style>
