<template>
  <view class="m-key-board-wrap">
    <uni-popup ref="popup" type="bottom">
      <!-- 车牌键盘 -->
      <view class="license-key-board-wrap">
        <!-- 省会简称 -->
        <view v-if="boardType === 'provice'" class="license-key-board-inner provice">
          <view v-for="(provice_arr, i) in provices" class="key-wrap provice" :key="i">
            <view v-for="(item, j) in provice_arr" class="key" :key="item" @click="keyDown(item)">
              {{ item }}
            </view>
          </view>
        </view>
        <!-- 车牌号码 -->
        <view v-if="boardType === 'letter'" class="license-key-board-inner letter">
          <view v-for="(letter_arr, i) in letters" class="key-wrap letter" :key="i">
            <view v-for="(item, j) in letter_arr" class="key" :key="item" @click="keyDown(item)">
              {{ item }}
            </view>
          </view>
        </view>
        <view class="key del" @click="keyDown(-1)">删</view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  name: 'm-keyboard',
  props: {},
  data() {
    const provices1 = ['京', '津', '沪', '渝', '翼', '豫', '云', '辽', '黑', '湘'];
    const provices2 = ['皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘'];
    const provices3 = ['晋', '蒙', '陕', '吉', '闵', '贵', '粤'];
    const provices4 = ['青', '藏', '川', '宁', '琼'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const letters1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const letters2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const letters3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    return {
      provices: [provices1, provices2, provices3, provices4],
      letters: [numbers, letters1, letters2, letters3],
      boardType: 'provice' // provice / letter
    };
  },
  mounted() {
    console.log('虚拟键盘 mounted', this.provices, this.letters);
  },
  methods: {
    setKeyboardType(boardType) {
      this.boardType = boardType;
    },
    open({ keyDown }) {
      this.$refs.popup.open();
      this._keyDown = keyDown;
    },
    close() {
      this.$refs.popup.close();
    },
    keyDown(key) {
      console.log('keyDown', key);
      this._keyDown(key);
    }
  }
};
</script>

<style lang="scss">
.m-key-board-wrap {
  /deep/ .uni-popup .uni-popup-mask {
    background-color: rgba(0, 0, 0, 0) !important;
  }
}
.license-key-board-wrap {
  position: relative;
  .key.del {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66rpx;
    height: 90rpx;
    background-color: #ffffff;
    right: 8rpx;
    bottom: 24rpx;
    // width: 80rpx;
    height: 90rpx;
    border-radius: 8rpx;
    color: #70767f;
  }
  .license-key-board-inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    height: 440rpx;
    padding-bottom: 20rpx;
    background-color: #efefef;
    .key-wrap {
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30rpx;
      .key {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 66rpx;
        height: 90rpx;
        background-color: #ffffff;
        margin: 0 4rpx;
        border-radius: 8rpx;
        color: #70767f;
      }
    }
  }
}
</style>
