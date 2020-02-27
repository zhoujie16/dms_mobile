###  插件(https://ext.dcloud.net.cn/plugin?id=1024)


## key-board 模拟数字  车牌号  身份证

`组件参数API`
- type{Number|键盘类型 1-数字键盘 2-身份证键盘 3-车牌号  4-数字+字母（默认值为1）}
- safeAreaInsetBottom{Boolean | 是否设置安全区（默认为false）}
- disableDot{Boolean | 是否禁用小数点.，当键盘为数字键盘的时候有效（默认为false）}

`打开以及关闭键盘`
this.$refs.keyboard.open() //打开键盘
this.$refs.keyboard.close() //关闭键盘

# template
<template>
  <view>
      <button @tap="focus">车牌照</button>
      <keyBoard :disableDot="true" :type="keyboardType"  @input="inputVal" ref="keyboard"></keyBoard>
  </view>
</template>
# js
export default{
  data() {
      return {
        keyboardType: 3
      };
    },
    methods: {
      focus(){
        this.$refs.keyboard.open() //打开键盘
      },
      inputVal(val){
        //val 键盘返回的值
      }
    }
}

## m-license  车牌号应用的封装

`组件参数API`
- label{String|标题 （默认值为选择）}


# template
<template>
  <MLicense label="车牌号"></MLicense>
</template>
 
