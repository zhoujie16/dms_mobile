<!-- 表单demo -->
<template>
  <MPage ref="MPage">
    <!-- 车牌输入 -->
    <MLicense v-model="value_cph"></MLicense>

    <!-- 分割线 -->
    <view class="m-break-space">表单展示</view>

    <MLabel title="标题">内容</MLabel>

    <!-- 文本框 -->
    <MInput label="必填" required v-model="formData.value_1"></MInput>
    <MInput label="只读" readonly v-model="formData.value_readonley"></MInput>
    <MInput label="禁用" disabled v-model="formData.value_readonley"></MInput>
    
    <!-- 单位显示 -->
    <MInput label="单位显示" v-model="formData.value_1" unit="cm"></MInput>

    <MInput
      label="手机号"
      v-model="formData.value_1"
      right-icon="/static/image/dianhua2.svg"
    ></MInput>
    
    <MInput
      label="搜索"
      v-model="formData.value_1"
      right-icon="/static/image/dianhua2.svg"
    ></MInput>

    <view class="m-break-space">文本域</view>

    <!-- 文本域 -->
    <MTextArea label="基本用法" v-model="formData.value_textarea" :maxlength="150"></MTextArea>
    <view class="m-break-space"></view>
    <MTextArea label="语音输入" speech v-model="formData.value_textarea"></MTextArea>
    <view class="m-break-space"></view>
    <MTextArea label="只读" readonly v-model="formData.value_readonley"></MTextArea>
    <view class="m-break-space"></view>
    <MTextArea label="禁用" disabled v-model="formData.value_readonley"></MTextArea>
  </MPage>
</template>

<script>
export default {
  mounted() {
    // #ifdef H5
    window.app = this;
    // #endif
  },
  data() {
    return {
      value_cph: '沪ADC',
      formData: {
        value_readonley: '测试',
        value_textarea: '',
        value_1: ''
      }
    };
  },
  methods: {
    linkClick() {
      console.log('linkClick');
    }
  }
};
</script>

<style lang="scss"></style>
