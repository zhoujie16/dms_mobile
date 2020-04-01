<template>
  <view class="cell-wrap">
    <view class="left">
      <!-- <view  @click="imageClick">
        <image :src="src[0]" v-if="!imageIsShow" class="service-image"></image>
        <image :src="src[1]" v-if="imageIsShow" class="service-image"></image>
      </view> -->
      <uni-icons
        :type="cell.isSelect&&currentIndex==selectIndex ? 'circle-filled' : 'circle'"
        :color="cell.isSelect&&currentIndex==selectIndex ? '#1371F7' : ''"
        size="21"
        @click="changeSelect"
        class="service-image"
      ></uni-icons>
      <view style="font-size: 30rpx; color: #262626;height: 60rpx; line-height: 60rpx;">
        燃油系统清洗
      </view>
      <view style="font-size: 24rpx; color: #666666;">保养|收费工时 0.00</view>
    </view>
    <view class="right">￥0.00</view>
  </view>
</template>

<script>
import editModal from './edit-modal.vue';
export default {
  components: {
    editModal
  },
  props:{
    selectIndex: {
      type: Number,
      default: 0
    },
    currentIndex:{
      type:Number,
      default: 0
    },
    cell:Object
  },
  // mounted() {
  //   console.log(this.selectIndex,this.currentIndex,this.cell.isSelect)
  // },
  data() {
    return {
      src: [
        '../../../static/image/icon_sel.svg',
        '../../../static/image/icon_unsel.svg'
      ],
      isSelect: false
    };
  },
  methods: {
    changeSelect() {
      // this.$emit()
      // this.isSelect = !this.isSelect;
      this.$emit('emitChangeSelect',this.selectIndex,this.cell)
    },
    cancelClick() {
      this.$refs.mPopup_editModal.close();
    },
    confirmClick() {
      console.log('1111');
    }
  }
};
</script>

<style lang="scss">
.cell-wrap {
  display: flex;
  background: #f2f1f1;
  padding: 26rpx 30rpx;
  margin-bottom: 10rpx;
  width: 680rpx;
  // height: 680rpx;
  // line-height: 144rpx;
  // text-align: center;
  border-radius: $uni-m-border-radius-b2;
  .left {
    flex: 1;
    position: relative;
    padding-left: 94rpx;
    .service-image {
      width: 40rpx;
      height: 40rpx;
      position: absolute;
      top: 24rpx;
      left: 24rpx;
    }
  }
  .right {
    color: $uni-m-color-c1;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
  }
}
</style>
