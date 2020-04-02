<template>
  <view>
    <scroll-view class="scroll-view-h" :style="{ maxHeight: '900rpx' }" scroll-y>
      <MLicense label="车牌号" v-model="formData.license" searchType="scan"></MLicense>
      <MInput v-model="formData.ownerName" label="车主名称"></MInput>
      <MInput v-model="formData.roNo" label="工单号"></MInput>
      <MCheckbox
        label="是否录入"
        type="popup"
        v-model="formData.isInput"
        :itemList="recordList"
        single
      ></MCheckbox>
      <MCheckbox
        label="服务顾问"
        type="popup"
        v-model="formData.serviceAdvisor"
        :itemList="serviceAdvisorList"
        single
      ></MCheckbox>
      <MCheckbox
        label="指定技师"
        type="popup"
        v-model="formData.chiefTechnician"
        :itemList="technicianList"
        single
      ></MCheckbox>
      <MPicker label="开单日期" mode="range" v-model="formData.createdAt"></MPicker>
    </scroll-view>
    <MFormBottom @confirm="formConfirm" @reset="formReset"></MFormBottom>
  </view>
</template>
<script>
import dictCode from '@/common/dict/dictCode.js';
export default {
  components: {},

  data() {
    return {
      formData: {
        license: '',
        ownerName: '',
        roNo: '',
        serviceAdvisor: [],
        isInput: [],
        chiefTechnician: [],
        createdAt: []
      },
      serviceAdvisorList: [],
      technicianList: [],
      recordList: this.$commonDict.RECORD_LIST
    };
  },
  mounted() {
    this.getServiceAdvisorList();
    this.getTechnicianList();
    // 备份初始值 用于重置
    this.formData_reset = { ...this.formData };
  },
  methods: {
    //重置表单
    formReset() {
      this.formData = { ...this.formData_reset };
    },
    //确认查询
    formConfirm() {
      console.log(this.formData.license);
      let params = {
        license: this.formData.license.trim(),
        ownerName: this.formData.ownerName,
        roNo: this.formData.roNo,
        serviceAdvisor: this.$auth.isEmpty(this.formData.serviceAdvisor[0]),
        isInput: this.$auth.isEmpty(this.formData.isInput[0]),
        chiefTechnician: this.$auth.isEmpty(this.formData.chiefTechnician[0]),
        beginCreatedAt: this.$auth.isEmpty(this.formData.createdAt[0]),
        endCreatedAt: this.$auth.isEmpty(this.formData.createdAt[1])
      };
      this.$emit('confirm', params);
    },
    //服务顾问列表
    async getServiceAdvisorList() {
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
    },
    //服务技师列表
    async getTechnicianList() {
      //服务技师
      let technician = { role: dictCode.TECHNICIAN, companyId: this.$auth.getCompanyId() };
      this.technicianList = await this.$auth.queryServiceAdvisor(technician);
    }
  }
};
</script>

<style>
.form-demo-wrap {
  position: relative;
  background-color: #ffffff;
  padding: 30rpx;
}

.btn-v {
  padding: 40rpx 0;
}

.submit-btn {
  width: 100%;
}
</style>
