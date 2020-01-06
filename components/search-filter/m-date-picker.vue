<template>
  <view class="">
    <MLabel :label="label" :row="2">
      <button @click="showPopupClick" size="mini" type="default" class="submit-btn">
        {{ val_test ? val_test : '日期选择' }}
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
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      val_test: ''
    };
  },
  computed: {},
  methods: {
    input(value) {
      this.$emit('input', value);
    },
    showPopupClick() {
      this.$root.$refs.MPage.$refs.MDatePickerPopup.showPicker().then(value => {
        console.log('选择的结果', value);
        this.val_test2 = value.join(' 至 ');
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
