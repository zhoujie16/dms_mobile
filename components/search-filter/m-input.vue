<template>
  <view>
    <MLabel :label="label">
      <view>
        <input :value="value" @input="inputHandle" class="y-input" :placeholder="placeholder" />
      </view>
    </MLabel>
  </view>
</template>

<script>
export default {
  name: 'm-input',
  components: {},
  props: {
    label: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: '请输入'
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
.y-title {
  margin: 8rpx 0;
}

.y-input {
  padding: 6rpx 26rpx;
  background-color: #f4f4f4;
}
</style>
