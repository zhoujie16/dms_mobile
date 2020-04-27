<template>
  <MPage ref="MPage">
    <!-- 文本框 -->
    <MInput label="必填" required v-model="formData.value_1"></MInput>
    <MInput label="只读" readonly v-model="formData.value_readonley"></MInput>
    <MInput label="禁用" disabled v-model="formData.value_readonley"></MInput>

    <!-- 单位显示 -->
    <MInput label="单位显示" v-model="formData.value_1" unit="cm"></MInput>

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
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        value_readonley: '测试',
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
