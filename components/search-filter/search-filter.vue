<template>
  <view class="">
    <view class="m-search-top" v-show="isShow">
      <view class="left"><slot name="panel"></slot></view>
      <view class="right" @click="open">
        筛选
        <text class="m-iconfont">&#xe721;</text>
      </view>
    </view>
    <uni-popup ref="searchPopup" type="top" :show="true" @change="change">
      <view class="m-search-dialog-wrap">
        <view class="m-search-dialog-inner">
          <view class="search-form">
            <slot name="form"></slot>
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
      popupShow: false
    };
  },
  methods: {
    // 显示抽屉组件
    open() {
      console.log('筛选 点击事件');
      if (this.popupShow) {
        this.$refs.searchPopup.close();
      } else {
        this.$refs.searchPopup.open();
      }
    },
    // 抽屉组件关闭
    close() {
      this.$refs.searchPopup.close();
    },
    change(e) {
      console.log('mpopup change', e);
      this.popupShow = e.show;
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
      // max-height: 900rpx;
      // overflow-y: scroll;
      // .scroll-view-h {
      //   height: 900rpx;
      //   /deep/ .uni-scroll-view {
      //     overflow: scroll !important;
      //   }
      // }
    }
  }
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
