<template>
  <view>
    <view class="uni-flex uni-row">
      <view class="flex-item1 label-pad">灯光：</view>
      <view class="flex-item2 label-pad">*</view>
      <view class="flex-item3 label-pad"><button size="mini" plain="true" :class="data1==='normal'?'btn-primary':'btn-gary'" @click="rowClick('normal')">正常</button></view>
      <view class="flex-item3 label-pad"><button size="mini" plain="true" :class="data1==='warn'?'btn-warn':'btn-gary'" @click="rowClick('warn')">观察</button></view>
      <view class="flex-item3 label-pad"><button size="mini" plain="true" :class="data1==='error'?'btn-error':'btn-gary'"  @click="rowClick('error')">异常</button></view>
      <view class="flex-item4"><uni-icons type="camera" size="30" color="#CCCCCC"></uni-icons></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      data1:'normal'
    };
  },
  methods:{
    rowClick(el){
      this.data1 = el;
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-item1 {
  width: 20%;
  text-align: center;
  line-height: 60rpx;
}
.flex-item2 {
  width: 3%;
  color: #ff0000;
  line-height: 60rpx;
}
.flex-item3 {
  width: 21%;
}
.flex-item4 {
  width: 14%;
  text-align: center;
}
.label-pad {
  margin-right: 2%;
}
.btn-gary {
  display: block;
  line-height: 2.3;
  font-size: 13px;
  padding: 0;
  color: #CCCCCC;
  border: 2rpx solid #CCCCCC;
}

.btn-primary {
  display: block;
  line-height: 2.3;
  font-size: 13px;
  padding: 0;
  color: #0099cc;
  border: 2rpx solid #0099cc;
}
.btn-warn {
  display: block;
  line-height: 2.3;
  font-size: 13px;
  padding: 0;
  color: #ffcc00;
  border: 2rpx solid #ffcc00;
}
.btn-error {
  display: block;
  line-height: 2.3;
  font-size: 13px;
  padding: 0;
  color: #ff6666;
  border: 2rpx solid #ff6666;
}

</style>
