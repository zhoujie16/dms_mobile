<template>
  <view class="">
    <view class="m-search-top" v-show="isShow">
      <view class="left"><slot name="panel"></slot></view>
      <view class="right" @click="open">
        筛选
        <text class="m-iconfont">&#xe721;</text>
      </view>
    </view>
    <uni-popup ref="popup" type="top" :show="true">
      <view class="m-search-dialog-wrap">
        <view class="m-search-dialog-inner">
          <view class="search-form">
            <scroll-view
              class="scroll-view-h"
              :style="{ height: height + 'rpx' }"
              @scroll="scroll"
              scroll-y
            >
              <slot name="form"></slot>
            </scroll-view>
          </view>
          <view class="bottom-button">
            <view @click="resetBtnClick" class="reset">重置</view>
            <view @click="confirmBtnClick" class="submit">确定</view>
          </view>
        </view>
      </view>
    </uni-popup>
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
      isShowDrawer: false
    };
  },
  methods: {
    // 显示抽屉组件
    open() {
      console.log('点击事件');
      this.$refs.popup.open();
    },
    // 抽屉组件关闭
    close() {
      this.$refs.popup.close();
    },
    change(e) {
      console.log('change', e);
    },
    scroll: function() {
      console.log(e);
      // this.old.scrollTop = e.detail.scrollTop
    },
    resetBtnClick() {
      // this.$refs.popup.close();
      this.$emit('reset');
    },
    confirmBtnClick() {
      // this.$emit('confirm');
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
  background-color: #ffffff;
  .m-search-dialog-inner {
    .search-form {
      .scroll-view-h {
        height: 900rpx;
        /deep/ .uni-scroll-view {
          overflow: scroll !important;
        }
      }
    }
    .bottom-button {
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
  }
}
</style>
