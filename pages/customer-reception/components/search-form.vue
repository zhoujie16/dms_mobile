<template>
  <view>
    <view class="form-demo-wrap">
      <MLicense label="车牌号" :value="formData.license"></MLicense>
      <MCheckbox
        label="服务顾问"
        type="popup"
        v-model="formData.serviceAdvisor"
        :itemList="serviceAdvisorList"
        single
      ></MCheckbox>
      <MCheckbox
        label="是否交车"
        type="popup"
        v-model="formData.deliveryTag"
        :itemList="itemList_sfjc"
        single
      ></MCheckbox>

      <MInput label="车主名称" :value="formData.ownerName"></MInput>
      <MInput label="预检单号" :value="formData.yjNo"></MInput>
      <MInput label="工单号" :value="formData.roNo"></MInput>
      <MPicker label="开单日期" mode="range" v-model="formData.createdAt"></MPicker>
     
    </view>
     <MFormBottom @confirm="formConfirm" @reset="formReset"></MFormBottom>
  </view>
</template>
<script>
export default {
  components: {},
  props:{
    serviceAdvisorList:{
      type:Array
    }
  },
  data() {
    return {
      formData: {
        license: '',
        serviceAdvisor: [],
        deliveryTag: [],
        ownerName: '',
        yjNo: '',
        roNo: '',
        createdAt: ['2018-01-06', '2020-01-06']
      },
      itemList_sfjc: [{ text: '已交车', value: '1' }, { text: '未交车', value: '2' }]
    };
  },
  mounted() {
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
      let params = {
        license: this.formData.license.trim(),
        serviceAdvisor: this.formData.serviceAdvisor[0],
        deliveryTag: this.formData.deliveryTag[0],
        ownerName: this.formData.ownerName,
        yjNo: this.formData.yjNo,
        roNo: this.formData.roNo,
        beginCreatedAt: this.formData.createdAt[0],
        endCreatedAt: this.formData.createdAt[1]
      };
      this.$emit('confirm', params);
    }
  }
};
</script>

<style>
.form-demo-wrap {
  position: relative;
  background-color: #ffffff;
  margin-bottom: 30rpx;
}

.btn-v {
  padding: 40rpx 0;
}

.submit-btn {
  width: 100%;
}
</style>
