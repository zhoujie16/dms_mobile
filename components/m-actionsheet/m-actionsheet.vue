<template>
  <!-- m-actionsheet -->
  <uni-popup ref="popup" type="bottom" :maskClick="false">
    <view v-if="isShowPopup" class="m-actionsheet">
      <view class="m-actionsheet__inner">
        <view
          @click="confirmHandleClick(item)"
          v-for="item in itemList"
          :key="item.value"
          class="m-actionsheet__cell"
          hover-class="m-actionsheet__cell--hover"
          hover-stay-time="50"
        >
          {{ item.text }}
        </view>
      </view>
      <!-- 按钮 -->
      <view class="m-break-space"></view>
      <view
        hover-class="m-actionsheet__cell--hover"
        hover-stay-time="50"
        @click="cancelHandleClick"
        class="m-actionsheet__bottom"
      >
        取消
      </view>
    </view>
  </uni-popup>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isShowPopup: false,
      itemList: []
    };
  },
  computed: {},
  methods: {
    showActionSheet({ itemList = [] }) {
      return new Promise(reslove => {
        this.isShowPopup = true;
        this.itemList = itemList;
        this.$refs.popup.open();
        this.confirm = async value => {
          await this.$sleep(100);
          this.$refs.popup.close();
          // 延时 300 为了不影响动画的连贯性
          await this.$sleep(300);
          this.isShowPopup = false;
          reslove(value);
        };
      });
    },
    confirmHandleClick(item) {
      this.confirm(item);
    },
    cancelHandleClick() {
      this.confirm('cancel');
    }
  }
};
</script>

<style lang="scss" scoped>
.m-actionsheet {
  background-color: #ffffff;
  overflow: hidden;
  .m-actionsheet__inner {
    border-bottom: solid 1rpx #efefef;
    color: #17212e;
    font-size: 34rpx;
    max-height: 80vh;
    overflow: auto;
    .m-actionsheet__cell {
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: solid 1rpx #efefef;
    }
  }
  .m-actionsheet__bottom {
    height: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .m-actionsheet__cell--hover {
    background-color: #f1f1f1;
  }
}
</style>
