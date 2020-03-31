<template>
  <!-- 底盘四轮 -->
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="subContent">
          <!-- <VChoose :rowData="formData" @change="(val)=>{ this.formData = val }"></VChoose>-->
          <MVehicleCheckCell
            v-for="(item, i) in formData"
            :key="item.fieldName"
            :index="i"
            :type="item.type"
            :label="item.label"
            :itemList="item.itemList"
            :value="item.value"
            :placeholder="item.placeholder"
            :unit="item.unit"
            :hasPhoto="item.hasPhoto"
            @change="formItemChange"
          ></MVehicleCheckCell>
        </view>
      </view>
      <view class="content">
        <CollapsePanel title="轮胎">
          <template slot="default">
            <MVehicleCheckCell
              v-for="(item, i) in formData1"
              :key="item.fieldName"
              :index="i"
              :type="item.type"
              :label="item.label"
              :itemList="item.itemList"
              :value="item.value"
              :placeholder="item.placeholder"
              :unit="item.unit"
              :hasPhoto="item.hasPhoto"
              @change="formItemChange1"
            ></MVehicleCheckCell>
          </template>
        </CollapsePanel>
      </view>
      <view class="content">
        <CollapsePanel title="刹车片">
          <template slot="default">
            <MVehicleCheckCell
              v-for="(item, i) in formData2"
              :key="item.fieldName"
              :index="i"
              :type="item.type"
              :label="item.label"
              :itemList="item.itemList"
              :value="item.value"
              :placeholder="item.placeholder"
              :unit="item.unit"
              :hasPhoto="item.hasPhoto"
              @change="formItemChange2"
            ></MVehicleCheckCell>
          </template>
        </CollapsePanel>
      </view>
      <view class="content"><MTextArea label="底盘四轮" v-model="formData3[0].remark3"></MTextArea></view>
    </view>
  </view>
</template>

<script>
import VChoose from './v-choose.vue';
export default {
  name: 'ChassisRound',
  components: {
    VChoose
  },
  props:{
      vehicleCheckDetailResultVos3:Array
    },
  data() {
    return {
      formData: [
        {
          fieldName: '8002',
          type: 'select',
          label: '机油滤清器：',
          itemList: this.$commonDict.CHECK_LIST,
          fileBaseUrl:'',
          videoUrl:'',
          value: ''
        },
        {
          fieldName: '8003',
          type: 'select',
          label: '燃油滤清器：',
          itemList: this.$commonDict.CHECK_LIST,
          fileBaseUrl:'',
          videoUrl:'',
          value: ''
        },
        {
          fieldName: '8004',
          type: 'select',
          label: '变速箱油（泄漏）：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '8005',
          type: 'select',
          label: '减震器/撑杆/半轴及其他悬挂组件：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '8006',
          type: 'select',
          label: '排气管：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        }
      ],
      formData1: [
        {
          fieldName: '8027',
          type: 'select',
          label: '状态：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '8011',
          type: 'input',
          label: '胎纹左前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: '8013',
          type: 'input',
          label: '胎纹左后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: '8012',
          type: 'input',
          label: '胎纹右前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: '8014',
          type: 'input',
          label: '胎纹右后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: '8007',
          type: 'date',
          label: '胎龄左前',
          value: ''
        },
        {
          fieldName: '8009',
          type: 'date',
          label: '胎龄左后',
          value: ''
        },
        {
          fieldName: '8008',
          type: 'date',
          label: '胎龄右前',
          value: ''
        },
        {
          fieldName: '8010',
          type: 'date',
          label: '胎龄右后',
          value: ''
        },
        {
          fieldName: '8015',
          type: 'select',
          label: '胎压左前：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '8017',
          type: 'select',
          label: '胎压左后：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '8016',
          type: 'select',
          label: '胎压右前：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '8018',
          type: 'select',
          label: '胎压右后：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        }
      ],
      formData2: [
        {
          fieldName: '8026',
          type: 'select',
          label: '状态：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '8019',
          type: 'input',
          label: '刹车片左前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: '8020',
          type: 'input',
          label: '刹车片右前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: '8021',
          type: 'input',
          label: '刹车片左后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: '8022',
          type: 'input',
          label: '刹车片右后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        }
      ],
      formData3:[{
        fieldName: '8001',
        remark3:'',
      }
      ]
    };
  },
  mounted() {
    this.getDetailData();
  },
  methods: {
    //查询明细并显示
    getDetailData(){
      if(this.vehicleCheckDetailResultVos3.length!==0){
        this.vehicleCheckDetailResultVos.forEach(x=>{
          this.formData.forEach(y=>{
            if(x.contentCode==y.fieldName){
              if(x.remark3){
                y.remark3 = x.remark3
              }else{
                y.value = x.statusCode;
                y.photoPath = x.fileBaseUrl;
                y.videoUrl = x.videoUrl;
              }
             
            }
          })
        });
        this.vehicleCheckDetailResultVos3.forEach(x=>{
          this.formData1.forEach(y=>{
            if(x.contentCode==y.fieldName){
              if(x.remark3){
                y.remark3 = x.remark3
              }else{
                y.value = x.statusCode;
                y.photoPath = x.fileBaseUrl;
                y.videoUrl = x.videoUrl;
              }
             
            }
          })
        });
        this.vehicleCheckDetailResultVos3.forEach(x=>{
          this.formData2.forEach(y=>{
            if(x.contentCode==y.fieldName){
              if(x.remark3){
                y.remark3 = x.remark3
              }else{
                y.value = x.statusCode;
                y.photoPath = x.fileBaseUrl;
                y.videoUrl = x.videoUrl;
              }
             
            }
          })
        });
        this.vehicleCheckDetailResultVos3.forEach(x=>{
          this.formData3.forEach(y=>{
            if(x.contentCode==y.fieldName){
              if(x.remark3){
                y.remark3 = x.remark3
              }else{
                y.value = x.statusCode;
                y.photoPath = x.fileBaseUrl;
                y.videoUrl = x.videoUrl;
              }
             
            }
          })
        });
      }
      
    },
    // 值改变事件
    async formItemChange(data, index) {
      console.log('修改了', data, index);
      this.formData[index].value = data;
    },
    // 值改变事件
    async formItemChange1(data, index) {
      console.log('修改了', data, index);
      this.formData1[index].value = data;
    },
    // 值改变事件
    async formItemChange2(data, index) {
      console.log('修改了', data, index);
      this.formData2[index].value = data;
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  min-height: 100vh;
  background-color: $uni-m-color-white-pressed;
  margin-bottom: 10vh;
  .container {
    padding: 20rpx 0;
    .content {
      background-color: #ffffff;
      // padding: 0 20rpx;
      .content-top {
        padding-right: 10rpx;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 42rpx;
        font-weight: bold;
      }
      .subContent {
        margin: 0 auto 20rpx;
        padding: 10rpx 0;
        // .flex-item1 {
        //   width: 20%;
        //   padding: 5rpx 0;
        //   text-align: center;
        // }
        // .flex-item2{
        //   width: 66%;
        //   padding: 5rpx 0;
        // }
        // .flex-item3{
        //   width: 14%;
        //   text-align: center;
        //   padding: 5rpx 0;
        // }
        .label-pad {
          margin-bottom: 20rpx;
        }
        // .sub-text {
        //   line-height: 60rpx;
        // }
        .sub-textarea {
          display: block;
          background-color: #f1f1f1;
          min-height: 15vh;
          width: 100%;
          border-radius: 20rpx;
          padding: 20rpx;
          line-height: 40rpx;
        }
        .btn-blue {
          width: 80%;
          text-align: center;
          background-color: #0099cc;
          color: $uni-text-color-inverse;
        }
      }
    }
  }
}
.icon {
  font-size: 52rpx;
  color: $uni-m-color-c11;
}
</style>
