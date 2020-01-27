<template>
  <MPage ref="MPage">
    <DocCell @click.native="test"></DocCell>
    <DocCell @click.native="test2"></DocCell>
  </MPage>
</template>

<script>
  import DocCell from './components/doc-cell.vue'
  
export default {
  components: {
    DocCell
  },
  data() {
    return {};
  },
  methods: {
    async test() {
      this.$util.openLocalWeb({
        url:'/hybrid/html/index.html#/pdf-reader?pdf=default'
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
