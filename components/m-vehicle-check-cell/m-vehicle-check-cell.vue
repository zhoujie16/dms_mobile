<!-- 检查项 cell -->
<template>
  <view class="m-check-cell-wrap">
    <view class="m-check-cell-inner">
      <view class="m-check-label">{{ label }}</view>
      <view class="m-check-body">
        <!-- 按钮组 -->
        <view v-if="type === 'select'" class="m-check-btn-group">
          <view
            v-for="(item, i) in itemList"
            :key="item.value"
            class="check-btn"
            :class="{ active: item.value === value }"
            @click="mCheckBtnClick(item)"
          >
            {{ item.text }}
          </view>
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
      <view v-if="hasPhoto" class="m-check-camera" @click="cameraBtnClick">
        <image class="camera-img" src="/static/image/camera.svg" mode="scaleToFill"></image>
      </view>
    </view>
    <uni-popup ref="popup">
      <view class="choose-photo-popup-wrap">
        <image @click="colseChoosePanel" class="popup-close-btn" src="/static/image/close.svg" mode="scaleToFill"></image>
        <view class="choose-photo-title">图片/视频</view>
        <view class="choose-photo-panel">
          <view class="choose-photo">
            <image
              class="choose-img"
              src="/static/image/camera-choose.svg"
              mode="scaleToFill"
            ></image>
            <text class="choose-txt">上传图片</text>
          </view>
          <view class="choose-photo">
            <image
              class="choose-img"
              src="/static/image/video-choose.svg"
              mode="scaleToFill"
            ></image>
            <text class="choose-txt">上传视频</text>
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  props: {
    /**
     * 参数:
     * type: 类型 select / input / date / customer
     * fieldName: 字段名称
     * label
     * itemList
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
    itemList: {
      type: Array
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
    mCheckBtnClick(item) {
      this.$emit('change', item.value, this.index);
    },
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
    },
    //
    async cameraBtnClick() {
      this.$refs.popup.open();
    },
    async colseChoosePanel() {
      this.$refs.popup.close();
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
          color: #70767f;
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
.choose-photo-popup-wrap {
  width: 690rpx;
  height: 480rpx;
  padding-top: 40rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  position: relative;
  top: -100rpx;
  .popup-close-btn {
    position: absolute;
    width: 52rpx;
    height: 52rpx;
    top: 20rpx;
    right: 20rpx;
  }
  // .choose-photo-popup-inner {
  .choose-photo-title {
    font-size: 34rpx;
    color: #17212e;
    display: flex;
    height: 120rpx;
    justify-content: center;
    align-items: center;
  }
  .choose-photo-panel {
    display: flex;
    justify-content: space-around;
    padding: 0 20rpx;
    // height: 530rpx;
    .choose-photo {
      width: 286rpx;
      height: 286rpx;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .choose-img {
        width: 96px;
        height: 96rpx;
      }
      .choose-txt {
        margin-top: 14rpx;
        font-size: 24rpx;
        color: #262626;
      }
    }
  }
  // }
}
</style>
