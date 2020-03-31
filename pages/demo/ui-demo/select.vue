<!-- 表单demo -->
<template>
  <MPage ref="MPage">
    <view class="m-break-space">单选</view>
    <!-- 单选 弹窗 -->
    <MCheckbox
      label="单选 弹窗"
      type="popup"
      v-model="formData.value_1"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 弹窗 必填-->
    <MCheckbox
      label="单选 弹窗 必填"
      required
      type="popup"
      v-model="formData.value_11"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 弹窗 只读-->
    <MCheckbox
      label="单选 弹窗 只读"
      readonly
      type="popup"
      v-model="formData.value_111"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 行内 -->
    <MCheckbox
      label="单选 行内"
      type="inner"
      v-model="formData.value_1"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 行内 必填-->
    <MCheckbox
      label="单选 行内 必填"
      required
      type="inner"
      v-model="formData.value_11"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <!-- 单选 行内 只读-->
    <MCheckbox
      label="单选 行内 只读"
      readonly
      type="inner"
      v-model="formData.value_111"
      :itemList="itemList_1"
      single
    ></MCheckbox>

    <view class="m-break-space">多选</view>
    <!-- 多选 单行 -->
    <MCheckbox
      label="多选 行内"
      type="inner"
      v-model="formData.value_2"
      :itemList="itemList_3"
    ></MCheckbox>

    <view class="m-break-space"></view>

    <!-- 多选 可折叠 -->
    <MCheckboxPanel
      label="多选 可折叠"
      type="inner"
      v-model="formData.value_3"
      :itemList="itemList_2"
    ></MCheckboxPanel>

    <view class="m-break-space"></view>

    <!-- 多选 不可折叠   -->
    <MCheckboxPanel
      label="多选 不可折叠"
      type="inner"
      :isFold="false"
      v-model="formData.value_3"
      :itemList="itemList_2"
    ></MCheckboxPanel>

    <view class="m-break-space">多选 无标题的</view>

    <!-- 多选 无标题的   -->
    <MCheckboxPanel
      label=""
      type="inner"
      :isFold="false"
      v-model="formData.value_3"
      :itemList="itemList_2"
    ></MCheckboxPanel>

    <view class="m-break-space">js调用</view>
    <view style="padding: 20rpx;">
      <m-button class="demo-btn" block @click.native="showPicker_1">单选</m-button>
      <!-- <m-button class="demo-btn" block @click.native="showPicker_2">多选</m-button> -->
    </view>
  </MPage>
</template>

<script>
export default {
  mounted() {
    // #ifdef H5
    window.app = this;
    // #endif
  },
  data() {
    return {
      formData: {
        value_1: [],
        value_11: [],
        value_111: ['2'],
        value_2: [],
        value_3: []
      },
      itemList_1: [{ text: '是', value: '1' }, { text: '否', value: '2' }],
      itemList_2: [
        { text: '顾问1', value: '1' },
        { text: '顾问2', value: '2' },
        { text: '顾问3', value: '3' },
        { text: '顾问4', value: '4' },
        { text: '顾问5', value: '5' },
        { text: '顾问6', value: '6' },
        { text: '顾问7', value: '7' },
        { text: '顾问8', value: '8' },
        { text: '顾问9', value: '9' },
        { text: '顾问10', value: '10' }
      ],
      itemList_3: [
        { text: '王', value: '1' },
        { text: '大', value: '2' },
        { text: '锤', value: '3' }
      ]
    };
  },
  methods: {
    /**
     * 单选弹出
     * 入参:
     * single: Boolean 单选
     * itemList  数据选项数组text,value值需为字符串 [{ text: '1', value: '1' }]
     * 出参:
     * [value]
     */
    async showPicker_1() {
      const res = await this.SHOW_PICKER({
        single: true,
        itemList: [
          { text: '选项1', value: '1' },
          { text: '选项2', value: '2' },
          { text: '选项3', value: '3' },
          { text: '选项4', value: '4' },
          { text: '选项5', value: '5' }
        ],
        value: ['3']
      });
      console.log('SHOW_PICKER', res);
      this.SHOW_TOAST(JSON.stringify(res));
    },
    /**
     * 多选弹出，参数同上单选
     */
    async showPicker_2() {
      this.SHOW_TOAST('还没写好');
    }
  }
};
</script>

<style lang="scss">
.demo-btn {
  margin-bottom: 20rpx;
}
</style>
