<template>
  <view class="m-label">
    <view class="m-label__inner" :class="{ 'm-label__inner--border': border }">
      <view v-if="icon" class="m-label__icon m-label__icon-left">
        <image class="m-label__icon-img" :src="icon" mode="scaleToFill"></image>
      </view>
      <view class="m-label__title" :class="{ 'm-label__title--required': required }">
        {{ label }}
      </view>
      <view class="m-label_content">
        <slot name="default"></slot>
        <slot name="after"></slot>
      </view>
      <view v-if="unit" class="m-label__unit">{{ unit }}</view>
      <view v-if="rightIcon" @click="rightIconClick" class="m-label__icon m-label__icon-right">
        <image class="m-label__icon-img" :src="rightIcon" mode="scaleToFill"></image>
      </view>
      <view v-if="isLink" class="m-label__link"><text class="m-iconfont">&#xe71a;</text></view>
    </view>
  </view>
</template>

<script>
// 未完成功能 左 右 侧自定义 
export default {
  name: 'm-label',
  mounted() {
    // console.log('m-label mounted', this.required);
  },
  props: {
    label: {
      type: String,
      default: '标题'
    },
    required: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {
    rightIconClick() {
      this.$emit('rightIconClick');
    }
  }
};
</script>

<style lang="scss">
.m-label {
  background-color: #ffffff;
  color: #333;
  font-size: 30rpx;
  padding: 0 30rpx;
  .m-label__inner {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    &.m-label__inner--border::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #e1e1e1;
      transform: scaleY(0.5);
    }
    .m-label__icon {
      &.m-label__icon-left {
        padding-right: 16rpx;
      }
      &.m-label__icon-right {
        padding-left: 16rpx;
      }
      .m-label__icon-img {
        width: 54rpx;
        height: 54rpx;
      }
    }
    .m-label__title {
      position: relative;
      flex: 0 0 200rpx;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100rpx;
      &.m-label__title--required::before {
        content: '*';
        display: inline-block;
        position: absolute;
        left: -16rpx;
        color: #1371f7;
      }
    }

    .m-label_content {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
    .m-label__unit {
      padding-left: 4rpx;
    }
    .m-label__link {
      padding-left: 4rpx;
    }
  }
}
</style>
