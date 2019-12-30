<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <form @submit="formSubmit" @reset="formReset">
        <yCheckbox label="销售顾问" :itemList="itemList_xsgw" single></yCheckbox>
        <yInput label="客户姓名"></yInput>
        <yInput label="客户手机"></yInput>
        <yCheckbox label="性别" :itemList="itemList_sex" single></yCheckbox>
        <yInput label="车架号"></yInput>
        <yCheckbox label="客户来源" :itemList="itemList_khly" single></yCheckbox>
        <yCheckbox label="意向车型(多选)" :itemList="itemList_xqah"></yCheckbox>
        <view class="uni-btn-v">
          <button size="mini" type="default" form-type="reset">重置</button>
          <button size="mini" form-type="submit">查询</button>
        </view>
      </form>
    </view>
  </view>
</template>
<script>
  import yInput from '@/components/search-filter/m-input.vue'
  import yCheckbox from '@/components/search-filter/m-checkbox.vue'
  var graceChecker = require("@/common/graceChecker.js");
  import uniBadge from "@/libs/uni-ui/uni-badge/uni-badge.vue"

  export default {
    components: {
      yInput,
      yCheckbox,
      uniBadge
    },
    data() {
      return {
        itemList_xsgw: [{
            text: "顾问1",
            isSelect: false
          },
          {
            text: "顾问2",
            isSelect: false
          },
          {
            text: "顾问3",
            isSelect: false
          },
          {
            text: "顾问4",
            isSelect: false
          },
          {
            text: "顾问5",
            isSelect: false
          },
          {
            text: "顾问6",
            isSelect: false
          },
          {
            text: "顾问7",
            isSelect: false
          },
          {
            text: "顾问8",
            isSelect: false
          },
          {
            text: "顾问9",
            isSelect: false
          },
          {
            text: "顾问10",
            isSelect: false
          }
        ],
        itemList_sex: [{
            text: "先生",
            isSelect: true
          },
          {
            text: "女士",
            isSelect: false
          }
        ],
        itemList_khly: [{
            text: "到店",
            isSelect: false
          },
          {
            text: "车展",
            isSelect: false
          },
          {
            text: "保客再购",
            isSelect: false
          },
          {
            text: "亲友介绍",
            isSelect: false
          },
          {
            text: "其他",
            isSelect: false
          },
          {
            text: "网络",
            isSelect: false
          },
          {
            text: "来电",
            isSelect: false
          }
        ],
        itemList_xqah: [{
            text: "福克斯",
            value: "1",
            isSelect: false
          },
          {
            text: "新一代福克斯",
            value: "1",
            isSelect: false
          },
          {
            text: "全新福特锐界",
            value: "1",
            isSelect: false
          },
          {
            text: "新蒙迪欧",
            value: "1",
            isSelect: false
          },
          {
            text: "全新福克斯三厢",
            value: "1",
            isSelect: false
          },
          {
            text: "新福睿斯",
            value: "1",
            isSelect: false
          },
          {
            text: "翼博",
            value: "1",
            isSelect: false
          },
          {
            text: "全新福克斯两厢",
            value: "1",
            isSelect: false
          },
          {
            text: "新福特翼虎",
            value: "1",
            isSelect: false
          },
          {
            text: "金牛座",
            value: "1",
            isSelect: false
          }
        ]
      };
    },
    methods: {
      formSubmit: function(e) {
        console.log(
          "form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value)
        );
        //   //定义表单规则
        //   var rule = [
        //     {
        //       name: "nickname",
        //       checkType: "string",
        //       checkRule: "1,3",
        //       errorMsg: "姓名应为1-3个字符"
        //     },
        //     {
        //       name: "gender",
        //       checkType: "in",
        //       checkRule: "男,女",
        //       errorMsg: "请选择性别"
        //     },
        //     {
        //       name: "loves",
        //       checkType: "notnull",
        //       checkRule: "",
        //       errorMsg: "请选择爱好"
        //     }
        //   ];
        //   //进行表单检查
        //   var formData = e.detail.value;
        //   var checkRes = graceChecker.check(formData, rule);
        //   if (checkRes) {
        //     uni.showToast({ title: "验证通过!", icon: "none" });
        //   } else {
        //     uni.showToast({ title: graceChecker.error, icon: "none" });
        //   }
      },
      formReset: function(e) {
        console.log("清空数据");
      },
      selectRadioClick(item, list) {
        list.forEach(item => {
          item.isSelect = false;
        });
        item.isSelect = true;
      }
    }
  };
</script>

<style lang="scss">
  .form-demo-wrap {
    position: relative;
    background-color: #ffffff;
    padding: 20rpx;
  }

  .uni-btn-v {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .uni-form-item .title {
    padding: 10rpx 0;
  }

  .uni-input {
    padding: 6rpx 26rpx;
    background-color: #f4f4f4;
  }

  .checkbox-group {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

  }

  .uni-badge {
    font-size: 24rpx;
    margin: 10rpx 20rpx 10rpx 0;
  }
</style>
