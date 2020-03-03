<!-- 左滑操作 demo -->
<template>
  <MPage ref="MPage" style="padding: 20rpx 0;">
    <!-- 
       options 左滑显示按钮配置
           [{ text: '删除', type: 'warn' }, { text: '收藏', type: 'primary' }]
       @optionClick  点击按钮触发  参数:  { text, index }
       @change  组件打开或关闭时触发  参数: true / false
     -->
    <MSwipeCell
      :disabled="false"
      :options="[{ text: '删除', type: 'warn' }, { text: '收藏', type: 'primary' }]"
      @optionClick="optionClick"
      @change="swipeChange"
    >
      <template v-slot:cell>
        <view class="test-cell">我可以左滑哦</view>
      </template>
    </MSwipeCell>
  </MPage>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    optionClick({ text, index }) {
      console.log('点击滑动区域按钮', { text, index });
      this.SHOW_TOAST(text);
    },
    swipeChange(state) {
      console.log('状态', state);
    }
  }
};
</script>

<style lang="scss">
.test-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100rpx;
}
</style>
