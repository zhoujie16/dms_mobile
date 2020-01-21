<template>
  <view>
    <z-table :tableData="baseTableData" :columns="baseColumns"></z-table>
  </view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';

export default {
  data() {
    return {
      baseTableData: [
        {
          name: '张三',
          age: 18,
          gender: '男'
        },
        {
          name: '赵四',
          age: 16,
          gender: '女'
        },
        {
          name: '王五',
          age: 20,
          gender: '男'
        },
        {
          name: '李六',
          age: 18,
          gender: '女'
        }
      ],
      baseColumns: [
        {
          title: '姓名',
          key: 'name',
          width: 200
        },
        {
          title: '性别',
          key: 'gender',
          width: 200
        },
        {
          title: '年龄',
          key: 'age',
          width: 200
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
