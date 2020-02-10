<template>
  <MPage ref="MPage">
    <view class="page-wrap">
      <NavDateRangePicker @change="dateRangeChange"></NavDateRangePicker>
      <view class="menu-wrap">
        <view class="uni-flex uni-row">
          <view class="flex-item" @click="detailUrl">
            <view
              @click="echarts.onClick"
              :prop="option"
              :change:prop="echarts.updateEcharts"
              id="echarts"
              class="echarts"
            ></view>
            <view class="wrap-text">预约率</view>
          </view>
          <view class="flex-item" @click="detailUrl">
            <view
              @click="echarts.onClick"
              :prop="option1"
              :change:prop="echarts.updateEcharts"
              id="echarts1"
              class="echarts"
            ></view>
            <view class="wrap-text">保养提醒率</view>
          </view>
        </view>
      <view class="uni-flex uni-row">
        <view class="flex-item" @click="detailUrl">
          <view
            @click="echarts.onClick"
            :prop="option2"
            :change:prop="echarts.updateEcharts"
            id="echarts2"
            class="echarts"
          ></view>
          <view class="wrap-text">准时完工率</view>
        </view>
        <view class="flex-item" @click="detailUrl">
          <view
            @click="echarts.onClick"
            :prop="option3"
            :change:prop="echarts.updateEcharts"
            id="echarts3"
            class="echarts"
          ></view>
          <view class="wrap-text">服务回访率</view>
        </view>
      </view>
        <view class="uni-flex uni-row">
          <view class="flex-item" @click="detailUrl">
            <view
              @click="echarts.onClick"
              :prop="option4"
              :change:prop="echarts.updateEcharts"
              id="echarts4"
              class="echarts"
            ></view>
            <view class="wrap-text">快保工单权重</view>
          </view>
          <view class="flex-item" @click="detailUrl">
            <view
              @click="echarts.onClick"
              :prop="option5"
              :change:prop="echarts.updateEcharts"
              id="echarts5"
              class="echarts"
            ></view>
            <view class="wrap-text">快保客户等待时间</view>
          </view>
        </view>
        <!-- <uni-grid :column="2" :showBorder="false" :highlight="true" @change="detailUrl">
          <uni-grid-item v-for="(item, index) in list" :key="index">
            <view class="wrap-text">{{ item.title }}</view>
          </uni-grid-item>
        </uni-grid> -->
      </view>
    </view>
  </MPage>
 
</template>
<script>
import uniGrid from '@/libs/uni-ui/uni-grid/uni-grid.vue';
import uniGridItem from '@/libs/uni-ui/uni-grid-item/uni-grid-item.vue';
export default {
  data() {
    return {
    
      option: {
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: false,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: 'item',
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#0088ff', '#ffffff'],
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            // name: '任务进度',
            type: 'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['80%', '88%'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 10,
                // 数据项名称
                // name: '',
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 12,
                    textStyle: {
                      color: '#fff'
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: '{b}\n{c}%'
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      },
      option1: {
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: true,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: 'item',
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#0088ff', '#ffffff'],
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            // name: '任务进度',
            type: 'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['80%', '88%'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                // name: '',
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 12,
                    textStyle: {
                      color: '#fff'
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: '{b}\n{c}%'
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      },
      option2: {
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: true,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: 'item',
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#0088ff', '#ffffff'],
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            // name: '任务进度',
            type: 'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['80%', '88%'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                // name: '',
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 12,
                    textStyle: {
                      color: '#fff'
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: '{b}\n{c}%'
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      },
      option3: {
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: true,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: 'item',
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#0088ff', '#ffffff'],
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            // name: '任务进度',
            type: 'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['80%', '88%'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                // name: '',
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 12,
                    textStyle: {
                      color: '#fff'
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: '{b}\n{c}%'
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      },
      option4: {
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: true,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: 'item',
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#0088ff', '#ffffff'],
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            // name: '任务进度',
            type: 'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['80%', '88%'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                // name: '',
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 12,
                    textStyle: {
                      color: '#fff'
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: '{b}\n{c}%'
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      },
      option5: {
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: true,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: 'item',
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#0088ff', '#ffffff'],
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            // name: '任务进度',
            type: 'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['80%', '88%'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                // name: '',
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 12,
                    textStyle: {
                      color: '#fff'
                    },
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: '{b}\n{c}%'
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      },
      
      
      };
  },
  onLoad() {},
  methods: {
    onViewClick(options) {
      console.log(options);
    },
    detailUrl() {
      uni.navigateTo({
        url: `/pages/qcReport/qcReport-detail`
      });
    }
  }
};
</script>

<script module="echarts" lang="renderjs">
let myChart,myChart1,myChart2,myChart3,myChart4,myChart5
export default {
	mounted() {
		if (typeof window.echarts === 'function') {
			this.initEcharts()
		} else {
			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			script.src = 'static/js/echarts.js'
			script.onload = this.initEcharts.bind(this)
			document.head.appendChild(script)
		}
	},
	methods: {
		initEcharts() {
      // console.log('echarts',echarts)
			myChart = echarts.init(document.getElementById('echarts'))
			// 观测更新的数据在 view 层可以直接访问到
			myChart.setOption(this.option)
      
      myChart1 = echarts.init(document.getElementById('echarts1'))
      // 观测更新的数据在 view 层可以直接访问到
      myChart1.setOption(this.option1)
      
      myChart2 = echarts.init(document.getElementById('echarts2'))
      // 观测更新的数据在 view 层可以直接访问到
      myChart2.setOption(this.option2)
      
      myChart3 = echarts.init(document.getElementById('echarts3'))
      // 观测更新的数据在 view 层可以直接访问到
      myChart3.setOption(this.option3)
      myChart4 = echarts.init(document.getElementById('echarts4'))
      // 观测更新的数据在 view 层可以直接访问到
      myChart4.setOption(this.option4)
      
      myChart5 = echarts.init(document.getElementById('echarts5'))
      // 观测更新的数据在 view 层可以直接访问到
      myChart5.setOption(this.option5)
		},
		updateEcharts(newValue, oldValue, ownerInstance, instance) {
			// 监听 service 层数据变更
			myChart.setOption(newValue)
		},
		onClick(event, ownerInstance) {
			// 调用 service 层的方法
			ownerInstance.callMethod('onViewClick', {
				test: 'test'
			})
		},

	}
}
</script>

<style lang="scss">
.page-wrap {
  height: 100vh;
  background-color: $uni-bg-color-page;

  .wrap-text {
    text-align: center;

    color: $uni-text-color-inverse;
  }
}
.flex-item {
  width: 50%;
  height: 310rpx;
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  // line-height: 310rpx;
  border-radius: 20rpx;
  // padding: 15px 0;
  margin: 30rpx;
  text-align: center;
}
.echarts {
  width: 30vw;
  margin: 0 auto;
  height: calc(20vh - 20px);
}
</style>
