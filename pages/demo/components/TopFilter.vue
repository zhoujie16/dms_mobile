<template>
  <view class="top-filter-wrap">
    <view class="top-filter-header">
      <view class="top-filter-item" @click="testClick1">
        <view>客户级别</view>
        <uni-icons class="uni-icons" type="arrowdown" size="15"></uni-icons>
      </view>
      <view class="top-filter-item" @click="testClick1">
        <view>建档日期</view>
        <uni-icons class="uni-icons" type="arrowdown" size="15"></uni-icons>
      </view>
      <view class="top-filter-item" @click="showDrawer">
        <view>高级查询</view>
        <uni-icons class="uni-icons" type="bars" size="15"></uni-icons>
      </view>
    </view>
    <!-- 客户级别 -->
    <uni-popup ref="popup" type="bottom">
      <SelectPopupInner @confirm="confirmSelectPopup"></SelectPopupInner>
    </uni-popup>
    <!-- 抽屉组件 -->
    <uni-drawer :visible="isShowDrawer" mode="right" @close="closeDrawer">
      <!-- 表单展示 -->
      <scroll-view class="scroll-view-h" scroll-y>
         <FormDemo></FormDemo>
      </scroll-view>
    </uni-drawer>
  </view>
</template>

<script>
  import uniDrawer from "@/libs/uni-ui/uni-drawer/uni-drawer.vue"
  import uniIcons from "@/libs/uni-ui/uni-icons/uni-icons.vue"
  import uniPopup from "@/libs/uni-ui/uni-popup/uni-popup.vue"

  import FormDemo from "./FormDemo";
  import SelectPopupInner from "./SelectPopupInner";

  export default {
    components: {
      uniDrawer,
      uniIcons,
      uniPopup,
      FormDemo,
      SelectPopupInner
    },
    data() {
      return {
        // 显示抽屉组件
        isShowDrawer: false
      };
    },
    methods: {
      testClick1() {
        console.log("testClick1");
        this.$refs.popup.open();
      },
      testClick2() {
        console.log("testClick2");
      },
      // 显示抽屉组件
      showDrawer() {
        this.isShowDrawer = true;
      },
      // 抽屉组件关闭
      closeDrawer() {
        console.log("抽屉组件关闭");
        this.isShowDrawer = false;
      },
      confirmSelectPopup() {
        console.log("点击确定 popup 组件关闭");
        this.$refs.popup.close();
      }
    }
  };
</script>

<style lang="scss">
  .top-filter-wrap {}

  .top-filter-header {
    display: flex;
    height: 80rpx;
    align-items: center;

  }

  .top-filter-item {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .uni-icons {
    margin-left: 10rpx;
  }
  .scroll-view-h{
    height: 100%;
  }
</style>
