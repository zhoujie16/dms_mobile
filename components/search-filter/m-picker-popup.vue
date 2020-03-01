<template>
  <view class="m-picker-wrap">
    <!-- 单选 -->
    <view v-if="mode === 'selector'">
      <w-picker
        v-if="selectList.length != 0"
        mode="selector"
        :defaultVal="defaultVal"
        @confirm="onConfirm"
        ref="picker"
        :selectList="selectList"
      ></w-picker>
    </view>
    <!-- 日期区间 -->
    <view v-if="mode === 'range'">
      <w-picker
        mode="range"
        startDate="2017"
        endYear="2030"
        :defaultVal="defaultVal"
        :current="false"
        @confirm="onConfirm"
        ref="picker"
      ></w-picker>
    </view>
    <!-- 日期选择 -->
    <view v-if="mode === 'date'">
      <w-picker
        mode="date"
        :startYear="startYear"
        :endYear="endYear"
        :defaultVal="defaultVal"
        :current="true"
        @confirm="onConfirm"
        :disabledAfter="false"
        ref="picker"
      ></w-picker>
    </view>
    <!-- 日期和时间 -->
    <view v-if="mode === 'dateTime'">
      <w-picker
        mode="dateTime" 
        :defaultVal="defaultVal" 
        @confirm="onConfirm"
        :disabledAfter="false"
        ref="picker"
      ></w-picker>
    </view>
    <!-- 时间 -->
    <view v-if="mode === 'time'">
      <w-picker
        mode="time" 
        :defaultVal="defaultVal" 
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
      // 单选参数
      selectList: [],
      // 日期参数
      // 日期区间参数
      startYear: '',
      endYear: '',
      defaultVal: ''
    };
  },
  methods: {
    showPicker({ mode, selectList, startYear, endYear, defaultVal }) {
      return new Promise(reslove => {
        this.mode = mode;
        if (mode == 'selector') {
          this.selectList = selectList.map(x => ({
            label: x.text,
            value: x.value
          }));
          this.defaultVal = defaultVal;
        } else if (mode == 'date') {
          this.startYear = startYear;
          this.endYear = endYear;
          this.defaultVal = defaultVal;
        } else if (mode == 'range') {
          this.startYear = startYear;
          this.endYear = endYear;
          this.defaultVal = defaultVal;
        }
        this.$nextTick(() => {
          this.$refs.picker.show();
        });
        this.confirm = result => {
          console.log('m-picker-popup result', result);
          let _result = result;
          if (this.mode == 'selector') {
            _result = [result.result];
          } else if (this.mode == 'range') {
            _result = [result.from, result.to];
          } else if (this.mode == 'date') {
            _result = [result.result];
          }
          setTimeout(() => {
            this.mode = '';
            reslove(_result);
          }, 300);
        };
      });
    },
    onConfirm(result) {
      this.confirm(result);
    }
  }
};
</script>

<style lang="scss"></style>
