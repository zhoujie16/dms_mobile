<template>
  <MPage ref="MPage">
    <view class="menu-wrap">
      <uni-grid :column="3">
        <uni-grid-item v-for="(item,index) in list" :key="index">
          <DocCell @click.native="test" :item="item"></DocCell>
        </uni-grid-item>
      </uni-grid>
    </view>
  </MPage>
</template>

<script>
  import DocCell from './components/doc-cell.vue';
export default {
  components: {
    DocCell
    // DocDemo
  },
  data() {
    return {
      list: [
        {
          image: '/static/demo/icon_doc.png',
          text: '附件手册'
        },
        {
          image: '/static/demo/icon_doc.png',
          text: 'SERVISE2系统经销商操作系统'
        },
        {
          image: '/static/demo/icon_doc.png',
          text: '微客服认证介绍'
        },
        {
          image: '/static/demo/icon_doc.png',
          text: '11月-12月零件促销政策'
        },
        {
          image: '/static/demo/icon_doc.png',
          text: '服务活动手册'
        },
        {
          image: '/static/demo/icon_doc.png',
          text: '精品手册'
        }
      ]
    };
  },
  methods: {
    async test() {
      uni.navigateTo({
        url:'/pages/services-tools/components/doc-demo'
        // url:'/hybrid/html/index.html#/pdf-reader?pdf=default'
      }) 
      // this.$util.openLocalWeb({
      //   url: '/hybrid/html/index.html#/about'
      // });
    },
    async test2(){
      this.$util.openLocalWeb({
        url:'/hybrid/html/index.html#/pdf-reader?pdf=demo'
      })
    }
  }
};
</script>

<style>
</style>
