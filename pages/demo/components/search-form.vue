<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <MInput v-model="cph" label="车牌号"></MInput>
      <MCheckbox label="选择顾问 单选" v-model="xsgw" :itemList="itemList_xsgw" single></MCheckbox>
      <MCheckbox label="选择顾问 多选" v-model="xsgw2" :itemList="itemList_xsgw2"></MCheckbox>
      <MLabel v-model="cph" label="弹窗选择 单选" :row="2">
        <button @click="test1" size="mini" type="default" class="submit-btn">
          {{ val_test1 ? val_test1 : '弹窗选择' }}
        </button>
      </MLabel>
      <MLabel v-model="cph" label="弹窗选择 多选" :row="2">
        <button @click="test11" size="mini" type="default" class="submit-btn">
          {{ val_test11 ? val_test11 : '弹窗选择' }}
        </button>
      </MLabel>
      <MLabel v-model="cph" label="日期选择" :row="2">
        <button @click="test2" size="mini" type="default" class="submit-btn">
          {{ val_test2 ? val_test2 : '日期选择' }}
        </button>
      </MLabel>
      <view class="btn-v">
        <button @click="formSubmit" type="primary" class="submit-btn">查询</button>
      </view>
    </view>
  </view>
</template>
<script>
const testArr = [
  {
    text: '顾问1',
    value: 1
  },
  {
    text: '顾问2',
    value: 2
  },
  {
    text: '顾问3',
    value: 3
  },
  {
    text: '顾问4',
    value: 4
  },
  {
    text: '顾问5',
    value: 5
  },
  {
    text: '顾问6',
    value: 6
  },
  {
    text: '顾问7',
    value: 7
  },
  {
    text: '顾问8',
    value: 8
  },
  {
    text: '顾问9',
    value: 9
  },
  {
    text: '顾问10',
    value: 10
  }
];
export default {
  components: {},
  data() {
    return {
      cph: 'aa',
      dateTime: [],
      xsgw: [],
      itemList_xsgw: [...testArr],
      xsgw2: [],
      itemList_xsgw2: [...testArr],
      val_test1: '',
      val_test11: '',
      val_test2: ''
    };
  },
  methods: {
    // 查询按钮事件
    formSubmit() {
      console.log('formSubmit');
      this.$emit('confirm');
    },
    test1() {
      this.$root.$refs.MCheckboxPopup.showPicker({
        single: true,
        itemList: this.itemList_xsgw,
        value: []
      }).then(value => {
        console.log('选择的结果', value);
        this.val_test1 = value.join(',');
      });
    },
    test11() {
      this.$root.$refs.MCheckboxPopup.showPicker({
        single: false,
        itemList: this.itemList_xsgw,
        value: []
      }).then(value => {
        console.log('选择的结果', value);
        this.val_test11 = value.join(',');
      });
    },
    test2() {
      this.$root.$refs.MDatePickerPopup.showPicker().then(value => {
        console.log('选择的结果', value);
        this.val_test2 = value.join(' 至 ');
      });
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
