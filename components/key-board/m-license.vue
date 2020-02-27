<template>
	<view class="m-licence-car-box">
		<view class="m-licence-car-box-title">
		  <MLabel :label="label" :border="false">
		    <!-- <text @click="foldingHandleClick" class="m-iconfont">
		      &#xe71c;
		    </text> -->
		  </MLabel>
		</view>
    <view class="m-licence-box-panel-inner">
      <view :class="index==activeindex?'border-pressed':'border'" v-for="(item,index) in itemList" :key="index" @tap="focus(index)">{{item.value}}</view>
    </view>
    <keyBoard :disableDot="true" :type="keyboardType"  @input="inputVal" ref="keyboard"></keyBoard>   
	</view>
</template>

<script>
  import keyBoard from '@/components/key-board/key-board.vue'
	export default {
     components:{keyBoard},
    props:{
      label: {
        type: String,
        default: '选择'
      },
    },
		data() {
			return {
				activeindex:0,
				keyboardType:4,
				itemList:[{
				  id:1,
				  value:'沪',
				},{
				  id:2,
				  value:'',
				},{
				  id:3,
				  value:'',
				},{
				  id:4,
				  value:'',
				},{
				  id:5,
				  value:'',
				},{
				  id:6,
				  text:'',
				},{
				  id:7,
				  value:'',
				},{
				  id:8,
				  value:'',
				}]
			}
		},
		methods: {
      // 扫描
			foldingHandleClick(){
        
      },
      focus(index){
        this.activeindex = index;
        if(index===0){
          this.keyboardType = 3;
          this.$refs.keyboard.open() //打开键盘
        }else{
          this.keyboardType = 4;
          this.$refs.keyboard.open() //打开键盘
        }
        
      },
      inputVal(val){
        // this.textVal =val;
        this.itemList[this.activeindex].value = val;
        if(this.activeindex<(this.itemList.length-1)){
          this.activeindex+=1
          this.focus(this.activeindex)
        }else{
          return;
        }
      }
		}
	}
</script>

<style lang="scss" scoped>
.m-licence-car-box{
  background-color: #FFFFFF;
}
.m-licence-box-panel-inner{
    display: flex;
     margin: 0 30rpx;
    .border{
      width: 90rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      border: 2rpx solid #E1E1E1;
    }
    .border-pressed{
      width: 90rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      border: 2rpx solid #1371F7;
    }
  }
</style>
