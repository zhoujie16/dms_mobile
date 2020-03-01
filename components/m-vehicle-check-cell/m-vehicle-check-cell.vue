<!-- 检查项 cell -->
<template>
  <view class="m-check-cell-wrap">
    <view class="m-check-cell-inner">
      <view class="m-check-label">{{ label }}</view>
      <view class="m-check-body">
        <!-- 按钮组 -->
        <view v-if="type === 'btn'" class="m-check-btn-group">
          <view class="check-btn active">正常</view>
          <view class="check-btn">观察</view>
          <view class="check-btn">异常</view>
        </view>
        <!-- 文本框 -->
        <view v-if="type === 'input'" class="m-check-text-input">
          <input
            class="m-check-txt"
            type="text"
            :value="value"
            @input="checkTxtInput"
            :placeholder="placeholder"
            placeholder-style="font-size: 30rpx;color: #c3c3c3;"
          />
          <text v-if="unit" class="m-check-unit">{{ unit }}</text>
        </view>
        <!-- 日期选择 -->
        <view v-if="type === 'date'" class="m-check-date-select" @click="checkDateClick">
          <text v-if="value" class="m-check-date-value m-iconfont">{{ value }} &#xe71a;</text>
          <text v-else class="m-iconfont">请选择 &#xe71a;</text>
        </view>
      </view>
      <view v-if="hasPhoto" class="m-check-camera">
        <image class="camera-img" src="/static/image/camera.svg" mode="scaleToFill"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    /**
     * 参数:
     * type: 类型 btn / input / date / customer
     * fieldName: 字段名称
     * label
     * value
     * placeholder
     * unit: 单位 string
     * hasPhoto: true / false
     * @change: 值改变,修改数据源的value
     */
    index: {
      type: Number
    },
    label: {
      type: String
    },
    value: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    unit: {
      type: String,
      default: ''
    },
    hasPhoto: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    checkTxtInput(e) {
      console.log(e.target.value);
      this.$emit('change', e.target.value, this.index);
    },
    async checkDateClick() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'yearMonth',
        startYear: '2015',
        endYear: '2021',
        defaultVal: ''
      });
      console.log(res);
      if (res !== 'cancel') {
        this.$emit('change', res[0], this.index);
      }
    }
  }
};
</script>

<style lang="scss">
.m-check-cell-wrap {
  background-color: #ffffff;
  padding: 0 30rpx;
  font-size: 30rpx;
  .m-check-cell-inner {
    display: flex;
    border-bottom: solid 1rpx #e1e1e1;
    .m-check-label {
      flex: 0 0 220rpx;
      display: flex;
      align-items: center;
      min-height: 100rpx;
      color: #17212e;
    }
    .m-check-body {
      flex: 1;
      .m-check-btn-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 100rpx;
        .check-btn {
          width: 120rpx;
          height: 52rpx;
          border-radius: 26rpx;
          color: #17212e;
          background-color: #f9f9f9;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active {
            color: #1371f7;
            background-color: #f0f3ff;
          }
        }
      }
      .m-check-text-input {
        display: flex;
        align-items: center;
        min-height: 100rpx;
        .m-check-txt {
          flex: 1;
          text-align: right;
          color: #70767f;
        }
        .m-check-unit {
          flex: 0 0 auto;
          margin: 0 10rpx;
          color: #70767f;
        }
      }
      .m-check-date-select {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-height: 100rpx;
        .m-iconfont {
          color: #c3c3c3;
        }
        .m-check-date-value {
          color: #70767F;
        }
      }
    }
    .m-check-camera {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100rpx;
      flex: 0 0 60rpx;
      .camera-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48rpx;
        height: 48rpx;
      }
    }
  }
}
</style>
