<template>
  <view class="">
    <MLabel :label="label" :required="required">
      <view class="m-picker-inner m-flex m-justify-end">
        <view @click="showPopupClick">{{ tipInfo }}</view>
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
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formatAddress: ''
    };
  },
  computed: {
    tipInfo() {
      if (this.mode == 'date' || this.mode == 'range') {
        if (!this.value) {
          return '请选择';
        }
        const str = this.value.join(',');
        return str || '请选择';
      } else if (this.mode == 'address') {
        if (!this.formatAddress) {
          return '请选择';
        }
        return this.formatAddress;
      }
    }
  },
  methods: {
    emitInput(value) {
      console.log('m-picker input', this.$util.typeOf(value), value);
      if (value === 'cancel') {
        return;
      }
      this.$emit('input', value);
    },
    showPopupClick() {
      if (this.readonly) {
        return;
      }
      const mode = this.mode;
      if (mode == 'date') {
        this.showPopupDate();
      } else if (mode == 'range') {
        this.showPopupRange();
      } else if (mode == 'address') {
        this.showPopupAddress();
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
    },
    async showPopupAddress() {
      const res = await this.SHOW_ADDRESS_PICKER({ value: this.value });
      this.formatAddress = res.result;
      this.emitInput(res.checkValue);
    }
  }
};
</script>

<style lang="scss">
.m-picker-inner {
  width: 100%;
}
</style>
