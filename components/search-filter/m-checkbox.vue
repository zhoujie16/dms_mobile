<template>
  <view class="">
    <MLabel :label="label" :row="2">
      <MCheckboxInner
        v-if="type == 'inner'"
        :value="value"
        :itemList="itemList"
        :single="single"
        @input="input"
      ></MCheckboxInner>
      <button
        v-if="type == 'popup'"
        @click="showPopupClick"
        size="mini"
        type="default"
        class="submit-btn"
      >
        {{ val_test1 ? val_test1 : '弹窗选择' }}
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
    type: {
      type: String,
      default: 'inner'
    },
    label: {
      type: String,
      default: '选择'
    },
    value: {
      type: Array,
      default() {
        return [];
      }
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
    }
  },
  data() {
    return {
      val_test1: ''
    };
  },
  computed: {},
  methods: {
    input(value) {
      this.$emit('input', value);
    },
    showPopupClick() {
      this.$root.$refs.MPage.$refs.MCheckboxPopup.showPicker({
        single: this.single,
        itemList: this.itemList,
        value: []
      }).then(value => {
        console.log('选择的结果', value);
        this.val_test1 = value.join(',');
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
