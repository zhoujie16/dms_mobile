<template>
  <!-- 发动机舱 -->
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
          ></MVehicleCheckCell>
        </view>
      </view>
      <view class="content">
        <CollapsePanel title="新能源汽车">
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
        <MTextArea label="发动机舱" v-model="formData2[0].remark3"></MTextArea>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'EngineNacelle',
  props: {
    vehicleCheckDetailResultVos2: Array
  },
  data() {
    return {
      isshow: false,
      formData: [
        {
          fieldName: '7002',
          type: 'select',
          label: '发动机机油：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7003',
          type: 'select',
          label: '玻璃清洗液：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7004',
          type: 'select',
          label: '蓄电池：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7005',
          type: 'select',
          label: '防冻液：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7006',
          type: 'select',
          label: '助力转向：：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7007',
          type: 'input',
          label: '制动液',
          value: '',
          unit: '%',
          placeholder: '请填写含水量0-10',
          hasPhoto: false
        },
        {
          fieldName: '7008',
          type: 'select',
          label: '空气滤清器：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7010',
          type: 'select',
          label: '发动机皮带：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7011',
          type: 'select',
          label: '油路/管路/线路：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        }
      ],
      formData1: [
        {
          fieldName: '7012',
          type: 'select',
          label: '高压电池安装：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7013',
          type: 'select',
          label: '高压维护开关：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7014',
          type: 'select',
          label: '线束/接插件：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        },
        {
          fieldName: '7016',
          type: 'select',
          label: '逆变器冷却液：',
          itemList: this.$commonDict.CHECK_LIST,
          value: ''
        }
      ],
      formData2: [
        {
          fieldName: '7001',
          remark3: ''
        }
      ]
    };
  },
  mounted() {
    console.log(this.vehicleCheckDetailResultVos2)
    this.getDetailData();
  },
  methods: {
    //查询明细并显示
    getDetailData(){
      if(this.vehicleCheckDetailResultVos2.length!==0){
        this.vehicleCheckDetailResultVos2.forEach(x=>{
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
        this.vehicleCheckDetailResultVos2.forEach(x=>{
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
        this.vehicleCheckDetailResultVos2.forEach(x=>{
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
      this.formData[index].value = data;
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
      // margin: 20rpx;
      // border-radius: 20rpx;
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
</style>
