<template>
  <view class="">
    <MLabel :label="label">
      <view class="m-checkbox-inner" v-if="type == 'inner'">
        <MCheckboxInner
          v-if="type == 'inner'"
          :value="value"
          :itemList="itemList"
          :single="single"
          @input="input"
        ></MCheckboxInner> 
      </view>
      <view class="m-checkbox-inner" v-if="type == 'popup'">
        <view @click="showPopupClick" size="mini" type="default" class="m-checkbox-text">
          {{ tipInfo }}
        </view>
      </view>
      <template v-if="type == 'popup'" v-slot:after>
        <text class="m-label-after m-iconfont">&#xe71a;</text>
      </template>
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
.m-checkbox-inner {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .m-checkbox-text {
  }
}
</style>
