<template>
	<uni-popup ref="popup" type="center">
    <view class="popup-modal" :type="type">
      <view class="modal-top">
        <view class="title" v-if="!isHasTitle">
          标题文字
        </view>
        <view :class="[!isHasTitle ? content1 : content2]" v-if="!isHasContent">
          告知当前状态，信息和解决方法告知当前状态，信息和解决方法告知当前状态，信息和解决方法
        </view>
      </view>
      <view class="modal-bottom">
        <text class="auxiliary" v-if="!isMainOperation">辅助操作</text>
        <!-- <text :class="[isMainOperation ? main2 : main1]">主操作</text> -->
        <text class="main1" v-if="!isMainOperation">主操作</text>
        <text class="main2" v-if="isMainOperation">主操作</text>
      </view>
    </view>
  </uni-popup>
</template>

<script>
	export default {
    props:{
      type: {
        type: String,
        default: 'default'
      }
    },
		data() {
			return {
			}
		},
    computed: {
      isHasTitle() {
        console.log(this.type,'type')
        if(this.type === 'content') {
          return true
        } else {
          return false
        }
      },
      isHasContent() {
        console.log(this.type,'type')
        if(this.type === 'title') {
          return true
        } else {
          return false
        }
      },
      isMainOperation() {
        if(this.type === 'mainOperation') {
          return true
        } else {
          return false
        }
      }
    },
		methods: {
			open() {
			    this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
.popup-modal {
  width: 560rpx;
  height: 316rpx;
  background: #FCFCFC;
  // background-color: pink;
  border-radius: 16rpx;
  .modal-top {
    padding: 54rpx 40rpx 0 40rpx;
    height: 226rpx;
    // text-align: center;
    border-bottom: 1rpx solid #EFEFEF;
    .title {
      width: 480rpx;
      height: 48rpx;
      font-size: 34rpx;
      font-weight: 500;
      color: #17212E;
      line-height:48rpx;
      text-align: center;
      margin-bottom: 10rpx;
     }
     .content1 {
       width: 480rpx;
       height: 36rpx;
       font-size: 26rpx;
       color: #70767F;
       line-height:36rpx;
       text-align: center;
     }
     .content2 {
       width: 480rpx;
       height: 226rpx;
       font-size: 30rpx;
       color: #17212E;
       line-height: 226rpx;
       text-align: center;
       margin: 0 auto;
     }
  }
  .modal-bottom {
    font-size: 34rpx;
    .auxiliary {
      width: 280rpx;
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      color: #70767F;
      display: block;
      float: left;
      border-right: 1rpx solid #EFEFEF;
    }
    .main1 {
      width: 280rpx;
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      color: #1371F7;
      display: block;
      float: right;
    }
    .main2 {
      width: 560rpx;
      height: 88rpx;
      font-size: 34rpx;
      color: #1371F7;
      line-height: 88rpx;
      text-align: center;
      display: block;
      float: left;
    }
  }
}
</style>
