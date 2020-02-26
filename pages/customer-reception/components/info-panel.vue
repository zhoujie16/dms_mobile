<template>
  <!-- 信息面板 -->
  <view class="collapse-panel-wrap">
    <view class="collapse-panel-inner">
      <view class="collapse-panel-title m-flex">
        <view>{{ title }}</view>
        <view v-if="isIcon">
          <uni-icons :type="isShow?'arrowup':'arrowdown'" size="30" color="#CCCCCC" @click="showClick"></uni-icons>
        </view>
      
      </view>
      <view class="collapse-panel-content" v-if="isShow"><slot></slot></view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  name: 'collapse-panel',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    isIcon:{
      type: Boolean,
      default: false
    },
  },
  mounted() {},
  data() {
    return {
      isShow:true
    };
  },
  methods: {
    change() {},
    showClick(){
      this.isShow = !this.isShow
    }
  }
};
</script>

<style lang="scss">
.collapse-panel-wrap {
  background-color: #ffffff;
  // border-radius: 20rpx;
  overflow: hidden;
  padding-bottom: 20rpx;
  margin-bottom: 30rpx;
  .collapse-panel-inner {
    .collapse-panel-title {
      font-weight: 600;
      padding: 30rpx 40rpx;
      border-bottom: solid 1rpx #eeeeee;
      justify-content: space-between
    }
    .collapse-panel-content {
      padding: 0 40rpx;
    }
  }
}
</style>
