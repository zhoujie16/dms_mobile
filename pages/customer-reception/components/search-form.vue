<template>
  <view>
    <view class="form-demo-wrap" @touchmove.prevent>
      <MCheckbox
        label="销售顾问"
        v-model="xsgw"
        :itemList="itemList_xsgw"
        single
      ></MCheckbox>
      <MInput v-model="name" label="客户姓名"></MInput>
      <MInput label="客户手机"></MInput>
      <MDatePicker label="时间范围"></MDatePicker>
      <MCheckbox
        label="性别"
        v-model="sex"
        :itemList="itemList_sex"
        single
      ></MCheckbox>
      <MInput label="车架号"></MInput>
      <MCheckbox
        label="客户来源"
        v-model="khly"
        :itemList="itemList_khly"
        single
      ></MCheckbox>
      <MCheckbox
        label="意向车型(多选)"
        v-model="xqah"
        :itemList="itemList_xqah"
      ></MCheckbox>
      <view class="btn-v">
        <button @click="formSubmit" type="primary" class="submit-btn">
          查询
        </button>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      name: "aa",
      xsgw: [],
      itemList_xsgw: [
        {
          text: "顾问1",
          value: 1
        },
        {
          text: "顾问2",
          value: 2
        },
        {
          text: "顾问3",
          value: 3
        },
        {
          text: "顾问4",
          value: 4
        },
        {
          text: "顾问5",
          value: 5
        },
        {
          text: "顾问6",
          value: 6
        },
        {
          text: "顾问7",
          value: 7
        },
        {
          text: "顾问8",
          value: 8
        },
        {
          text: "顾问9",
          value: 9
        },
        {
          text: "顾问10",
          value: 10
        }
      ],
      sex: [1],
      itemList_sex: [
        {
          text: "先生",
          value: 1
        },
        {
          text: "女士",
          value: 2
        }
      ],
      khly: [],
      itemList_khly: [
        {
          text: "到店",
          value: 1
        },
        {
          text: "车展",
          value: 2
        },
        {
          text: "保客再购",
          value: 3
        },
        {
          text: "亲友介绍",
          value: 4
        },
        {
          text: "其他",
          value: 5
        },
        {
          text: "网络",
          value: 6
        },
        {
          text: "来电",
          value: 7
        }
      ],
      xqah: [],
      itemList_xqah: [
        {
          text: "福克斯",
          value: "1"
        },
        {
          text: "新一代福克斯",
          value: "2"
        },
        {
          text: "全新福特锐界",
          value: "3"
        },
        {
          text: "新蒙迪欧",
          value: "4"
        },
        {
          text: "全新福克斯三厢",
          value: "5"
        },
        {
          text: "新福睿斯",
          value: "6"
        },
        {
          text: "翼博",
          value: "7"
        },
        {
          text: "全新福克斯两厢",
          value: "8"
        },
        {
          text: "新福特翼虎",
          value: "9"
        },
        {
          text: "金牛座",
          value: "10"
        }
      ]
    };
  },
  methods: {
    formSubmit() {
      console.log("formSubmit");
      this.$emit("confirm");
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

<style>
.form-demo-wrap {
  position: relative;
  background-color: #ffffff;
  padding: 30rpx;
}
.btn-v {
  padding: 40rpx 0;
}
.submit-btn {
  width: 100%;
}
</style>
