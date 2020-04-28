---
pageClass: demo-page
---

# m-checkbox-panel

### 多行选择组件

### Props

| 参数      | 类型    | 说明                          |
| --------- | ----------------- | ----------------------------- |
| label | String  | 标题 |
| v-model | Array | 绑定值 |
| required | Boolean | 显示必填图标，默认 false |
| itemList | Array | 选项数据 |
| single | Boolean | 是否单选，默认 false |
| isFold | Boolean | 是否可折叠，默认 true |
| readonly | Boolean | 是否只读，默认 false |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
|        |      | 无       |



### 代码

```vue
<template>
  <MPage ref="MPage">
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
        value_2: [],
        value_3: []
      },
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

```



<DemoFrame src="/m-checkbox-panel"></DemoFrame>