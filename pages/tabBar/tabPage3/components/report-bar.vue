<template>
  <view><canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas></view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import uCharts from '@/libs/u-chart/u-charts.js';
var canvaColumn = null;
export default {
  data() {
    return {
      cWidth: '',
      cHeight: '',
      pixelRatio: 1,
      serverData: ''
    };
  },
  mounted() {
    console.log("进入柱状图页面")
    _self = this;
    this.cWidth = uni.upx2px(750);
    this.cHeight = uni.upx2px(500);
    this.getServerData();
  },
  methods: {
    getServerData() {
      let Column={categories:[],series:[]};
      let chartData = {
        categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
        series: [
          {
            name: '成交量1',
            data: [15, { value: 20, color: '#f04864' }, 45, 37, 43, 34]
          },
          {
            name: '成交量2',
            data: [30, { value: 40, color: '#facc14' }, 25, 14, 34, 18]
          }
        ]
      };
      _self.serverData = chartData;
      Column.categories = chartData.categories;
      Column.series = chartData.series;
      _self.showColumn('canvasColumn', Column);
    },
    showColumn(canvasId, chartData) {
      console.log(chartData,'---chartData')
      canvaColumn = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: 'column',
        legend: { show: true },
        fontSize: 11,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: true,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          //disabled:true
        },
        dataLabel: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          column: {
            type: 'group',
            width: (_self.cWidth * _self.pixelRatio * 0.45) / chartData.categories.length
          }
        }
      });
    },
    touchColumn(e) {}
  }
};
</script>

<style lang="scss">
page {
  background: #f2f2f2;
  width: 750upx;
  overflow-x: hidden;
}
.qiun-padding {
  padding: 2%;
  width: 96%;
}
.qiun-wrap {
  display: flex;
  flex-wrap: wrap;
}
.qiun-rows {
  display: flex;
  flex-direction: row !important;
}
.qiun-columns {
  display: flex;
  flex-direction: column !important;
}
.qiun-common-mt {
  margin-top: 10upx;
}
.qiun-bg-white {
  background: #ffffff;
}
.qiun-title-bar {
  width: 96%;
  padding: 10upx 2%;
  flex-wrap: nowrap;
}
.qiun-title-dot-light {
  border-left: 10upx solid #0ea391;
  padding-left: 10upx;
  font-size: 32upx;
  color: #000000;
}
.qiun-charts {
  width: 750upx;
  height: 500upx;
  background-color: #ffffff;
}
.charts {
  width: 750upx;
  height: 500upx;
  background-color: #ffffff;
}
</style>
