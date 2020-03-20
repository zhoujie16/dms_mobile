<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <MLicense v-model="searchFilter.license"></MLicense>
      <!-- <MPicker label="开单日期" mode="range" v-model="value_date_2"></MPicker> -->
      <MCheckboxPanel
        label="服务顾问"
        type="inner"
        v-model="searchFilter.serviceAdvisor"
        :itemList="serviceAdvisorList"
        single
      ></MCheckboxPanel>
      <MPicker label="开单日期" mode="range" v-model="searchFilter.createdAt"></MPicker>
       <MFormBottom @confirm="formConfirm" @reset="formReset"></MFormBottom>
    </view>
  </view>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      searchFilter: {
        license: '',
        serviceAdvisor: [],
        createdAt: []
      },
      serviceAdvisorList: []
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
      this.searchFilter = { ...this.formData_reset };
    },
    //确认查询
    formConfirm() {
      let params = {
        license: this.searchFilter.license.trim(),
        serviceAdvisor: this.searchFilter.serviceAdvisor[0],
        beginCreatedAt: this.searchFilter.createdAt[0],
        endCreatedAt: this.searchFilter.createdAt[1]
      };
      this.$emit('confirm', params);
    },
    //获取列表
    async getServiceAdvisorList() {
      console.log(444)
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
      console.log('服务顾问', this.serviceAdvisorList)
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
