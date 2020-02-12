<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <MInput v-model="cph" label="车牌号"></MInput>
      <MInput v-model="khmc" label="车主名称"></MInput>
      <MInput v-model="gdbh" label="工单号"></MInput>
      <MCheckbox label="是否录入" v-model="sflr" :itemList="itemList_sflr" single></MCheckbox>
      <MCheckbox label="服务顾问" v-model="fwgw" :itemList="itemList_fwgw" single></MCheckbox>

      <MCheckbox label="技师名称" v-model="jsmc" :itemList="itemList_jsmc" single></MCheckbox>
      <MCheckbox label="服务组织" v-model="fwzz" :itemList="itemList_fwzz"></MCheckbox>
      <MDatePicker label="开单日期" v-model="dateTest"></MDatePicker>
      <view class="btn-v">
        <button @click="formSubmit" type="primary" class="submit-btn">查询</button>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cph: '',
      khmc: '',
      gdbh: '',
      //
      jsmc: [],
      fwzz: [],
      fwgw: [],
      sflr: [],
      itemList_jsmc: [
        { text: '王大锤', value: '1' },
        { text: '张全蛋', value: '2' },
        { text: '赵铁柱', value: '3' }
      ],
      itemList_fwzz: [
        { text: '组织1', value: '1' },
        { text: '组织2', value: '2' },
        { text: '组织3', value: '3' }
      ],
      itemList_fwgw: [
        { text: '王大锤', value: '1' },
        { text: '张全蛋', value: '2' },
        { text: '赵铁柱', value: '3' }
      ],
      itemList_sflr: [
        { text: '未录入', value: '1' },
        { text: '已录入', value: '2' },
        { text: '全部', value: '3' }
      ],
      dateTest: ['']
    };
  },
  watch: {
    dateTest(dateTest) {
      console.log('dateTest change', dateTest);
    }
  },
  methods: {
    // 查询按钮事件
    formSubmit() {
      console.log('formSubmit');
      this.$emit('confirm');
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
