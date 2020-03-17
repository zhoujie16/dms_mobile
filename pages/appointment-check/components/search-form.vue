<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <MLicense v-model="searchFilter.license"></MLicense>
      <!-- <MPicker label="开单日期" mode="range" v-model="value_date_2"></MPicker> -->
      <MCheckboxPanel
        label="服务顾问"
        type="inner"
        v-model="searchFilter.serviceAdvisor"
        :itemList="itemList_fwgw"
        single
      ></MCheckboxPanel>
      <MPicker label="开单日期" mode="range" v-model="searchFilter.createdAt"></MPicker>
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
      itemList_fwgw: [
        { text: '王大锤', value: '1' },
        { text: '张全蛋', value: '2' },
        { text: '赵铁柱', value: '3' },
        { text: '王尼玛', value: '4' },
        { text: '陈二狗', value: '5' }
      ]
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
