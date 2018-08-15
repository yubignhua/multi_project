<template>
  <div id="app" v-cloak>
    <cy-header></cy-header>
    <div class="cy-wrap">
      <router-view></router-view>
    </div>
    <cy-footer></cy-footer>
  </div>
</template>

<script>
import cyHeader from './components/header'
import cyFooter from './components/footer'
import commonReq from './components/common_req'
import {mapMutations} from 'vuex'

export default {
  created () {
    this.getInfo()
  },
  name: 'App',
  components: {
    cyHeader,
    cyFooter
  },
  computed: {},
  methods: {
    async getInfo () {
      let userInfo = JSON.parse(this.$cookie.get('CYUser'))
      if (userInfo) {
        this.doLogin(userInfo)
      } else {
        let res = await commonReq.getUserInfo()
        if (res.success && res.data && res.data.name) { // 接口判断
          let data = {
            hasLogin: true,
            userName: res.data.name
          }
          this.doLogin(data)
          this.$cookie.set('CYUser', JSON.stringify(data))
        } else {
          console.log('未登录')
        }
      }
    },
    ...mapMutations([
      'doLogin'
    ])
  }
}
</script>

<style>
  #app {
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .cy-wrap {
    box-sizing: border-box;
    min-height: 100%;
    padding: 60px 0 74px;
    margin-bottom: -74px;
  }
  [v-cloak]{
    display: none;
  }
</style>
