<template>
  <MPage ref="MPage" style="padding: 20rpx">
    <MButton class="demo-btn" @click.native="test_createDictList">test_createDictList</MButton>
    <MButton class="demo-btn" @click.native="test_createDictText">test_createDictText</MButton>
    <MButton class="demo-btn" @click.native="test_createDictRegion">test_createDictRegion</MButton>
    <MButton class="demo-btn" @click.native="test_addressClisk">地址选择</MButton>
    <MPicker label="地址选择" mode="address" v-model="formData.address"></MPicker>
    <MCheckbox
      label="单选 popup"
      type="popup"
      v-model="formData.value_1"
      :itemList="itemList_1"
      single
    ></MCheckbox>
    <textarea :value="res_text" :maxlength="-1" style="height: 600rpx;width: 100%;" />
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      res_text: '',
      formData: {
        value_1: '',
        address: ['22030', '22061', '22062']
      },
      itemList_1: this.$dict.createDictList('8094')
    };
  },
  methods: {
    async test_createDictList() {
      const itemList = this.$dict.createDictList('8094');
      this.itemList_1 = itemList;
      this.res_text = JSON.stringify(itemList, null, 1);
    },
    async test_createDictText() {
      const text = this.$dict.createDictText('80941004', '8094');
      this.res_text = text;
    },
    async test_createDictRegion() {
      const dictRegion = this.$dict.createDictRegion();
      this.res_text = JSON.stringify(dictRegion, null, 1);
    },
    async test_addressClisk() {
      const res = await this.SHOW_ADDRESS_PICKER({ value: this.formData.address });
      console.log('SHOW_ADDRESS_PICKER', res);
      this.SHOW_TOAST(JSON.stringify(res));
    }
  }
};
</script>

<style lang="scss">
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
