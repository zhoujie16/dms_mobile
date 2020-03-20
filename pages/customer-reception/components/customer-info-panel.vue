<template>
  <!-- 客户信息 -->
  <view class="panel-wrap">
    <MLicense label="车牌号" :value="formData.license"></MLicense>
    <MInput label="VIN" :required="true">
      <view slot="after"><text @click="searchClick" class="m-iconfont screen">&#xe732;</text></view>
    </MInput>
    <!-- readonly -->
    <MInput label="车型"  :value="formData.model"></MInput>
    <!-- readonly -->
    <MInput label="车主姓名" :value="formData.ownerName"></MInput> 
    <!-- readonly -->
    <MInput label="手机号" :value="formData.phone"></MInput>
    <MInput label="邮箱" :value="formData.eMail"></MInput>
    <MInput label="送修人"></MInput>
    <MInput label="送修人手机号" :required="true" :value="formData.contactorPhone">
      <view slot="after" class="phoneWrap">
        <image
          @click.native="callClick(formData.contactorPhone)"
          src="/static/image/dianhua2.svg"
          mode="scaleToFill"
          class="img"
        ></image>
      </view>
    </MInput>
    <MInput label="里程(KM)" :required="true"></MInput>
    <MInput label="进厂时间"></MInput>
    <!-- readonly -->
    <MInput label="销售日期" :value="formData.salesDate"></MInput>
    <MInput label="地址"></MInput>
  </view>
</template>

<script>
import InfoPanel from './info-panel.vue';
export default {
  components: {
    InfoPanel
  },
  name: '',
  data() {
    return {
      formData: {
        license: '',
        vin: '',
        model: '',
        ownerName: '',
        phone: '',
        eMail: '',
        contactorName: '',
        contactorPhone: '111',
        mileage: '',
        firstInDate: '',
        salesDate: '',
        address: ''
      }
    };
  },
  methods: {
    searchClick() {},
    callClick(phone) {
      console.log(111);
      uni.makePhoneCall({
        phoneNumber: phone //仅为示例
      });
    }
  }
};
</script>

<style lang="scss">
.panel-wrap {
  padding: 30rpx 0;
}
.screen {
  font-size: 52rpx;
  color: $uni-m-color-c11;
}
.phoneWrap {
  width: 54rpx;
  height: 54rpx;
  .img {
    width: 54rpx;
    height: 54rpx;
  }
}
</style>
