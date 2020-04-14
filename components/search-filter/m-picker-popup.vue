<template>
  <!-- 底部弹窗 选择 组件 -->
  <view class="m-picker-wrap">
    <!-- 单选 -->
    <view v-if="mode === 'selector'">
      <w-picker
        v-if="selectList.length != 0"
        mode="selector"
        :defaultVal="defaultVal"
        @confirm="onConfirm"
        @cancel="onCancel"
        ref="picker"
        :selectList="selectList"
      ></w-picker>
    </view>
    <!-- 日期选择 -->
    <view v-if="mode === 'date'">
      <w-picker
        mode="date"
        :startYear="startYear"
        :endYear="endYear"
        :defaultVal="defaultVal"
        :current="false"
        @confirm="onConfirm"
        @cancel="onCancel"
        :disabledAfter="false"
        ref="picker"
      ></w-picker>
    </view>

    <!-- 年月 -->
    <view v-if="mode === 'yearMonth'">
      <w-picker
        mode="yearMonth"
        :startYear="startYear"
        :endYear="endYear"
        :defaultVal="defaultVal"
        :current="false"
        @confirm="onConfirm"
        @cancel="onCancel"
        ref="picker"
      ></w-picker>
    </view>

    <!-- 日期区间 -->
    <view v-if="mode === 'range'">
      <w-picker
        mode="range"
        :startYear="startYear"
        :endYear="endYear"
        :defaultVal="defaultVal"
        :current="false"
        @confirm="onConfirm"
        @cancel="onCancel"
        ref="picker"
      ></w-picker>
    </view>
    <!-- 日期和时间 -->
    <view v-if="mode === 'dateTime'">
      <w-picker
        mode="dateTime"
        :startYear="startYear"
        :endYear="endYear"
        :defaultVal="defaultVal"
        :hasSecond="hasSecond"
        :current="false"
        @confirm="onConfirm"
        @cancel="onCancel"
        ref="picker"
      ></w-picker>
    </view>

    <!-- 时间 -->
    <view v-if="mode === 'time'">
      <w-picker
        mode="time"
        :defaultVal="defaultVal"
        :hasSecond="hasSecond"
        @confirm="onConfirm"
        @cancel="onCancel"
        ref="picker"
      ></w-picker>
    </view>

    <!-- 多级联动 -->
    <view v-if="mode === 'linkage'">
      <w-picker
        mode="linkage"
        :level="3"
        @confirm="onConfirm"
        @cancel="onCancel"
        ref="picker"
        :value="linkListValue"
        :linkList="linkList"
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
      defaultVal: '',
      hasSecond: true,
      // 多级参数
      linkListValue: [],
      linkList: []
    };
  },
  methods: {
    showPicker({
      mode,
      selectList = [],
      defaultVal = '',
      startYear = '2015',
      endYear = '2030',
      hasSecond = true
    }) {
      return new Promise(reslove => {
        this.mode = mode;
        if (mode == 'selector') {
          this.selectList = selectList.map(x => ({
            label: x.text,
            value: x.value
          }));
          let defVal = '';
          if (defaultVal) {
            defVal = selectList.find(x => x.value === defaultVal).text;
          }
          this.defaultVal = defVal;
        } else if (mode == 'date') {
          this.startYear = startYear;
          this.endYear = endYear;
          this.defaultVal = defaultVal;
        } else if (mode == 'yearMonth') {
          this.startYear = startYear;
          this.endYear = endYear;
          this.defaultVal = defaultVal;
        } else if (mode == 'range') {
          this.startYear = startYear;
          this.endYear = endYear;
          this.defaultVal = defaultVal;
        } else if (mode == 'dateTime') {
          this.startYear = startYear;
          this.endYear = endYear;
          this.defaultVal = defaultVal;
          this.hasSecond = hasSecond;
        } else if (mode == 'time') {
          this.defaultVal = defaultVal;
          this.hasSecond = hasSecond;
        }
        this.$nextTick(() => {
          this.$refs.picker.show();
        });
        this.confirm = result => {
          console.log('m-picker-popup result', result);
          let _result = result;
          if (this.mode == 'selector') {
            _result = [result.checkArr.value];
          } else if (this.mode == 'date') {
            _result = [result.result];
          } else if (this.mode == 'yearMonth') {
            _result = [result.result];
          } else if (this.mode == 'range') {
            _result = [result.from, result.to];
          } else if (this.mode == 'dateTime') {
            _result = [result.result];
          } else if (mode == 'time') {
            _result = [result.result];
          }
          setTimeout(() => {
            this.mode = '';
            reslove(_result);
          }, 300);
        };
        this.cancel = () => {
          console.log('m-picker-popup cancel');
          setTimeout(() => {
            this.mode = '';
            reslove('cancel');
          }, 300);
        };
      });
    },
    onConfirm(result) {
      this.confirm(result);
    },
    onCancel() {
      this.cancel();
    },
    showAddressPicker({ value = ['22030', '22061', '22062'] }) {
      return new Promise(reslove => {
        this.mode = 'linkage';
        this.linkListValue = value;
        // this.linkList = [
        //   {
        //     label: 'aaa10',
        //     value: '10',
        //     children: [
        //       {
        //         label: 'aaa1010',
        //         value: '1010',
        //         children: [{ label: 'aaa101010', value: '101010' }]
        //       }
        //     ]
        //   }
        // ];
        this.linkList = this.$dict.createDictRegion();
        this.$nextTick(() => {
          this.$refs.picker.show();
        });
        this.confirm = result => {
          console.log('m-picker-popup result', result);
          let _result = result;
          if (this.mode == 'linkage') {
            _result = result;
          }
          setTimeout(() => {
            this.mode = '';
            reslove(_result);
          }, 300);
        };
        this.cancel = () => {
          console.log('m-picker-popup cancel');
          setTimeout(() => {
            this.mode = '';
            reslove('cancel');
          }, 300);
        };
      });
    }
  }
};
</script>

<style lang="scss"></style>
