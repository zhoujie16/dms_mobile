## search-filter 抽屉式表单组件

### 代码

```vue
<search-filter ref="searchFilter">
  	<!-- 表单自定义组件 SearchForm是自定义组件 -->
		<SearchForm @confirm="searchFormConfirm"></SearchForm>
</search-filter>
```



## m-input

### 参数

- label  { String }  
- v-model  { String }
- placeholder  { String }

### 方法



### 代码

```vue
<MInput v-model="cph" label="车牌号"></MInput>
```





## m-switch

### 参数

- label { String }

- v-model  { Boolean }

### 代码

```vue
<MSwitch label="开关" v-model="value_kg"></MSwitch>
```



## m-checkbox

- type { String }  类型，内联选择，弹窗选择，可选值 popup(默认)， inner
- label { String }
- v-model { Array }
- itemList { Array }  选项数组，格式： [{text:"",value:""}]
- single { Boolean }  单选、多选

### 代码

```vue
<MCheckbox label="内联选择 单选" v-model="xsgw" :itemList="itemList_xsgw" single></MCheckbox>
<MCheckbox label="内联选择 多选" v-model="xsgw2" :itemList="itemList_xsgw2"></MCheckbox>
<MCheckbox 
  label="弹窗选择 单选" 
  type="popup" 
  v-model="xsgw3" 
  :itemList="itemList_xsgw3" 
  :single="true"
></MCheckbox>
<MCheckbox
  label="弹窗选择 多选"
  type="popup"
  v-model="xsgw4"
  :itemList="itemList_xsgw4"
></MCheckbox>
```







## m-date-picker

日期选择组件，弹窗选择日期，当天，最近7天，最近一个月，自定义范围

### 参数

- label  { String }
- v-model { Array }  格式： 日期：['2020-01-01'] ，日期范围：['2020-01-01','2020-01-10']

### 代码

```vue
<MDatePicker label="选择时间" v-model="dateTest"></MDatePicker>
```

```js
// js调用方法
const res_date = await this.$root.$refs.MPage.MDatePickerPopup.showPicker();
console.log('选择的日期', res_date); // 结果: ['2020-01-01','2020-01-11']
```



## m-picker

弹窗滚动选择器

### 参数



### 代码

```

```





