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
    type: {
      type: String,
      default: 'inner'
    },
    label: {
      type: String,
      default: '选择'
    },
    value: {
      type: Array
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
  mounted() {
    console.log('m-checkbox mounted', this.$util.typeOf(this.value), this.value);
  },
  data() {
    return {};
  },
  computed: {
    tipInfo() {
      if (this.value.length == 0) {
        return '请选择';
      } else {
        return this.value.join(',');
      }
    }
  },
  methods: {
    input(value) {
      console.log('选择的结果', this.$util.typeOf(value), value);
      this.$emit('input', value);
    },
    showPopupClick() {
      this.$root.$refs.MPage.MCheckboxPopup.showPicker({
        single: this.single,
        itemList: this.itemList,
        value: []
      }).then(value => {
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
