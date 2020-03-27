<template>
  <!-- 客户信息 -->
  <view class="panel-wrap">
    <MLicense label="车牌号" v-model="formData.license" @list="changeItem"></MLicense>
    <MInput label="VIN" required="true" placeholder="" v-model="formData.vin">
      <view slot="after"><text @click="searchClick" class="m-iconfont screen">&#xe732;</text></view>
    </MInput>
    <!-- <MInput label="车型" readonly="true" placeholder=""  v-model="formData.model"></MInput> -->
    <MCheckbox
      label="车型"
      type="popup"
      v-model="formData.model"
      :itemList="modelList"
      single
    ></MCheckbox>
    <MInput label="车主姓名" readonly="true" placeholder="" v-model="formData.ownerName"></MInput>
    <MInput label="手机号" readonly="true" placeholder="" v-model="formData.phone">
      <view slot="after" class="phoneWrap">
        <image
          @click="callClick(formData.phone)"
          src="/static/image/dianhua2.svg"
          mode="scaleToFill"
          class="img"
        ></image>
      </view>
    </MInput>
   
    <MInput label="送修人" v-model="formData.contactorName"></MInput>
    <MInput label="送修人手机号" :required="true" placeholder="" v-model="formData.contactorPhone">
      <view slot="after" class="phoneWrap">
        <image
          @click="callClick(formData.contactorPhone)"
          src="/static/image/dianhua2.svg"
          mode="scaleToFill"
          class="img"
        ></image>
      </view>
    </MInput>
     <MInput label="送修人邮箱" v-model="formData.eMail"></MInput>
     <!-- 服务顾问默认当前登录的用户 -->
    <MCheckbox
      label="服务顾问"
      type="popup"
      v-model="formData.serviceAdvisor"
      :itemList="serviceAdvisorList"
      single
    ></MCheckbox>
    <MInput label="里程(KM)" required="true" v-model="formData.mileage"></MInput>
    <MInput label="进厂时间" readonly="true" placeholder="" v-model="formData.firstInDate"></MInput>

    <MInput label="销售日期" readonly="true" placeholder="" v-model="formData.salesDate"></MInput>
    <MTextArea label="地址" readonly="true" placeholder="" v-model="formData.address"></MTextArea>

    <MPopup ref="mPopup" type="center" title="查询到的车牌">
      <view v-for="(item, index) in itemListLicense" :key="index">
        <view class="itemBox" @click="licenseClick(item)">{{ item.license }}</view>
      </view>
    </MPopup>
  </view>
</template>

<script>
import { queryCusInfoByLicense } from '@/api/customer-reception/index.js';
import dictCode from '@/common/dictCode.js';
export default {
  name: 'customer-info-add',
  data() {
    return {
      formData: {
        license: '沪',
        vin: '',
        model: [],
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
      serviceAdvisorList: [],//服务顾问
      itemListLicense: [],//查询的车牌
      modelList:[],//车型
    };
  },
  watch: {
    
  },
  mounted() {
    this.getServiceAdvisorList();
    this.getModel();
    console.log('获取登录名的ID',this.$auth.getUserId())
    // this.formData.serviceAdvisor.push(15);
  },
  methods: {
    //根据车牌号查VIN号
    async searchClick() {
      if (this.formData.license.trim()) {
        let params = {
          license: this.formData.license.trim(),
          flag: 1
        };
        let [status, res] = await queryCusInfoByLicense(params);
        if (res.data.length == 0) {
          this.SHOW_TOAST('没有查到相关车牌!');
        } else {
          this.itemListLicense = res.data;
          this.$refs.mPopup.open(); // 打开
        }
      } else {
        this.SHOW_TOAST('请输入车牌号');
      }
    },
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
    },
    changeItem(item) {
      let list =  this.$auth.traversingObject(item)
      for(let key in list){
        if(key=='model'){
          console.log(list[key])
          this.formData[key].push(list[key])
        }else{
          this.formData[key] = list[key];
        }
      }
    },
    //查询所有车型
    async getModel(){
      this.modelList = await this.$auth.getModel();
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
