<template>
  <!-- 客户信息 -->
  <view class="panel-wrap">
    <MLicense label="车牌号" :value="formData.license"></MLicense>
    <MInput label="VIN" :required="true">
      <view slot="after"><text @click="searchClick" class="m-iconfont screen">&#xe732;</text></view>
    </MInput>
    <MInput label="车型" readonly="true" :value="formData.model"></MInput>
    <MInput label="车主姓名" readonly="true" :value="formData.ownerName"></MInput>
    <MInput label="手机号" readonly="true" :value="formData.phone"></MInput>
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
    <MCheckbox
      label="服务顾问"
      type="popup"
      v-model="formData.serviceAdvisor"
      :itemList="serviceAdvisorList"
      single
    ></MCheckbox>
    <MInput label="里程(KM)" :required="true"></MInput>
    <MInput label="进厂时间"></MInput>
    <MInput label="销售日期" readonly="true" :value="formData.salesDate"></MInput>
    <MInput label="地址"></MInput>
  </view>
</template>

<script>
import dictCode from '@/common/dictCode.js';
export default {
  name: 'customer-info-add',
  data() {
    return {
      formData: {
        license: '沪',
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
        address: '',
        serviceAdvisor: []
      },
      serviceAdvisorList: []
    };
  },
  mounted() {
    this.getServiceAdvisorList();
  },
  methods: {
    searchClick() {},
    callClick(phone) {
      console.log(111);
      uni.makePhoneCall({
        phoneNumber: phone //仅为示例
      });
    },
    //获取列表
    async getServiceAdvisorList() {
      //服务顾问
      let consultant = { role: dictCode.SERVICE_CONSULTANT, companyId: this.$auth.getCompanyId() };
      this.serviceAdvisorList = await this.$auth.queryServiceAdvisor(consultant);
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
