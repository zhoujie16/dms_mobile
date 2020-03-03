<template>
  <view class="page-wrap">
    <view
      @click="echarts.onClick"
      :prop="option"
      :change:prop="echarts.updateEcharts"
      id="echarts"
      class="echarts"
    ></view>
  </view>
</template>
<script>
import { AjaxScrollData } from '@/api/test/index.js';

export default {
  props: ['type'],
  data() {
    var _self = this;
    return {
      option: {
        title: {
          text: _self.type,
          x: 'center',
          y: 'top',
          textStyle: {
            fontWeight: 'normal',
            color: '#1371F7',
            fontSize: 14
          }
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#1371F7'
            },
            
          },
          axisLine: {
            lineStyle: {
              color: '#17212E'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['wyl2', '于东京', 'hwls', 'WYS2', 'WYS1'],
          axisLabel: {
            margin: 2,
            show: true,
            rotate:45, 
            textStyle: {
              color: '#1371F7'
            },
            // formatter: function(value) {
            //   let valueTxt = '';
            //   if (value.length > 3) {
            //     valueTxt = value.substring(0, 4) + '...';
            //   } else {
            //     valueTxt = value;
            //   }
            //   return valueTxt;
            // }
          },
          axisLine: {
            lineStyle: {
              color: '#17212E'
            }
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            barWidth: 20
          }
        ],
        color: ['#2795FA']
      }
    };
  },
  onLoad() {},
  mounted() {},
  methods: {
    onViewClick(options) {
      console.log(options);
    }
  }
};
</script>

<script module="echarts" lang="renderjs">
let myChart
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
      console.log('echarts',echarts)
			myChart = echarts.init(document.getElementById('echarts'))
			// 观测更新的数据在 view 层可以直接访问到
			myChart.setOption(this.option)
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
		}
	}
}
</script>

<style>
.page-wrap {
  padding: 10px 0;
  background-color:$uni-m-color-white-pressed;
}

.echarts {
  width: 90vw;
  /* height: calc(100vh - 20px); */
  height: 60vh;
}
</style>
