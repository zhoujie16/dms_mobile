<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <view class="btn-v">
        <button @click="formSubmit" type="primary" class="submit-btn">
          查询
        </button>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
       
    };
  },
  methods: {
    formSubmit() {
      console.log("formSubmit");
      this.$emit("confirm");
    }
  }
};
</script>

<style>
.form-demo-wrap {
  position: relative;
  background-color: #ffffff;
  padding: 30rpx;
}
.btn-v {
  padding: 40rpx 0;
}
.submit-btn {
  width: 100%;
}
</style>
