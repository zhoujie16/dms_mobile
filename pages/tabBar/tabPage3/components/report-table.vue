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
          age: 18
        },
        {
          name: '赵四',
          age: 16
        },
        {
          name: '王五',
          age: 20
        },
        {
          name: '李六',
          age: 18
        }
      ],
      baseColumns: [
        {
          title: '服务顾问',
          key: 'name',
          width: 200
        },
        {
          title: '进厂台次',
          key: 'age',
          width: 200
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
