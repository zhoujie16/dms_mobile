<template>
  <view class="select-popu-wrap">
    <view class="select-header">
      <view class="s-h-item btn"> 重置 </view>
      <view class="s-h-item title"> 意向车型(多选) </view>
      <view class="s-h-item btn" @click="confirmBtnClick"> 确定 </view>
    </view>
    <view class="select-popup-inner">
      <view class="select-item" v-for="(item, i) in itemList" :key="i" @click="bindClick(item)">
        <uni-badge :text="item.text" :type="item.isSelect ? 'primary' : 'default'"></uni-badge>
      </view>
    </view>
  </view>
</template>

<script>
  import uniBadge from "@/libs/uni-ui/uni-badge/uni-badge.vue"
  export default {
    components: {
      uniBadge
    },
    data() {
      return {
        itemList: [{
            text: "福克斯",
            value: "1",
            isSelect: false
          },
          {
            text: "新一代福克斯",
            value: "1",
            isSelect: false
          },
          {
            text: "全新福特锐界",
            value: "1",
            isSelect: false
          },
          {
            text: "新蒙迪欧",
            value: "1",
            isSelect: false
          },
          {
            text: "全新福克斯三厢",
            value: "1",
            isSelect: false
          },
          {
            text: "新福睿斯",
            value: "1",
            isSelect: false
          },
          {
            text: "翼博",
            value: "1",
            isSelect: false
          },
          {
            text: "全新福克斯两厢",
            value: "1",
            isSelect: false
          },
          {
            text: "新福特翼虎",
            value: "1",
            isSelect: false
          },
          {
            text: "金牛座",
            value: "1",
            isSelect: false
          }
        ]
      };
    },
    methods: {
      bindClick(item) {
        console.log("bindClick", item);
        item.isSelect = !item.isSelect;
      },
      confirmBtnClick() {
        this.$emit('confirm')
      }
    }
  };
</script>

<style lang="scss">
  .select-popu-wrap {
    position: relative;
    height: 600rpx;
    background-color: #ffffff;
    padding: 0 20rpx 20rpx 20rpx;
  }

  .select-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80rpx;
    border-bottom: solid 1px #888888;
    margin-bottom: 20rpx;
  }

  .s-h-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10rpx;

  }

  .title {
    font-size: 30rpx;
  }

  .select-popup-inner {
    display: flex;
    flex-wrap: wrap;

  }

  .select-item {
    position: relative;
    flex: 0 1 33.333332%;
    height: 80rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rpx;
  }
</style>
