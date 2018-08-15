<template>
  <div class="cy-footer-wrap" v-show="!useOwnFooter">
    <div class="cy-footer cy-container">
      {{ copyright }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      copyright: 'Copyright © 2011-2017 北京春雨天下软件有限公司 All Rights Reserved'
    }
  },
  computed: {
    useOwnFooter () {
      return this.$route.meta.useOwnFooter
    }
  }
}
</script>

<style lang='scss' scoped>
  .cy-footer-wrap{
    width: 100%;
    background:  #3B414E;
  }
  .cy-footer{
    height: 74px;
    line-height: 74px;
    text-align: center;
    color:#9B9B9B;
    font-size:12px
  }
</style>
