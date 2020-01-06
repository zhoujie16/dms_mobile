<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <MInput v-model="cph" label="车牌号"></MInput>
      <MInput v-model="khmc" label="客户名称"></MInput>
      <MInput v-model="gdbh" label="工单编号"></MInput>
      <MCheckbox label="维修类型" v-model="wxlx" :itemList="itemList_wxlx" single></MCheckbox>
      <MCheckbox label="服务组织" v-model="fwzz" :itemList="itemList_fwzz"></MCheckbox>
      <MCheckbox label="服务顾问" v-model="fwgw" :itemList="itemList_fwgw" single></MCheckbox>
      <MCheckbox label="是否交车" v-model="sfjc" :itemList="itemList_sfjc" single></MCheckbox>
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
      wxlx: [],
      fwzz: [],
      fwgw: [],
      sfjc: [],
      itemList_wxlx: [{ text: '机电', value: '1' }, { text: '钣喷', value: '2' }],
      itemList_fwzz: [
        { text: '组织1', value: '1' },
        { text: '组织2', value: '2' },
        { text: '组织3', value: '3' },
        { text: '组织4', value: '4' },
        { text: '组织5', value: '5' }
      ],
      itemList_fwgw: [
        { text: '王大锤', value: '1' },
        { text: '张全蛋', value: '2' },
        { text: '赵铁柱', value: '3' },
        { text: '王尼玛', value: '4' },
        { text: '陈二狗', value: '5' }
      ],
      itemList_sfjc: [{ text: '已交车', value: '1' }, { text: '未交车', value: '2' }],
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
