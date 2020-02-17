<template>
  <!-- 车辆外观 -->
  <view class="panel-wrap">
    <InfoPanel>
      
    </InfoPanel>
    <InfoPanel title="故障点记录" :isIcon='true'>
      
    </InfoPanel>
    <InfoPanel title="物品清点" :isIcon='true'>
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
  export default{
    name:'',
    components:{InfoPanel},
    data(){
      return {
        
      }
    },
    methods:{
      
    }
  }
</script>

<style lang="scss">
  .panel-wrap {
    padding: 30rpx;
  }
</style>
