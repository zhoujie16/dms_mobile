<template>
  <view class="">
    <view class="m-search-top" v-show="isShow">
      <view class="left"><slot name="panel"></slot></view>
      <view class="right" @click="open">
        筛选
        <text class="m-iconfont">&#xe721;</text>
      </view>
    </view>
    <view>
      <view class="m-search-dialog-wrap" :class="{ 'm-active': popupShow }">
        <view class="m-search-dialog-inner"><slot name="form"></slot></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'search-filter',
  components: {},
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    height: {
      type: Number,
      default: 900
    }
  },
  data() {
    return {
      popupShow: false
    };
  },
  methods: {
    // 显示抽屉组件
    open() {
      console.log('筛选 open 点击事件');
      this.popupShow = true;
    },
    // 抽屉组件关闭
    close() {
      console.log('筛选 close 点击事件');
      this.popupShow = false;
    },
    change(e) {
      console.log('mpopup change', e);
    }
  }
};
</script>

<style lang="scss">
.m-search-top {
  background-color: #ffffff;
  display: flex;
  height: 84rpx;
  .left {
    flex: 1;
    height: 100%;
  }
  .right {
    flex: 0 0 140rpx;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.m-search-dialog-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transform: translateY(-100%);
  transition: transform .3s;
  &.m-active {
    transform: translateY(0%);
  }
  .m-search-dialog-inner {
    background-color: #ffffff;
  }
  // .m-search-dialog-mask {
  //   flex: 1;
  //   background-color: rgba(0, 0, 0, 0.3);
  // }
}

.m-form-bottom-button {
  display: flex;
  .reset,
  .submit {
    flex: 1;
    height: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .reset {
    background: #ffffff;
    color: #333;
  }
  .submit {
    background: #1371f7;
    color: #ffffff;
  }
}
</style>
