<template>
  <view class="">
    <MLabel :label="label" :row="2">
      <button @click="showPopupClick" size="mini" type="default" class="submit-btn">
        {{ value ? value : '选择' }}
      </button>
    </MLabel>
  </view>
</template>

<script>
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
      type: String
    }
  },
  data() {
    return {
      val_test: []
    };
  },
  computed: {},
  methods: {
    emitInput(value) {
      console.log('input', value);
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
    // 单独日期选择 date
    async showPopupDate() {
      const params = {
        mode: 'date',
        startYear: '2016',
        endYear: '2020',
        defaultVal: this.value
      };
      const res = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'date',
        startYear: '2017',
        endYear: '2010',
        defaultVal: '2020-01-02'
      });
      this.emitInput(res.join(','));
    },
    // 单独日期范围选择 range
    async showPopupRange() {
      const params = {
        mode: 'date',
        startYear: '2016',
        endYear: '2020',
        defaultVal: this.value
      };
      const res = await this.$root.$refs.MPage.MPickerPopup.showPicker({
        mode: 'range',
        startYear: '2018',
        endYear: '2020',
        defaultVal: this.value ? this.value.split(',') : []
      });
      this.emitInput(res.join(','));
    }
  }
};
</script>

<style lang="scss">
.submit-btn {
  width: 100%;
}
</style>
yle>
