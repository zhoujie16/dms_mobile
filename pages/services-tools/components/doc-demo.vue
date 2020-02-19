<template>
  <MPage ref="MPage">
    <view class="page-wrap" v-for="(item,i) in list" :key="i" @click="chapterClick">
      <view class="left">
        {{item.chapter}}
      </view>
      {{item.content}}
      <view class="right">
        {{item.arrow}}
      </view>
    </view>
    <!-- <view class="page-wrap">
      <view class="left">
        第二章
      </view>
      线下--冬季服务活动活动内容与流程
      <view class="right">
        >
      </view>
    </view>
    <view class="page-wrap">
      <view class="left">
        第三章
      </view>
      线上--双12活动活动内容与流程
      <view class="right">
        >
      </view>
    </view>
    <view class="page-wrap">
      <view class="left">
        第四章
      </view>
      宣传及特别注意事项
      <view class="right">
        >
      </view>
    </view> -->
  </MPage>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          chapter: '第一章',
          content: '活动内容介绍',
          arrow: '>'
        },
        {
          chapter: '第二章',
          content: '线下--冬季服务活动活动内容与流程',
          arrow: '>'
        },
        {
          chapter: '第三章',
          content: '线上--双12活动活动内容与流程',
          arrow: '>'
        },
        {
          chapter: '第四章',
          content: '宣传及特别注意事项',
          arrow: '>'
        },
      ]
      };
  },
  onLoad() {},
  methods: {
    onViewClick(options) {
      console.log(options);
    },
    detailUrl() {
      uni.navigateTo({
        url: `/pages/qcReport/qcReport-detail`
      });
    },
    async chapterClick() {
      this.$util.openLocalWeb({
        url: '/hybrid/html/index.html#/about'
      });
    }
  }
};
</script>
</script>

<style lang="scss" scoped>
  .page-wrap {
    margin: 5rpx 30rpx;
    // background-color: pink;
    height: 100rpx;
    line-height: 100rpx;
    border-bottom: 1px solid #DCDDE0;
    .left {
      float: left;
      padding-right: 30rpx;
      color: #CCCCCC;
    }
    .right {
      float: right;
      padding-right: 20rpx;
    }
  }
</style>
