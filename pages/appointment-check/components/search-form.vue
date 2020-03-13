<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <MLicense v-model="value_cph"></MLicense>
      <!-- <MPicker label="开单日期" mode="range" v-model="value_date_2"></MPicker> -->
      <MCheckboxPanel
       label="服务顾问"
       type="inner"
       v-model="fwgw"
       :itemList="itemList_fwgw"
       single
     ></MCheckboxPanel>
     <MPicker label="开单日期" mode="range" v-model="value_date_2"></MPicker>
      
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value_cph: '',
      value_date_2: ['2018-01-06', '2020-01-06'],
      fwgw:[],
      itemList_fwgw: [
        { text: '王大锤', value: '1' },
        { text: '张全蛋', value: '2' },
        { text: '赵铁柱', value: '3' },
        { text: '王尼玛', value: '4' },
        { text: '陈二狗', value: '5' }
      ],
    };
  },
  watch: {
    
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
