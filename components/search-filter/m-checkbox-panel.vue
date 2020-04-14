<!-- 多选折叠面板 -->
<template>
  <view class="m-check-box-panel">
    <view v-if="label" class="m-check-box-panel__title">
      <MLabel :label="label" :required="required" :border="false">
        <text v-if="!isFold" @click="foldingHandleClick" class="m-iconfont">
          {{ isFolding ? '&#xe71c;' : '&#xe718;' }}
        </text>
      </MLabel>
    </view>
    <view class="m-check-box-panel__inner" :class="{ active: isFolding }">
      <MCheckboxInner
        :value="value"
        :itemList="itemList"
        :single="single"
        :singleLine="false"
        :readonly="readonly"
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
    },
    // 是否可折叠
    isFold: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  data() {
    return {
      // 是否折叠状态
      isFolding: true
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
.m-check-box-panel {
  .m-check-box-panel__title {
  }
  .m-check-box-panel__inner {
    background-color: #ffffff;
    height: 100rpx;
    overflow: hidden;
    &.active {
      height: initial;
    }
  }
}
</style>
