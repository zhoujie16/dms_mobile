<template>
  <view>
    <MLabel
      :label="label"
      :required="required"
      :border="border"
      :icon="icon"
      :is-link="isLink"
      :unit="unit || after"
      :right-icon="rightIcon"
      @rightIconClick="rightIconClick"
    >
      <template v-slot:default>
        <input
          class="m-input"
          :value="value"
          :type="type"
          @input="inputHandle"
          :placeholder="placeholder"
          placeholder-style="font-size: 30rpx;color: #c3c3c3;"
          :maxlength="maxlength"
          :disabled="disabled || readonly"
          @focus="focus"
          @blur="blur"
        />
      </template>
      
      <!-- after 计划废弃 -->
      <template v-slot:after>
        <view v-if="after">{{ after }}</view>
        <slot v-else name="after"></slot>
      </template>
    </MLabel>
  </view>
</template>

<script>
/**
 * @description 文字输入框
 *
 * @property {String} label 标题
 * @property {String} type = [text | number] input 的类型
 * @property {String} placeholder 输入框为空时占位符
 * @property {Boolean} required = [true | false] 必填项
 * @property {Boolean} readonly = [true | false] 是否只读
 * @property {Boolean} disabled 是否禁用
 * @property {Number} maxlength 最大输入长度，设置为 -1 的时候不限制最大长度
 * @property {String} after 单位
 * 
 * @event {Function(e)} focus 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度
 * @event {Function(e)} blur 输入框失去焦点时触发，event.detail = {value: value}
 */
export default {
  name: 'm-input',
  components: {},
  props: {
    /** extend m-label S */
    label: {
      type: String,
      default: '标题'
    },
    required: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    /** extend m-label E */
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请填写'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 140
    },
    // 这个考虑废弃 用unit字段
    after: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {
    inputHandle(e) {
      this.$emit('input', e.target.value);
    },
    focus(e) {
      this.$emit('focus', e);
    },
    blur(e) {
      this.$emit('blur', e);
    },
    linkClick(e) {
      this.$emit('linkClick', e);
    },
    rightIconClick() {
      this.$emit('rightIconClick');
    }
  }
};
</script>

<style lang="scss">
.m-input {
  padding: 5rpx 0rpx 5rpx 26rpx;
  background-color: initial;
  text-align: right;
}
.link-mobile {
  width: 56rpx;
  height: 56rpx;
  margin-left: 10rpx;
}
.link-search {
  font-size: 50rpx;
  margin-left: 10rpx;
  color: $uni-m-color-c11;
}
.slot-after {
  margin-left: 10rpx;
}
</style>
