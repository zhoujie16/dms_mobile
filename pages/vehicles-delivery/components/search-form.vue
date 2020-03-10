<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <!-- <MLicense label="车牌号"></MLicense> -->
      <MLicense></MLicense>
      <MPicker label="交车日期" mode="range" v-model="formData.value_date_2"></MPicker>
      <MInput label="车主姓名" v-model="formData.name"></MInput>
      <MInput label="车主编号" v-model="formData.roNo"></MInput>
      <MCheckbox
        label="维修类型"
        type="inner"
        v-model="formData.value_2"
        :itemList="itemList"
        single
      ></MCheckbox>
      <!-- <MInput v-model="cph" label="车牌号"></MInput> -->
     <!-- <MCheckbox label="服务顾问" v-model="fwgw" :itemList="itemList_fwgw" :type="'popup'" single></MCheckbox> -->
     <!-- <MCheckboxPanel
       label="服务顾问"
       type="inner"
       v-model="fwgw"
       :itemList="itemList_fwgw"
     ></MCheckboxPanel>
      <MDatePicker label="开单日期" v-model="dateTest"></MDatePicker> -->
     
    </view>
    <view class="check-box">
      <MCheckboxPanel
        label="服务顾问"
        type="inner"
        v-model="formData.value_22"
        :itemList="service_itemList"
      ></MCheckboxPanel>
      <MCheckboxPanel
        label="服务技师"
        type="inner"
        v-model="formData.value_22"
        :itemList="service_itemList"
      ></MCheckboxPanel>
      <MCheckboxPanel
        label="服务组织"
        type="inner"
        v-model="formData.value_22"
        :itemList="service_itemList"
      ></MCheckboxPanel>
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      formData: {
        name: '',
        roNo: '',
        value_2: [],
        value_22: [],
        value_3: false,
        value_date_1: ['2020-01-06'],
        value_date_2: ['2018-01-06', '2020-01-06']
      },
      itemList: [
        { text: '机电', value: 1 }, 
        { text: '钣喷', value: 2 }
      ],
      service_itemList: [
        { text: '顾问1', value: 1 },
        { text: '顾问2', value: 2 },
        { text: '顾问3', value: 3 },
        { text: '顾问4', value: 4 },
        { text: '顾问5', value: 5 },
        { text: '顾问6', value: 6 },
        { text: '顾问7', value: 7 },
        { text: '顾问8', value: 8 },
        { text: '顾问9', value: 9 },
        { text: '顾问10', value: 10 }
      ]
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
  margin: 10rpx 0;
}

.btn-v {
  padding: 40rpx 0;
}

.submit-btn {
  width: 100%;
}
</style>
