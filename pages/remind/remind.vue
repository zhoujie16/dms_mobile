<template>
	<MPage ref="MPage" type="primary">
	  <BaseScroll
	    :height="scrollHeight"
	    :fetchApi="fetchApi"
	    :fetchParams="fetchParams"
	    @listChange="
	      arr => {
	        this.dataSource = arr;
	      }
	    "
	  >
	    <view style="padding: 20rpx;">
	      <RemindCell
	        @click="scrollCellClick(data)"
	        v-for="(data, i) in dataSource"
	        :key="i"
	        :cell="data"
	      ></RemindCell>
	    </view>
	  </BaseScroll>
	</MPage>
</template>

<script>
  import RemindCell from './components/remind-cell.vue'
  import { AjaxScrollData } from '@/api/test/index.js';
  
	export default {
    components:{
      RemindCell
    },
		data() {
      this.scrollHeight = uni.getSystemInfoSync().windowHeight + 'px';
			return {
				fetchApi: AjaxScrollData,
				fetchParams: {},
				dataSource: []
			};
		},
    methods:{
      // 列表点击事件
      scrollCellClick(cell) {
        console.log('cellClick', cell);
        return;
        uni.navigateTo({
          url: '/pages/demo/detail-demo'
        });
      },
    }
	}
</script>

<style lang="scss">

</style>
