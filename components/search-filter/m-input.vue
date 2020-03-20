<template>
  <view>
    <MLabel :label="label" :required="required">
      <view>
        <input
          :value="value"
          @input="inputHandle"
          class="m-input"
          :placeholder="placeholder"
          placeholder-style="font-size: 30rpx;color: #c3c3c3;"
        />
      </view>
      <template v-slot:after>
        <slot name="after"></slot>
      </template>
    </MLabel>
  </view>
</template>

<script>
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
    placeholder: {
      type: String,
      default: '请填写'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    inputHandle(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>

<style>
.m-input {
  padding: 5rpx 0rpx 5rpx 26rpx;
  background-color: initial;
  text-align: right;
}
</style>
