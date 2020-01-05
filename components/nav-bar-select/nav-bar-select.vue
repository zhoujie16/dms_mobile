<template>
	<view class="nav-bar-select-wrap">
    <view class="nav-bar-select-inner">
      <slot></slot>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.nav-bar-select-wrap{
  .nav-bar-select-inner{
    display: flex;
  }
}
</style>
