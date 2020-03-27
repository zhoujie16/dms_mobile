<template>
  <!-- 客户需求 -->
  <view class="panel-wrap">
    <MCheckboxPanel
      label="选择类型"
      type="inner"
      v-model="formData.inReason"
      :itemList="itemList"
      single
    ></MCheckboxPanel>
    <view class="m-break-space"></view>
    <MTextArea label="故障描述" v-model="formData.remark2"></MTextArea>
  </view>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      itemList: this.$commonDict.CHOOSE_TYPE_LIST,
      formData: {
        inReason: [],
        remark2: ''
      }
    };
  },
  methods: {
    input(value) {
      console.log('选择的结果', this.$util.typeOf(value), value);
      // this.$emit('input', value);
    }
  }
};
</script>

<style lang="scss">
.panel-wrap {
  padding: 30rpx 0;
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
