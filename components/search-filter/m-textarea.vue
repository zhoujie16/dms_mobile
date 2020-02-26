<!-- 文本域 -->
<template>
  <view class="m-textarea-wrap">
    <view class="m-textarea-title"><MLabel :label="label"></MLabel></view>
    <view class="m-textarea-inner">
      <textarea
        :value="value"
        @input="inputHandle"
        class="m-textarea"
        :placeholder="placeholder"
        placeholder-style="font-size: 30rpx;color: #c3c3c3;"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-textarea',
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
      default: '请输入内容（最多200字）'
    },
    require: {
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

<style lang="scss">
.m-textarea-wrap {
  .m-textarea-title {
  }
  .m-textarea-inner {
    background-color: #ffffff;
    padding: 30rpx;
    .m-textarea{
      width: 100%;
      height: 200rpx;
      color: #70767f;
    }
  }
}
</style>
