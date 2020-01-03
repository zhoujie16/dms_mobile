<template>
	<view>
		<button @click="showPopup1" type="primary">MPopup center</button>
    <button @click="showPopup2" type="primary">MPopup bottom</button>
    <FaIcon type="home" size="22" color="#666"></FaIcon>
    <MPopup ref="mPopup1" type="center" title="标题1">
      弹窗内容 center 
    </MPopup>
    <MPopup ref="mPopup2" type="bottom" title="标题2">
      弹窗内容 bottom
    </MPopup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 
			};
		},
    methods:{
      showPopup1(){
        this.$refs.mPopup1.open()
      },
      showPopup2(){
        this.$refs.mPopup2.open()
      }
    }
	}
</script>

<style lang="scss">

</style>
