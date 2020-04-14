<template>
  <view class="">
    <MLabel :label="label"
      <button @click="showPopupClick" size="mini" type="default" class="submit-btn">
        {{ tipInfo }}
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
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    tipInfo() {
      if (this.value) {
        const str = this.value.join(',');
        return str || '选择';
      } else {
        return '选择';
      }
    }
  },
  methods: {
    input(value) {
      console.log('选择的结果', this.$util.typeOf(value), value);
      this.$emit('input', value);
    },
    showPopupClick() {
      this.$root.$refs.MPage.MDatePickerPopup.showPicker().then(value => {
        this.input(value);
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
