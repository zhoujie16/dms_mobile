<template>
  <div class="page-wrap">
    <div id="test-demo"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "e-charts-demo",
  beforeMount() {
    window.document.title = "图表测试";
  },
  mounted() {
    console.log("echarts", echarts);
    this.testECharts();
  },
  data() {
    return {};
  },
  methods: {
    testECharts() {
      const myChart = echarts.init(document.getElementById("test-demo"));
      const option = {
        title: {
          text: "世界人口总量",
          subtext: "数据来自网络",
          textStyle: {
            color: "#ffffff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["2011年", "2012年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: "#ffffff"
            }
          }
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
          axisLine: {
            lineStyle: {
              color: "#ffffff"
            }
          }
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [182, 234, 290, 1049, 1317, 6302]
          },
          {
            name: "2012年",
            type: "bar",
            data: [193, 234, 310, 1215, 1341, 6818]
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="scss">
.page-wrap {
  padding: 10px 0;
  background-color: #2b4d86;
}
#test-demo {
  width: 100vw;
  height: calc(100vh - 20px);
}
</style>
