<template>
  <MPage ref="MPage">
    <!-- 表单组件 -->
    <search-filter ref="searchFilter">
      <!-- 自定义面板 -->
      <template v-slot:panel>
        <view class="m-flex m-justify-center m-align-center">自定义区域</view>
      </template>
      <!-- 弹窗的表单 -->
      <template v-slot:form>
        <FormDemo @confirm="formConfirm"></FormDemo>
      </template>
    </search-filter>
  </MPage>
</template>

<script>
import FormDemo from './../components/form-demo';

export default {
  components: {
    FormDemo
  },
  data() {
    return {};
  },
  onNavigationBarButtonTap(btn) {
    console.log('导航栏按钮点击事件', btn);
    this.$refs.searchFilter.open();
  },
  methods: {
    // 确定按钮事件
    async formConfirm(data) {
      console.log('formConfirm');
      this.$refs.searchFilter.close();
    }
  }
};
</script>
