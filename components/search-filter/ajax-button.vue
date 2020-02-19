<template>
  <view>
    <button
      :type="type"
      :loading="loading"
      :size="size"
      :plain="plain"
      :disabled="isDisabled"
      :openType="openType"
      @click="clickHandler"
    >
      <slot></slot>
    </button>
  </view>
</template>

<script>
export default {
  name: 'AjaxButton',
  props: {
    // ajax 防止重复提交，对应的执行方法通过 click 参数传进来
    click: {
      type: Function,
      default: null
    },
    size: {
      type: String,
      default: 'small'
    },
    type: {
      type: String
    },
    plain: {
      type: Boolean,
      default: false
    },
    openType: {
      type: String,
      default: ''
    }
    // 权限校验参数
    // authList: {
    //   type: Array,
    //   default: null
    // },
    // authMark: {
    //   type: String,
    //   default: ''
    // },
    // containerStyle: {
    //   type: Object,
    //   default: () => ({})
    // }
  },
  data() {
    return {
      loading: false
      // ajaxing: false
    };
  },
  computed: {
    isDisabled() {
      return this.loading;
    }
    // isVisible() {
    //   // 没有权限控制，默认该按钮显示状态
    //   if (!this.authList) return true;
    //   return this.authList.includes(this.authMark);
    // }
  },
  methods: {
    async sleep(timeLen) {
      return new Promise(resolve => setTimeout(resolve, timeLen));
    },
    async clickHandler() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        await this.click();
        this.loading = false;
      } catch (err) {
        console.log('err', err);
        this.loading = false;
      }
    }
  }
};
</script>

<style></style>
