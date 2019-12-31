## base-scroll

| 属性        | 类型     | 必填 | 默认值 | 描述         |
| ----------- | -------- | ---- | ------ | ------------ |
| top         | Number   | 0    | 0      |              |
| fetchApi    | Function | 1    |        | 请求接口方法 |
| fetchParams | Object   | 1    |        | 请求参数     |
|             |          |      |        |              |

| 事件        | 说明         | 回调参数    |
| ----------- | ------------ | ----------- |
| @listChange | 数据变化回调 | Array: 数据 |
|             |              |             |

```vue
<template>
  <view class="page-wrap">
    <BaseScroll
      :top="100"
      :fetchApi="fetchApi"
      :fetchParams="fetchParams"
      @listChange="
        arr => {
          this.dataSource = arr;
        }
      "
    >
      <view
        class="base-scroll-inner"
        @click="scrollCellClick"
        v-for="(data, i) in dataSource"
        :key="i"
      >
        <ScrollCell :cell="data"></ScrollCell>
      </view>
    </BaseScroll>
  </view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ScrollCell from './components/scroll-cell.vue';
export default {
  components: {
    ScrollCell,
  },
  data() {
    return {
      fetchApi: AjaxScrollData,
      fetchParams: {},
      dataSource: []
    };
  },
  methods: {
    // 列表点击事件
    scrollCellClick(cell) {
      console.log('cellClick', cell);
      return;
      uni.navigateTo({
        url: '/pages/demo/detail-demo'
      });
    },
  }
};
</script>


```



## search-filter

```vue
<search-filter ref="searchFilter">
		<slot> 表单结构 </slot>
</search-filter>
```

| 属性 | 类型 | 必填 | 默认值 | 可选值 | 描述 |
| ---- | ---- | ---- | ------ | ------ | ---- |
|      |      |      |        |        |      |
|      |      |      |        |        |      |

| 事件 | 说明 | 回调 |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |

## m-input

| 属性        | 类型   | 必填 | 默认值 | 可选值 | 描述 |
| ----------- | ------ | ---- | ------ | ------ | ---- |
| label       | String |      | 标题   |        |      |
| v-model     | String |      |        |        |      |
| placeholder | String |      |        |        |      |

| 事件 | 说明 | 回调 |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |

## m-checkbox

选择组件

| 属性     | 类型    | 必填 | 默认值 | 可选值      | 描述                 |
| :------- | :------ | :--- | ------ | ----------- | :------------------- |
| type     | String  | 否   |        | Inner,popup | 内联选择，弹窗选择   |
| label    | String  |      |        |             |                      |
| v-model  | Array   |      |        |             |                      |
| itemList | Array   |      |        |             | { text:'',value:'' } |
| single   | Boolean |      | false  |             |                      |
|          |         |      |        |             |                      |
|          |         |      |        |             |                      |
|          |         |      |        |             |                      |

## m-date-picker

| 属性    | 类型   | 必填 | 默认值 | 可选值 | 描述 |
| ------- | ------ | ---- | ------ | ------ | ---- |
| label   | String |      |        |        |      |
| v-model | Array  |      |        |        |      |

| 事件 | 说明 | 回调 |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |





