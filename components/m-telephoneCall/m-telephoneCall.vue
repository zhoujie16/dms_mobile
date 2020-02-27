<template>
		<uni-popup ref="popup" :type="type">
		  <view style="padding: 0 30rpx;margin-bottom: 15rpx;">
		    <view class="phone-text" style="margin-bottom: 10rpx;" @click="phoneCall">呼叫<slot></slot></view>
		    <view class="phone-text" @click="phoneClose">
		      取消
		    </view>
		  </view>
		</uni-popup>
</template>

<script>
	export default {
		name:'telephoneCall',
    props:{
      type: {
        type: String,
        default: 'bottom'
      }
    },
		data() {
			return {
				
			};
		},
		methods:{
      open() {
        this.$refs.popup.open();
      },
      close() {
        this.$refs.popup.close();
      },
			phoneCall() {
			  uni.makePhoneCall({
			      // 手机号
			          phoneNumber: '18583285531', 
			      	// 成功回调
			      	success: (res) => {
			      		console.log('调用成功!');
			      	},
			      	// 失败回调
			      	fail: (res) => {
			      		console.log('调用失败!')
			      	}
			  });
			},
      phoneClose() {
        this.$refs.popup.close();
      }
		}
	}
</script>

<style>
.phone-text {
  height: 80rpx;
  background-color: #C0C0C0;
  border-radius: 10rpx;
  line-height: 80rpx;
  text-align: center;
  opacity: 0.9;
}
</style>
