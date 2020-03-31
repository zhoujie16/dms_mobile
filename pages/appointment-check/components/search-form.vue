<template>
  <view>
    <scroll-view class="scroll-view-h" :style="{ maxHeight: '900rpx' }" scroll-y>
      <MLicense v-model="formData.license" searchType="scan"></MLicense>
      <MCheckbox
        label="服务顾问"
        type="popup"
        v-model="formData.serviceAdvisor"
        :itemList="serviceAdvisorList"
        single
      ></MCheckbox>
      <MPicker label="开单日期" mode="range" v-model="formData.createdAt"></MPicker>
    </scroll-view>
    <MFormBottom @confirm="formConfirm" @reset="formReset"></MFormBottom>
  </view>
</template>
<script>
export default {
  components: {},
  props: {
    serviceAdvisorList: {
      type: Array
    }
  },
  data() {
    return {
      formData: {
        license: '',
        serviceAdvisor: [],
        createdAt: ['', '']
      }
    };
  },
  watch: {},
  mounted() {
    // 备份初始值 用于重置
    this.formData_reset = { ...this.formData };
  },
  methods: {
    // 查询按钮事件
    formSubmit() {
      console.log('formSubmit');
      this.$emit('confirm');
    },
    //重置表单
    formReset() {
      this.formData = { ...this.formData_reset };
    },
    //确认查询
    formConfirm() {
      let params = {
        license: this.formData.license.trim(),
        serviceAdvisor: this.formData.serviceAdvisor[0]==undefined?'':this.formData.serviceAdvisor[0],
        beginCreatedAt: this.formData.createdAt[0]==undefined?'':this.formData.createdAt[0],
        endCreatedAt: this.formData.createdAt[1]==undefined?'':this.formData.createdAt[1]
      };
      this.$emit('confirm', params);
    },
    //获取列表
    async getServiceAdvisorList() {
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
      console.log('服务顾问', this.serviceAdvisorList);
    }
  }
};
</script>

<style>
.form-demo-wrap {
  position: relative;
  background-color: #ffffff;
}

.btn-v {
  padding: 40rpx 0;
}

.submit-btn {
  width: 100%;
}
</style>
