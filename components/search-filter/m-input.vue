<template>
  <view>
    <MLabel :label="label" :required="required">
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
    label: {
      type: String,
      default: '标题'
    },
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
    required: {
      type: Boolean,
      default: false
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
</style>
