<template>
	<view>
		
	</view>
</template>

<script>
  import { savePreview } from '@/api/customer-reception/index.js';
  
	export default {
		data() {
			return {
				previewOrder:{}
			}
		},
    onLoad(option){
        this.previewOrder = JSON.parse(decodeURIComponent(option.previewOrder));
    },
    onNavigationBarButtonTap(e) {
      if (e.float == 'right') {
        //保存
        this.saveOrder();
      }
    },
		methods: {
			// 保存预检单
			async saveOrder() {
			  // 他们出选择  预检单保存成功  是否进入车辆检查
			  await this.$util.showLoading('正在保存...');
			  await this.$sleep(1000);
        let res = await savePreview(this.previewOrder);
			  await this.$util.hideLoading();
			  // const [err, res] = await this.$util.showModal({
			  //   content: '预检单保存成功，是否进入车辆检查。'
			  // });
			  // console.log([err, res]);
			  // if (res.confirm) {
			  //   console.log('点击 确定');
			  //   await uni.navigateTo({
			  //     url: '/pages/vehicle-inspection/vehicle-detail'
			  //   });
			  // } else if (res.cancel) {
			  //   console.log('点击 取消');
			  //   await uni.navigateBack();
			  // }
			},
		}
	}
</script>

<style>

</style>
