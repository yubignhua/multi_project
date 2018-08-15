<template>
    <div class="cy-container clearfix">
      <div class="sidebar-wrap">
        <cy-sidebar></cy-sidebar>
      </div>
      <div class="content-wrap" v-loading="pageLoading">
        <cy-crumbs></cy-crumbs>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import cySidebar from '../sidebar/index'
import cyCrumbs from '../crumbs/index'
import {mapState} from 'vuex'
export default {
  components: {
    cySidebar,
    cyCrumbs
  },
  computed: {
    ...mapState([
      'pageLoading'
    ])
  }
}
</script>

<style lang='scss' scoped>
  .cy-container{
    margin-top: 40px;
  }
  .sidebar-wrap{
    float:left;
    margin-right: 30px;
  }
  .content-wrap{
    overflow: hidden;
    padding-bottom: 60px;
  }
</style>
