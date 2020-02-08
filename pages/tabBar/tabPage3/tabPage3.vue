<template>
  <!-- 报表 -->
  <view class="page-warp">
		<SwiperTab :height="swiperTabHeight" :tabs="tabs" :curIndex="curIndex" @change="changeTab">
		  <swiper class="swiper-wrap" :current="curIndex" @change="swiperChange">
		    <!--昨日 -->
		    <swiper-item>
		      <scroll-view class="swiper-scroll-wrap" scroll-y="true">
		       <ReportPage :reportData="fetchParams_0"></ReportPage>
		      </scroll-view>
		    </swiper-item>
        <!-- 本月 -->
		    <swiper-item>
		      <scroll-view class="swiper-scroll-wrap" scroll-y="true">
		       <ReportPage :reportData="fetchParams_1"></ReportPage>
		      </scroll-view>
		    </swiper-item>
		  </swiper>
		</SwiperTab>
		</view>
</template>

<script>
import { AjaxScrollData } from '@/api/test/index.js';
import ReportPage from './components/report-page.vue';
export default {
  components: {
		ReportPage
  },
  data() {
    this.swiperTabHeight = uni.getSystemInfoSync().windowHeight - 90 + 'px';
    return {
      tabs: ['昨日', '本月'],
      curIndex: 0, // 当前tab的下标
      fetchApi: AjaxScrollData,
      fetchParams_0: {
        flag: 'yesterday',
        factoryCount: 8,
        factoryText: '昨日进厂台次',
        settleCount: 0,
        settleText: '昨日结算台次',
        machineCount: 0,
        machineText: '昨日机修台次',
        BPEXCount: 0,
        BPEXText: '昨日钣喷台次',
        maintenanceCount: 0,
        maintenanceText: '昨日保养台次',
        incomeText: '昨日收入',
        incomeMoney: 0,
        manHourText: '昨日工时收入',
        manHourMoney: 0,
        partText: '昨日零件收入',
        partMoney: 0,
        flowText: '昨日快流件收入',
        flowMoney: 0
      },
      fetchParams_1: {
        flag: 'month',
        factoryCount: 9,
        factoryText: '本月进厂台次',
        settleCount: 0,
        settleText: '本月结算台次',
        machineCount: 0,
        machineText: '本月机修台次',
        BPEXCount: 0,
        BPEXText: '本月钣喷台次',
        maintenanceCount: 0,
        maintenanceText: '本月保养台次',
        incomeText: '本月收入',
        incomeMoney: 0,
        manHourText: '本月工时收入',
        manHourMoney: 0,
        partText: '本月零件收入',
        partMoney: 0,
        flowText: '本月快流件收入',
        flowMoney: 0
      }
    };
  },
  methods: {
		// 轮播菜单
		swiperChange(e) {
		  this.curIndex = e.detail.current;
		},
		// 切换菜单
		changeTab(i) {
		  this.curIndex = i;
		}
	}
};
</script>

<style lang="scss">
  .swiper-wrap {
    background-color: $uni-bg-color-page;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: initial;
  }
  .swiper-scroll-wrap{
    height: 100%;
  }

</style>
