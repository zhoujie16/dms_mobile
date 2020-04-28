---
pageClass: demo-page
---

# validator

### 表单校验

### Props

| 参数      | 类型    | 说明                          |
| --------- | ----------------- | ----------------------------- |
|      | String  |                           |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
|        |      | 无       |



### 代码

```vue
<template>
  <!-- 表单校验 -->
  <MPage ref="MPage">
    <MInput label="name" required v-model="formData.name"></MInput>
    <MInput label="age" required v-model="formData.age"></MInput>
    <MInput label="mobile" v-model="formData.mobile"></MInput>

    <view style="padding: 20rpx">
      <m-button class="demo-btn" block @click.native="test">测试</m-button>
    </view>
  </MPage>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '哈哈哈',
        age: '11',
        mobile: '17521282018'
      }
    };
  },
  methods: {
    /**
     * 测试表单校验
     * 规则参数同 element-ui
     * 更多高级用法可参考 async-validator
     * https://github.com/yiminghe/async-validator
     */
    async test() {
      // 字段对应校验规则
      const rule = {
        name: {
          required: true,
          message: 'name不能为空'
        },
        // 多个规则
        age: [
          { required: true, message: 'age不能为空' },
          {
            // 自定义规则
            validator: (rule, value) => {
              return Number(value) > 10;
            },
            message: 'age必须大于10'
          }
        ],
        mobile: {
          // 正则匹配规则
          pattern: /^1[3456789]\d{9}$/,
          message: '手机号码不合法'
        }
      };

      // 校验 返回 数组 [err]
      const [validErr] = await this.$validator.validate(this.formData, rule);

      if (validErr) {
        console.log('校验未通过', validErr);
        this.SHOW_TOAST(validErr.message);
        return;
      }
      console.log('校验通过');
      this.SHOW_TOAST('校验通过');
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



<DemoFrame src="/validator"></DemoFrame>