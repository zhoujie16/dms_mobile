<template>
  <view class="base-scroll-wrap" :style="{ heihgt: height }">
    <mescroll-uni
      class="mescroll-uni"
      :fixed="false"
      :height="height"
      @init="scrollInit"
      :down="downOption"
      @down="downCallback"
      :up="upOption"
      @up="upCallback"
    >
      <slot />
    </mescroll-uni>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    height: {
      type: [String, Number],
      default() {
        return uni.getSystemInfoSync().windowHeight + 'px';
      }
    },
    dataSource: {
      type: Array
    },
    fetchApi: {
      type: Function
    },
    fetchParams: {
      type: Object
    }
  },
  watch: {
    fetchParams() {
      console.log('watch fetchParams');
      if (this.mescroll) {
        this.mescroll.scrollTo(0);
        this.mescroll.triggerDownScroll();
      }
    }
  },
  data() {
    this.mescroll = null;
    return {
      // 列表数据
      dataList: [],
      // 下拉刷新的常用配置
      downOption: {
        use: true, // 是否启用下拉刷新; 默认true
        auto: false // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
      },
      // 上拉加载的常用配置
      upOption: {
        use: true, // 是否启用上拉加载; 默认true
        auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
        page: {
          num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 10 // 每页数据的数量,默认10
        },
        noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
        empty: {
          tip: '暂无相关数据'
        }
      }
    };
  },
  methods: {
    scrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    setDataList(arr) {
      this.dataList = arr; //追加新数据
      this.$emit('listChange', arr);
    },
    sleep(timeLen) {
      return new Promise(resolve => {
        setTimeout(resolve, timeLen);
      });
    },
    /** 下拉刷新的回调 */
    async downCallback(mescroll) {
      console.log('下拉刷新');
      await this.sleep(500);
      mescroll.resetUpScroll();
    },
    /** 上拉加载的回调 */
    async upCallback(mescroll) {
      let pageNum = mescroll.num; // 页码, 默认从1开始
      let pageSize = mescroll.size; // 页长, 默认每页10条
      console.log('上拉加载', {
        pageNum,
        pageSize
      });
      const res = await this.fetchData({
        pageNum,
        pageSize
      });
      const { curPageData, totalSize } = res;
      if (mescroll.num == 1) {
        //如果是第一页需手动置空列表
        this.dataList = [];
      }
      this.setDataList([...this.dataList, ...curPageData]);
      mescroll.endBySize(curPageData.length, totalSize);
    },
    // 请求数据
    async fetchData({ pageNum, pageSize }) {
      await this.sleep(500);
      const params = { ...this.fetchParams, pageNum, pageSize };
      const res = await this.fetchApi(params);
      if (!res) {
        console.log('baseScroll 请求数据失败');
        return;
      }
      const _res = {
        curPageData: res.data.list, // 新增的列表数据
        totalSize: res.data.toast // 总数据
      };
      return _res;
    }
  }
};
</script>

<style lang="scss"></style>
