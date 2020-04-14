<template>
  <view class="m-search-filter">
    <view class="m-search-filter__search-top" v-show="isShow">
      <view class="m-search-filter__search-top-left"><slot name="panel"></slot></view>
      <view class="m-search-filter__search-top-right" @click="open">
        筛选
        <text class="m-iconfont">&#xe721;</text>
      </view>
    </view>
    <uni-popup ref="searchPopup" type="top" @change="change">
      <view class="m-search-dialog">
        <view class="m-search-dialog__inner">
          <slot name="form"></slot>
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
.m-search-filter__search-top {
  background-color: #ffffff;
  display: flex;
  height: 84rpx;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  .m-search-filter__search-top-left {
    flex: 1;
    height: 100%;
  }
  .m-search-filter__search-top-right {
    flex: 0 0 140rpx;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.m-search-dialog {
  background-color: #ffffff;
  .m-search-dialog__inner {
    
  }
}
</style>
