<template>
  <view class="qiun-charts"><canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas></view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import uCharts from '@/libs/uni-ui/u-charts/u-charts.js';
var _self;
var canvaColumn = null;

export default {
  props:['type'],
  data() {
    return {
      cWidth: '',
      cHeight: '',
      pixelRatio: 1,
      serverData: ''
    };
  },
  mounted() {
    console.log('进入页面');
    _self = this;
    this.cWidth = uni.upx2px(750);
    this.cHeight = uni.upx2px(500);
    this.getServerData();
  },
  methods: {
    getServerData() {
      _self.serverData = {
        categories: ['wyl2', '于东京', 'hwls', 'WYS2', 'WYS1', '赵兰'],
        series: [
          {
            name: _self.type,
            // data: [15, { value: 20, color: '#f04864' }, 45, 37, 43, 34]
            data: [1, 1, 2, 1, 1, 1]
          }
        ]
      };
      let Column = { categories: [], series: [] };
      //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
      Column.categories = _self.serverData.categories;
      Column.series = _self.serverData.series;
      _self.showColumn('canvasColumn', Column);
    },
    showColumn(canvasId, chartData) {
      canvaColumn = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: 'column',
        legend: { show: true },
        fontSize: 11,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: true,
        // rotate:true,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true
          // disabled:true
          // disableGrid:false,
        },

        yAxis: {
          type: 'grid',
          gridColor: '#CCC',
          gridType: 'dash',
          dashLength: 8,
          min:0,
          max:10,
          // disableGrid: true,
          // disableGrid: true
          // disabled:true
        },
        dataLabel: true,
        labelFontColor: '#FFFFFF',
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
    touchColumn(e) {
      canvaColumn.showToolTip(e, {
        format: function(item, category) {
          if (typeof item.data === 'object') {
            return category + ' ' + item.name + ':' + item.data.value;
          } else {
            return category + ' ' + item.name + ':' + item.data;
          }
        }
      });
    }
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
  width: 100%;
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
  // width: 750upx;
  height: 500upx;
  background-color: #ffffff;
}
.charts {
  // width: 750upx;
  height: 500upx;
  background-color: #ffffff;
}
</style>
