<template>
  <MPage ref="MPage">
    <view class="menu-wrap">
      <uni-grid :column="3" :highlight="true">
        <uni-grid-item v-for="index in list" :key="index">
          <DocCell @click.native="test"></DocCell>
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
      list: [1,2,3,4,5,6,7,8,9]
    };
  },
  methods: {
    async test() {
      uni.navigateTo({
        url:'/pages/services-tools/components/doc-demo'
        // url:'/hybrid/html/index.html#/pdf-reader?pdf=default'
      }) 
    },
    async test2(){
      this.$util.openLocalWeb({
        url:'/hybrid/html/index.html#/pdf-reader?pdf=demo'
      })
    }
  }
};
</script>

<style></style>
