## m-page

页面最外层使用 MPage 组件包裹，因为弹窗组件的逻辑在 MPage 组件内部。

```vue
<template>
  <MPage ref="MPage">
    <!-- 页面内容区域 -->
  </MPage>
</template>
```



## base-scroll

下拉刷新，上拉加载组件

| 属性        | 类型     | 必填 | 默认值 | 描述                                                         |
| ----------- | -------- | ---- | ------ | ------------------------------------------------------------ |
| top         | Number   | 0    | 0      | 距离顶部的距离，单位rpx                                      |
| fetchApi    | Function | 1    |        | 请求接口方法                                                 |
| fetchParams | Object   | 1    |        | 请求参数                                                     |
| @listChange |          |      |        | 数据变化回调，固定写法 @listChange="arr => {this.dataSource = arr; }" 回调参数(Array) |

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
      <!-- 自行循环列表，数据源是 dataSource -->
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

头部搜索组件

```vue
<search-filter ref="searchFilter">
  	<!-- 表单自定义组件 SearchForm是自定义组件 -->
		<SearchForm @confirm="searchFormConfirm"></SearchForm>
</search-filter>
```



## m-input

文本框

```vue
<MInput v-model="cph" label="车牌号"></MInput>
```



| 属性        | 类型   | 必填 | 默认值 | 可选值 | 描述     |
| ----------- | ------ | ---- | ------ | ------ | -------- |
| label       | String | 否   | 标题   |        | 标题     |
| v-model     | String | 否   |        |        | 绑定值   |
| placeholder | String | 否   |        |        | 提示信息 |



## m-switch

开关组件

```vue
<MSwitch label="开关" v-model="value_kg"></MSwitch> 
```



| 属性    | 类型   | 必填 | 默认值 | 可选值 | 描述   |
| ------- | ------ | ---- | ------ | ------ | ------ |
| label   | String | 否   | 标题   |        | 标题   |
| v-model | String | 否   |        |        | 绑定值 |

## m-checkbox

选择组件

```vue
<!-- 预约检查 -->
<MCheckbox label="选择顾问 单选" v-model="xsgw" :itemList="itemList_xsgw" single></MCheckbox>
<MCheckbox label="选择顾问 多选" v-model="xsgw2" :itemList="itemList_xsgw2"></MCheckbox>
<MCheckbox
           label="弹窗选择 单选"
           type="popup"
           v-model="xsgw3"
           :itemList="itemList_xsgw3"
           single
           ></MCheckbox>
<MCheckbox
           label="弹窗选择 多选"
           type="popup"
           v-model="xsgw4"
           :itemList="itemList_xsgw4"
           ></MCheckbox>
```

| 属性     | 类型    | 必填 | 默认值 | 可选值      | 描述                      |
| :------- | :------ | :--- | ------ | ----------- | :------------------------ |
| type     | String  | 否   | inner  | inner,popup | 内联选择，弹窗选择        |
| label    | String  | 否   |        |             | 标题                      |
| v-model  | Array   |      |        |             | 绑定值                    |
| itemList | Array   |      |        |             | 选项 [{text:"",value:""}] |
| single   | Boolean | 否   | false  |             | 是否单选                  |
|          |         |      |        |             |                           |
|          |         |      |        |             |                           |
|          |         |      |        |             |                           |



## m-popup

弹窗组件，分中间弹出和底部弹出，

```vue
<MPopup ref="mPopup1" type="center" title="标题1">
	<!-- 弹窗内容 -->
</MPopup>

<MPopup ref="mPopup2" type="bottom" title="标题2">
	<!-- 弹窗内容 -->
</MPopup>
```

```js
// 打开 关闭方法
this.$refs.mPopup.open();  // 打开
this.$refs.mPopup.close(); // 关闭
```



| 属性  | 类型   | 必填 | 默认值 | 可选值          | 描述     |
| ----- | ------ | ---- | ------ | --------------- | -------- |
| title | String |      |        |                 | 标题     |
| type  | String |      | center | center , bottom | 弹出方式 |



## m-date-picker

日期选择组件，

```vue
<MDatePicker label="选择时间" v-model="dateTest"></MDatePicker>
```

| 属性    | 类型   | 必填 | 默认值 | 可选值 | 描述                                                         |
| ------- | ------ | ---- | ------ | ------ | ------------------------------------------------------------ |
| label   | String |      |        |        | 标题                                                         |
| v-model | Array  |      |        |        | 日期：['2020-01-01'] ，日期范围：['2020-01-01','2020-01-10'] |

## m-picker

选择器（滚动）

```vue
<MFadBtn type="right" @click="addOrderBtnClick">新增</MFadBtn>
```

| 属性   | 类型     | 必填 | 默认值 | 可选值           | 描述     |
| ------ | -------- | ---- | ------ | ---------------- | -------- |
| type   | String   | 否   | center | center,left,righ | 位置     |
| @click | Function | 否   |        |                  | 绑定事件 |

## m-fad-btn

底部悬浮按钮

```vue
<MFadBtn type="right" @click="addOrderBtnClick">新增</MFadBtn>
```

| 属性   | 类型     | 必填 | 默认值 | 可选值           | 描述     |
| ------ | -------- | ---- | ------ | ---------------- | -------- |
| type   | String   | 否   | center | center,left,righ | 位置     |
| @click | Function | 否   |        |                  | 绑定事件 |



## nav-date-range-picker

顶部时间范围选择

```vue
<NavDateRangePicker @change="dateRangeChange"></NavDateRangePicker>
```

| 属性    | 类型     | 必填 | 默认值 | 可选值 | 描述                                       |
| ------- | -------- | ---- | ------ | ------ | ------------------------------------------ |
| @change | Function | 否   |        |        | 查询事件 dateRangeChange(array[start,end]) |