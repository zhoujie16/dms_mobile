<!-- 多选折叠面板 -->
<template>
  <view class="m-check-box-panel-wrap">
    <view class="m-check-box-panel-title">
      <MLabel :label="label" :border="false">
        <text @click="foldingHandleClick" class="m-iconfont">
          {{ isFolding ? '&#xe71c;' : '&#xe718;' }}
        </text>
      </MLabel>
    </view>
    <view class="m-check-box-panel-inner" :class="{ active: isFolding }">
      <MCheckboxInner
        :value="value"
        :itemList="itemList"
        :single="single"
        :singleLine="false"
        @input="input"
      ></MCheckboxInner>
    </view>
  </view>
</template>

<script>
import MCheckboxInner from './m-checkbox-inner.vue';
export default {
  name: 'm-checkbox-panel',
  components: {
    MCheckboxInner
  },
  props: {
    label: {
      type: String,
      default: '选择'
    },
    value: {
      type: Array
    },
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFolding: false
    };
  },
  methods: {
    input(value) {
      console.log('选择的结果', this.$util.typeOf(value), value);
      this.$emit('input', value);
    },
    // 折叠按钮点击事件
    foldingHandleClick() {
      this.isFolding = !this.isFolding;
    }
  }
};
</script>

<style lang="scss">
.m-check-box-panel-wrap {
  .m-check-box-panel-title {
  }
  .m-check-box-panel-inner {
    background-color: #FFFFFF;
    height: 100rpx;
    overflow: hidden;
    &.active {
      height: initial;
    }
  }
}
</style>
