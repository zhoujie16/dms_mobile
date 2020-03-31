<!-- m-swipe-cell 滑动单元格 -->
<template>
  <view class="m-swipe-cell-wrap">
    <uni-swipe-action>
      <uni-swipe-action-item
        :disabled="disabled"
        :options="swipeOptions"
        @click="onClick"
        @change="change"
      >
        <slot name="cell"></slot>
      </uni-swipe-action-item>
    </uni-swipe-action>
  </view>
</template>

<script>
export default {
  props: {
    options: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    swipeOptions() {
      const dict = {
        default: '#C3C3C3',
        primary: '#1371F7',
        warn: '#FE4766'
      };
      return this.options.map(opt => {
        return {
          text: opt.text,
          style: {
            backgroundColor: dict[opt.type]
          }
        };
      });
    }
  },
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      this.$emit('optionClick', {
        index: e.index,
        text: e.content.text
      });
    },
    change(open) {
      this.$emit('change', open);
    }
  }
};
</script>

<style lang="scss" scoped>
	 /deep/ .move-hock uni-view:first-child{
		border-top-left-radius: 20rpx!important;
		border-bottom-left-radius: 20rpx;
	}
	
  /deep/ .uni-swipe_box{
    background:none!important;
  }
</style>
