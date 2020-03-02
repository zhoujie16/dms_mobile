<template>
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
         <MTextArea label="内饰检查" v-model="value_1"></MTextArea>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'InteriorCheck',
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
          fieldName: 'dg',
          type: 'select',
          label: '灯光',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'smsj',
          type: 'select',
          label: '四门升降',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'ybzsd',
          type: 'select',
          label: '仪表/指示灯：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'yg',
          type: 'select',
          label: '雨刮：',
          itemList: [
            { text: '正常', value: '14001001' },
            // { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'kt',
          type: 'select',
          label: '空调：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'yx',
          type: 'select',
          label: '音响：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'ss',
          type: 'select',
          label: '手刹：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'tc',
          type: 'select',
          label: '天窗：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'hsj',
          type: 'select',
          label: '后视镜：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'zy',
          type: 'select',
          label: '座椅/座椅套：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'aqd',
          type: 'select',
          label: '安全带：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        }
      ],
      value_1:''
    };
  },
  methods: {
    // 值改变事件
    async formItemChange(data, index) {
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
