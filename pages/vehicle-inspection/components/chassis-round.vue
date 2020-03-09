<template>
  <!-- 发动机舱 -->
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
      <view class="content">
        <MTextArea label="底盘四轮" v-model="value_1">
         
        </MTextArea>
      </view>
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
  data() {
    return {
      isshow1: 'arrowdown',
      isshow2: 'arrowdown',
      value_1: '',
      formData: [
        {
          fieldName: 'jylqq',
          type: 'select',
          label: '机油滤清器：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'rylqq',
          type: 'select',
          label: '燃油滤清器：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'bsxy',
          type: 'select',
          label: '变速箱油（泄漏）：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'jzq',
          type: 'select',
          label: '减震器/撑杆/半轴及其他悬挂组件：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'pqg',
          type: 'select',
          label: '排气管：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        }
      ],
      formData1: [
        {
          fieldName: 'pqg',
          type: 'select',
          label: '状态：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'twzq',
          type: 'input',
          label: '胎纹左前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'twzh',
          type: 'input',
          label: '胎纹左后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'twyq',
          type: 'input',
          label: '胎纹右前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'twyh',
          type: 'input',
          label: '胎纹右后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'tlzq',
          type: 'date',
          label: '胎龄左前',
          value: ''
        },
        {
          fieldName: 'tlzh',
          type: 'date',
          label: '胎龄左后',
          value: ''
        },
        {
          fieldName: 'tlyq',
          type: 'date',
          label: '胎龄右前',
          value: ''
        },
        {
          fieldName: 'tlyh',
          type: 'date',
          label: '胎龄右后',
          value: ''
        },
        {
          fieldName: 'tyzq',
          type: 'select',
          label: '胎压左前：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'tyzh',
          type: 'select',
          label: '胎压左后：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'tyyq',
          type: 'select',
          label: '胎压右前：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'tyyh',
          type: 'select',
          label: '胎压右后：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        }
      ],
      formData2: [
        {
          fieldName: 'pqg',
          type: 'select',
          label: '状态：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'scpzq',
          type: 'input',
          label: '刹车片左前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'scpyq',
          type: 'input',
          label: '刹车片右前',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'scpzh',
          type: 'input',
          label: '刹车片左后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        },
        {
          fieldName: 'scpyh',
          type: 'input',
          label: '刹车片右后',
          value: '',
          unit: 'mm',
          placeholder: '胎纹'
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
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
    },
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
