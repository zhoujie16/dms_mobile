<template>
  <!-- 车辆外观故障点 -->
  <view class="vehicle-fact-point-panel-wrap">
    <scroll-view :style="{ height: scrollHeight }" scroll-y="true">
      <view class="vehicle-fact-point-panel">
        <view class="vfpp-inner">
          <image
            :id="imgId"
            class="vfpp-img"
            :style="{
              width: partItem.IMAGE_STYLE.WIDTH + 'px',
              heigth: partItem.IMAGE_STYLE.HEIGHT + 'px'
            }"
            @click="vfppImgHandleClick"
            :src="partItem.SRC"
            mode="widthFix"
          >
            <FailPoint
              v-for="(point, i) in filterPoints"
              :num="point.num"
              :key="i"
              :x="point.x"
              :y="point.y"
            ></FailPoint>
          </image>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import FailPoint from './fail-point.vue';
import ScrollIssue from './../scroll-issue.vue';

export default {
  components: {
    FailPoint,
    ScrollIssue
  },
  created() {
    this.scrollHeight = uni.getSystemInfoSync().windowHeight - 80 + 'px';
  },
  mounted() {
    console.log('this.partItem', this.partItem);
    console.log('this.points', this.points);
  },
  props: {
    partItem: {
      type: Object
    },
    points: {
      type: Array
    }
  },
  computed: {
    filterPoints() {
      return this.points.filter(x => x.position === this.partItem.POSITION);
    }
  },
  data() {
    return {
      // 随机id
      imgId:
        'img_' +
        Math.random()
          .toString(36)
          .substr(2)
    };
  },
  methods: {
    async vfppImgHandleClick(e) {
      const position = this.partItem.POSITION;
      const [err, point] = await this.createPoint({ position, x: e.detail.x, y: e.detail.y });
      if (err) {
        console.log(err);
        return;
      }
      console.log('生成一条故障点记录', JSON.stringify(point, null, 1));
      // this.points.push(point);
      this.$emit('addPoint', point);
    },
    createPoint({ position, x, y }) {
      return new Promise(resolve => {
        uni
          .createSelectorQuery()
          .in(this)
          .select(`#${this.imgId}`)
          .boundingClientRect(data => {
            console.log('点击坐标', { x, y });
            console.log('boundingClientRect', { left: data.left, top: data.top });
            const { AXIS } = this.partItem;
            const _x = x - data.left;
            const _y = y - data.top;
            const part = AXIS.find(item => {
              return _x > item.X1 && _x < item.X2 && _y > item.Y1 && _y < item.Y2;
            });
            console.log('计算后坐标', { _x, _y });
            console.log('part', part);
            if (!part) {
              resolve(['点击的位置无法识别']);
              return;
            }
            const point = {
              num: this.points.length ? this.points[0].num + 1 : 1,
              position, // 位置: TOP LEFT ...
              id: part.ID, // id: 9010 9011 ...
              name: part.NAME, // 部位名称: 前保险杠 发动机盖子
              x: _x, // 坐标 X
              y: _y, // 坐标 Y
              photoList: [], // 故障图片
              issueType: '', // 损伤情况
              remark: '' // 故障描述
            };
            resolve([null, point]);
          })
          .exec();
      });
    }
  }
};
</script>

<style lang="scss">
.vehicle-fact-point-panel {
  width: 100%;
  height: 400rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  .vfpp-inner {
    position: relative;

    .vfpp-img {
      position: relative;
    }
  }
}
</style>
