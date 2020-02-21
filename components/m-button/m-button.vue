<template>
  <view class="container">
    <button @click="buttonHandler" :class="styles" :disabled="disabled">{{text}}</button>
  </view>
</template>

<script>
	export default {
    name: 'm-button',
    props: {
      // 按钮中显示的文字
      text: {
        type: String,
        default: '正常'
      },
      // 是否启用按钮
      disabled: {
        type: Boolean,
        default: false
      },
      // 按钮形状
      design: {
        type: String,
        default: 'fillet'
      },
      // 矢量图标
      // icon: String,
     // 内置按钮风格
      type: {
        type: String,
        default: 'primary'
      }
    },
		data() {
			return {
				
			}
		},
    computed: {

        /* 根据不同的props，展示按钮样式 */
        styles: {
            get() {
              console.log(this.type,'type')
                return ['m-button',this.design, this.type]
            }
        }
    },
		methods: {
      // 按钮点击时触发的事件，用于父组件中使用
			buttonHandler() {
        this.$emit('click')
      }
		}
	}
</script>

<style lang="scss">
  /* primary style */
  .primary {
      background-color: #1371F7;
      font-size: 18px;
      color: #FFFFFF;
      width: 296px;
      height: 40px;
      line-height: 40px;
      text-align: center;
  }
  .primary:active {
      background-color: #095ED8;
      color: #FFFFFF;
      // border: none;
  }
  .primary:hover{
      cursor: pointer;
      background-color: #095ED8;
  }
  .primary:disabled{
      background-color: #E1E1E1;
      color: #FFFFFF;
      border: none;
      cursor: not-allowed;
  }
  /* warning style*/
  .warning {
      color: #FFFFFF;
      background-color: #FE4766;
      font-size: 18px;
      width: 296px;
      border: none;
  }
  .warning:active {
      background-color: #ED3B59;
      color: #FFFFFF;
      border: none;
  }
  .warning:hover{
      cursor: pointer;
      background-color: #ED3B59;
  }
  .warning:disabled{
      background-color: #E1E1E1;
      color: #FFFFFF;
      border: none;
      cursor: not-allowed;
  }
  /*normal style*/
  .normal {
      width: 296px;
      border: 1px solid #2F84EB;
      background-color: #F5F5F5;
      font-size: 18px;
      color: #1371F7;
  }
  .normal:hover {
      cursor: pointer;
      background-color: #E2EFFF;
  }
  .normal:active {
      color: #000;
      border: 1px solid #2F84EB;
      background-color: #E2EFFF;
  }
  .normal:disabled {
      cursor: not-allowed;
      border: 1px solid #EFEFEF;
      background-color: #F5F5F5;
      color: #C3C3C3;
      opacity: 0.8;
  }
  /* 半圆 */
  .oval {
      border-radius: 50px;
  }
  /* 圆角 */
  .fillet {
      border-radius: 15px;
  }
  /* 圆 */
  .circle {
      /*宽高相等才能成为圆,但从视觉上来看，width比height多5px更为好看*/
      width: 50px;
      height: 45px;
      border-radius: 50%;
  }
</style>
