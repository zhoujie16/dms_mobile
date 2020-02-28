<template>
	<view>
		<button type="primary" @click="openModal1">title,content弹窗</button>
		<button type="primary" @click="openModal2">content弹窗</button>
		<button type="primary" @click="openModal3">title弹窗</button>
		<button type="primary" @click="openModal4">mainOperation弹窗</button>
    <Mmodal ref="popup1" type="default"></Mmodal>
    <Mmodal ref="popup2" type="content"></Mmodal>
    <Mmodal ref="popup3" type="title"></Mmodal>
    <Mmodal ref="popup4" type="mainOperation"></Mmodal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openModal1() {
        this.$refs.popup1.open()
      },
      openModal2() {
        this.$refs.popup2.open()
      },
      openModal3() {
        this.$refs.popup3.open()
      },
      openModal4() {
        this.$refs.popup4.open()
      }
		}
	}
</script>

<style lang="scss" scoped>

</style>
