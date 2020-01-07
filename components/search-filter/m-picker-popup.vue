<template>
  <view class="m-picker-wrap">
    <!-- 多级联动 -->
    <view v-if="mode === 'range'">
      <w-picker
        mode="range"
        startDate="2017"
        endYear="2030"
        :defaultVal="rangeDval"
        :current="false"
        @confirm="onConfirm"
        ref="picker"
        themeColor="#f00"
      ></w-picker>
    </view>
    <view v-if="mode === 'date'">
      <w-picker
        mode="date"
        :startYear="startYear"
        :endYear="endYear"
        :defaultVal="defaultVal"
        :current="false"
        @confirm="onConfirm"
        :disabledAfter="false"
        ref="picker"
      ></w-picker>
    </view>
  </view>
</template>

<script>
import WPicker from '@/libs/w-picker/w-picker.vue';
export default {
  name: 'm-picker',
  components: {
    WPicker
  },
  data() {
    this.confirm = () => {};
    return {
      mode: '',
      startYear: '',
      endYear: '',
      defaultVal: '',
      rangeDval: []
    };
  },
  methods: {
    showPicker({ mode, startYear, endYear, defaultVal }) {
      return new Promise(reslove => {
        this.mode = mode;
        this.startYear = startYear;
        this.endYear = endYear;
        this.rangeDval = defaultVal;
        this.$nextTick(() => {
          this.$refs.picker.show();
        });
        this.confirm = result => {
          let _result = result;
          if (this.mode == 'range') {
            _result = [result.from, result.to];
          } else if (this.mode == 'date') {
            _result = [result.result];
          }
          reslove(_result);
        };
      });
    },
    onConfirm(result) {
      console.log(result);
      this.confirm(result);
    }
  }
};
</script>

<style lang="scss"></style>
