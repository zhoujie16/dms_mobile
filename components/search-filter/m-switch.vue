<template>
  <view>
    <MLabel :label="label">
      <view>
        <switch :checked="value" type="switch" @change="switch1Change" />
      </view>
    </MLabel>
  </view>
</template>

<script>
export default {
  name: 'm-switch',
  components: {},
  props: {
    label: {
      type: String,
      default: '标题'
    },
    value: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  methods: {
    switch1Change(e) {
      this.$emit('input',e.target.value);
    }
  }
};
</script>

<style lang="scss">
 

</style>
