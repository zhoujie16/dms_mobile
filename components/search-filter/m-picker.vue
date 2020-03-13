<template>
  <view class="">
    <MLabel :label="label" :row="2">
      <view class="m-picker-inner m-flex m-justify-end">
        <view @click="showPopupClick">
          {{ tipInfo }}
        </view>
      </view>
    </MLabel>
  </view>
</template>

<script>
//  https://ext.dcloud.net.cn/plugin?id=273#rating
export default {
  name: 'm-picker',
  props: {
    mode: {
      type: String,
      default: 'date'
    },
    label: {
      type: String,
      default: '选择'
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
        return str || '请选择';
      } else {
        return '请选择';
      }
    }
  },
  methods: {
    emitInput(value) {
      console.log('m-picker input', this.$util.typeOf(value), value);
      this.$emit('input', value);
    },
    showPopupClick() {
      const mode = this.mode;
      if (mode == 'date') {
        this.showPopupDate();
      } else if (mode == 'range') {
        this.showPopupRange();
      }
    },
    // 单选
    async showPopupSelector() {
      const params = {
        mode: 'selector',
        selectList: [{ label: '1', value: '1' }, { label: '2', value: '2' }],
        defaultVal: '2'
      };
      const res = await this.$root.$refs.MPage.MPickerPopup.showPicker(params);
      this.emitInput(res);
    },
    // 单独日期选择 date
    async showPopupDate() {
      const params = {
        mode: 'date',
        startYear: '2016',
        endYear: '2020',
        defaultVal: this.value[0]
      };
      const res = await this.$root.$refs.MPage.MPickerPopup.showPicker(params);
      this.emitInput(res);
    },
    // 单独日期范围选择 range
    async showPopupRange() {
      const params = {
        mode: 'range',
        startYear: '2016',
        endYear: '2020',
        defaultVal: this.value
      };
      const res = await this.$root.$refs.MPage.MPickerPopup.showPicker(params);
      this.emitInput(res);
    }
  }
};
</script>

<style lang="scss">
.m-picker-inner {
  width: 100%;
}
</style>
yle>
