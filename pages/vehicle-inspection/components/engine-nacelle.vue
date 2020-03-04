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
        <MTextArea label="发动机舱" v-model="value_1">
          <text class="m-iconfont icon" @click="startRecognize">&#xe729;</text>
        </MTextArea>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'EngineNacelle',

  data() {
    return {
      isshow: false,
      value_1: '',
      formData: [
        {
          fieldName: 'fdjjy',
          type: 'select',
          label: '发动机机油：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'blqxy',
          type: 'select',
          label: '玻璃清洗液：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'xdc',
          type: 'select',
          label: '蓄电池：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'fdy',
          type: 'select',
          label: '防冻液：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'zlzx',
          type: 'select',
          label: '助力转向：：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'zdy',
          type: 'input',
          label: '制动液',
          value: '',
          unit: '%',
          placeholder: '请填写含水量0-10',
          hasPhoto: false
        },
        {
          fieldName: 'kqlqq',
          type: 'select',
          label: '空气滤清器：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'fdjpd',
          type: 'select',
          label: '发动机皮带：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'yl',
          type: 'select',
          label: '油路/管路/线路：',
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
          fieldName: 'gydcaz',
          type: 'select',
          label: '高压电池安装：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'gywhkg',
          type: 'select',
          label: '高压维护开关：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'xs',
          type: 'select',
          label: '线束/接插件：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        },
        {
          fieldName: 'nbq',
          type: 'select',
          label: '逆变器冷却液：',
          itemList: [
            { text: '正常', value: '14001001' },
            { text: '观察', value: '14001002' },
            { text: '异常', value: '14001003' }
          ],
          value: ''
        }
      ]
    };
  },
  mounted() {
    this.addRecognizeEventListener();
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
      this.formData[index].value = data;
    },
    // 添加事件监听
    addRecognizeEventListener() {
      plus.speech.addEventListener(
        'start',
        () => {
          console.log('start');
          this.value_1 = '';
        },
        false
      );
      plus.speech.addEventListener(
        'recognition',
        e => {
          console.log('recognition', e);
          this.value_1 += e.result;
        },
        false
      );
      plus.speech.addEventListener(
        'end',
        () => {
          console.log('end');
          console.log(this.text);
        },
        false
      );
    },
    // 开始识别
    startRecognize() {
      const options = {
        engine: 'baidu' // 百度：baidu  讯飞：iFly
      };
      plus.speech.startRecognize(options);
    },
    stopRecognize() {
      plus.speech.stopRecognize();
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
.icon {
  font-size: 52rpx;
  color: $uni-m-color-c11;
}
</style>
