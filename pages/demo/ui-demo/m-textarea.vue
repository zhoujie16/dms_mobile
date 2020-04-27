<template>
  <MPage ref="MPage">
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
  mounted() {},
  data() {
    return {
      formData: {
        value_readonley: '测试',
        value_textarea: ''
      }
    };
  },
  methods: {}
};
</script>
