<template>
  <view>
    <scroll-view class="scroll-view-h" :style="{ maxHeight: '900rpx' }" scroll-y>
      <!-- <MLicense label="车牌号"></MLicense> -->
      <MLicense v-model="formData.license"></MLicense>
      <MPicker label="开单日期" mode="range" v-model="formData.createdAt"></MPicker>
      <MInput label="车主姓名" v-model="formData.ownerName"></MInput>
      <MInput label="车主编号" v-model="formData.ownerNo"></MInput>
      <MCheckbox
        label="维修类型"
        type="popup"
        v-model="formData.repairTypeList"
        :itemList="wxlxSelect"
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
          label="服务技师"
          type="popup"
          v-model="formData.technicianList"
          :itemList="technicianList"
        ></MCheckbox>
    </scroll-view>
      <MFormBottom @confirm="formConfirm" @reset="formReset"></MFormBottom>
  </view>
</template>
<script>
  import  { getWxlxSelect } from '@/api/progress-query/index.js';
export default {
  components: {},
  props: {
    serviceAdvisorList: {
      type: Array
    },
    wxlxSelect: {
      type: Array
    },
    technicianList: {
      type: Array
    },
  },
  data() {
    return {
      formData: {
        license: '',  // 车牌号
        ownerName: '',  // 车主姓名
        ownerNo: '',   // 车主编号
        repairTypeList: [],  // 维修类型
        serviceAdvisor: [], // 服务顾问
        technicianList: [],  // 指定技师
        createdAt: ['2018-01-06', '2020-01-06']
      },
    };
  },
  watch: {
    dateTest(dateTest) {
      console.log('dateTest change', dateTest);
    }
  },
  mounted() {
    // 备份初始值 用于重置
    this.formData_reset = { ...this.formData };
    console.log(this.repaiTypeList,'this.repaiTypeList')
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
        ownerName: this.formData.ownerName.trim(),
        ownerNo: this.formData.ownerNo.trim(),
        serviceAdvisor: this.formData.serviceAdvisor[0],
        repairTypeList: this.formData.repairTypeList[0],
        technicianList: this.formData.technicianList[0],
        roCreateDateBegin: this.formData.createdAt[0],
        roCreateDateEnd: this.formData.createdAt[1]
      };
      console.log(params,'params')
      this.$emit('confirm', params);
    },
 }
};
</script>

<style>
.form-demo-wrap {
  position: relative;
  background-color: #ffffff;
  padding: 30rpx;
  margin: 10rpx 0;
}

.btn-v {
  padding: 40rpx 0;
}

.submit-btn {
  width: 100%;
}
</style>
