<!-- 车辆检查项demo -->
<template>
  <MPage ref="MPage">
    <CollapsePanel title="发动机检查">
      <template slot="default">
        <MVehicleCheckCell
          v-for="(item, i) in formData"
          :key="item.fieldName"
          :index="i"
          :type="item.type"
          :label="item.label"
          :itemList="item.itemList"
          :value="item.value"
          :placeholder="item.placeholder"
          :unit="item.unit"
          :hasPhoto="item.hasPhoto"
          @change="formItemChange"
        ></MVehicleCheckCell>
      </template>
    </CollapsePanel>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      formData: [
        {
          fieldName: 'jylqq',
          type: 'select',
          label: '机油滤清器',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'rylqq',
          type: 'select',
          label: '燃油滤清器',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'twzq',
          type: 'input',
          label: '胎纹左前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'twyq',
          type: 'input',
          label: '胎纹右前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'tlzq',
          type: 'date',
          label: '胎龄左前',
          value: ''
        },
        {
          fieldName: 'tlyq',
          type: 'date',
          label: '胎龄右前',
          value: ''
        },
        {
          fieldName: 'zdyhsl',
          type: 'input',
          label: '制动液含水量',
          value: '',
          unit: '%',
          placeholder: '请填写含水量0-10',
          hasPhoto: false
        }
      ]
    };
  },
  methods: {
    // 值改变事件
    async formItemChange(data, index) {
      console.log('修改了', data, index);
      this.formData[index].value = data;
    }
  }
};
</script>

<style lang="scss"></style>
