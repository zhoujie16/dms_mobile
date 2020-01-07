<template>
  <view class="">
    <MLabel :label="label" :row="2">
      <button @click="showPopupClick" size="mini" type="default" class="submit-btn">
        {{ value ? value : '日期选择' }}
      </button>
    </MLabel>
  </view>
</template>

<script>
import MCheckboxInner from './m-checkbox-inner.vue';

export default {
  name: 'm-input',
  components: { MCheckboxInner },
  props: {
    label: {
      type: String,
      default: '日期选择'
    },
    value: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    input(value) {
      this.$emit('input', value);
    },
    showPopupClick() {
      this.$root.$refs.MPage.MDatePickerPopup.showPicker().then(value => {
        console.log('选择的结果', value);
        this.input(value.join(','));
      });
    }
  }
};
</script>

<style lang="scss">
.submit-btn {
  width: 100%;
}
</style>
