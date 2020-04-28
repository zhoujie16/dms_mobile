---
pageClass: demo-page
---

# swiper-tab

### 选项卡



### SwiperTab Props

| 参数      | 类型    | 说明                          |
| --------- | ----------------- | ----------------------------- |
| height | Number | 高度，单位px |
| tabs | Array | 标签页文字，例如 ['类型一', '类型二', '类型三'], |
| curIndex | Number | 选中的标签 |

### SwiperTab Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| change | 选项卡切换后触发 | event    |



### swiper Props

| 参数     | 类型   | 说明       |
| -------- | ------ | ---------- |
| curIndex | Number | 选中的标签 |

### swiper Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| change | 选项卡切换后触发 | event    |



### 代码

```vue
<template>
  <MPage ref="MPage">
    <SwiperTab 
      :height="swiperTabHeight" 
      :tabs="tabs" 
      :curIndex="curIndex" 
      @change="changeTab"
    >
      <swiper 
        style="height: 100%;" 
        class="swiper-wrap" 
        :current="curIndex" 
        @change="swiperChange"
      >
      
        <swiper-item>
          <view class="demo-page page-0">0</view>
        </swiper-item>
        
        <swiper-item>
          <view class="demo-page page-1">1</view>
        </swiper-item>
        
        <swiper-item>
          <view class="demo-page page-2">2</view>
        </swiper-item>
        
      </swiper>
    </SwiperTab>
  </MPage>
</template>

<script>
export default {
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 40 + 'px';
    return {
      tabs: ['类型一', '类型二', '类型三'],
      curIndex: 0
    };
  },
  methods: {
    // 轮播菜单
    swiperChange(e) {
      const current = e.detail.current;
      this.changeTab(current);
      // curIndex = 2 的页面不允许进入
      if (current === 2) { 
        this.$nextTick(() => {
          this.changeTab(current - 1);
        });
      }
    },
    // 切换菜单
    changeTab(i) {
      this.curIndex = i;
    }
  }
};
</script>

<style lang="scss">
.demo-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.page-0 {
    background-color: #f2f6fc;
  }
  &.page-1 {
    background-color: #ebeef5;
  }
  &.page-2 {
    background-color: #e4e7ed;
  }
}
</style>
```



<DemoFrame src="/swiper-tab"></DemoFrame>

