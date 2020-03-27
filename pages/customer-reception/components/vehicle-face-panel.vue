<template>
  <!-- 车辆外观 -->
  <view class="panel-wrap">
    <!-- <CollapsePanel title="故障点记录"><template slot="default"></template></CollapsePanel> -->
    <MLabel label="故障点记录" :border="false"></MLabel>
    <view class="hitch-warp">
      <view class="single"></view>
      <view class="single"></view>
      <view class="single"></view>
      <view class="single add-font" @click="addClick">
        <text>继续添加</text>
      </view>
      </view>
    <view class="m-break-space"></view>
    <MCheckboxPanel
      label="物品清点"
      type="inner"
      v-model="formData.contentCodes"
      :itemList="itemList"
    ></MCheckboxPanel>
  </view>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      formData: {
        contentCodes: []
      },
      itemList: this.$commonDict.ITEM_LIST
    };
  },
  watch: {},
  methods: {
    addClick(){
      // 
      uni.navigateTo({
        url: `/pages/customer-reception/damaged-add`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-wrap {
  padding: 30rpx 0;
  .hitch-warp {
    background-color: $uni-m-color-cwhite;
    color: $uni-m-color-c17;
    padding: 0 30rpx;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    .single {
      box-sizing: border-box;
      background-color: white;
      flex: 0 0 47%;
      height: 160rpx;
      margin-bottom: 20rpx;
      background-color: $uni-m-color-c5;
      text-align: center;
      line-height: 160rpx;
      font-size: $uni-m-font-size-f5;
    }
    .single:nth-child(n+1){
      margin-right: 3%;
    }
  }
}
</style>
