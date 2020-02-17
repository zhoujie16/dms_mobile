<template>
  <!-- 客户需求 -->
  <view class="panel-wrap">
    <InfoPanel title="选择类型">
      <view class="type-wrap">
        <uni-tag class="type-tag" type="default" inverted text="保养"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="召回"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="故障检测"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="维修"></uni-tag>
        <uni-tag class="type-tag" type="default" inverted text="故障维修"></uni-tag>
      </view>
    </InfoPanel>
    <InfoPanel title="故障描述" ><textarea class="m-textarea" placeholder="" /></InfoPanel>
  </view>
</template>

<script>
import InfoPanel from './info-panel.vue';
export default {
  name: '',
  components: {
    InfoPanel
  },
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
.type-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10rpx 0;
  .type-tag {
    width: 290rpx;
    height: 100rpx;
    font-size: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rpx 0;
  }
}

.m-textarea {
  border: solid 1rpx #dddddd;
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  margin: 20rpx 0;
}
</style>
