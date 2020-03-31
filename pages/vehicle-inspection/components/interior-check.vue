<template>
  <!-- 内饰检查 -->
  <view class="page-wrap">
    <view class="container">
      <view class="content">
        <view class="subContent">
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
            @changePhoto="formImageChange"
          ></MVehicleCheckCell>
        </view>
      </view>
      <view class="content"><MTextArea label="内饰检查" v-model="formData1[0].remark3"></MTextArea></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'InteriorCheck',
  props:{
    vehicleCheckDetailResultVos:Array
  },
  data() {
    return {
      /**
       * 参数:
       * type: 类型 select / input / date / customer
       * fieldName: 字段名称
       * label
       * itemList
       * value
       * placeholder
       * unit: 单位 string
       * hasPhoto: true / false
       * @change: 值改变,修改数据源的value
       */
      formData: [
        {
          fieldName: '6002',
          type: 'select',
          label: '灯光',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6003',
          type: 'select',
          label: '四门升降',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6004',
          type: 'select',
          label: '仪表/指示灯：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6005',
          type: 'select',
          label: '雨刮：',
          itemList: this.$commonDict.CHECK_LIST_TWO,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6006',
          type: 'select',
          label: '空调：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6007',
          type: 'select',
          label: '音响：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6008',
          type: 'select',
          label: '手刹：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6009',
          type: 'select',
          label: '天窗：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6010',
          type: 'select',
          label: '后视镜：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6011',
          type: 'select',
          label: '座椅/座椅套：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        },
        {
          fieldName: '6012',
          type: 'select',
          label: '安全带：',
          itemList: this.$commonDict.CHECK_LIST,
          value: '',
          videoUrl:'',
          photoPath: ''
        }
      ],
      formData1:[{
         fieldName: '6001',
         remark3:''
      }]
      
      
    };
  },
  mounted() {
    this.getDetailData();
  },
  methods: {
    //查询明细并显示
    getDetailData(){
      if(this.vehicleCheckDetailResultVos.length!==0){
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
        this.vehicleCheckDetailResultVos.forEach(x=>{
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
      }
      
    },
   
    // 值改变事件
    async formItemChange(data, index) {
      console.log('修改了', data, index);
      this.formData[index].value = data;
      // this.vehicleCheckDetailRes[]
    },
    //图片改变事件
    async formImageChange(data, index) {
      console.log('------');
      this.formData[index].photoPath = data;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  min-height: 100vh;
  background-color: $uni-m-color-white-pressed;
  margin-bottom: 10vh;
  .container {
    padding: 20rpx 0;
    .content {
      background-color: #ffffff;
      // margin: 20rpx 0;
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
        .label-pad {
          margin-bottom: 20rpx;
        }
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
</style>
