<template>
  <div class="cy-header" :class="hideShadow ?'hide-shadow':''" :data-top="autoScrollTop" :data-routename="routerName">
    <div class="cy-container clearfix">
      <div class="web-info-wrap fl">
        <router-link :to="{name:'home'}" class="clearfix">
        <div class="company fl"><img src="./img/logo.png" alt="春雨医生" title="春雨医生" class="cy-logo"></div>
        <div class="web-nature fl">企业版</div>
        </router-link>
      </div>
      <div class="fr">
        <template v-if="!loginInfo.hasLogin" >
          <router-link :to="{name:'register'}" class="mr20">
            <el-button type="primary">立即入驻</el-button>
          </router-link>
          <router-link :to="{name:'login'}">
            <el-button type="primary" plain class="el-button-normal">登 录</el-button>
          </router-link>
        </template>
        <div class="login-info-wrap"
          v-else>
          欢迎您!
          <span class="user-name">{{ loginInfo.userName }}</span>
          <a @click="doExitLogin" href="javascript:void(0);" class="exit-login">退出</a>
        </div>
      </div>
      <ul class="header-nav-wrap fr clearfix">
        <li class="header-nav fl">
          <router-link :to="{name:'home'}" :class="highlight===0?'header-nav-current':''"><span @click="doScroll(0)">首页</span></router-link>
        </li>
        <li class="header-nav fl">
          <router-link
            :to="{name:'home',query:{top:500}}"
            :class="highlight===1?'header-nav-current':''">
            <span @click="doScroll(500)">平台优势</span>
          </router-link>
        </li>
        <li class="header-nav fl">
          <router-link :to="{name:'dashBoard'}" :class="highlight===2?'header-nav-current':''"><span>管理平台</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created () {
    // this.changeNavHighLight()
    window.addEventListener('scroll', () => {
      this.changeNavHighLight()
    }, false)
  },
  data () {
    return {
      highlight: 0,
      targetTop: 500
    }
  },
  computed: {
    ...mapState([
      'loginInfo'
    ]),
    hideShadow () {
      return this.$route.meta.hideShadow
    },
    /**
     * 监听路由的变化，路由改变时切换高亮
     * @returns {string}
     */
    routerName () {
      this.changeNavHighLight()
      return this.$route.name
    },
    /**
     * 监听高度变化，高度变化时切换高亮
     * @returns {boolean}
     */
    autoScrollTop () {
      let top = this.$route.query.top || 0
      this.doScroll(top)
      return false
    }
  },
  methods: {
    doScroll (top) {
      setTimeout(() => {
        window.scrollTo(0, top)
      }, 20)
    },
    changeNavHighLight () {
      let routeName = this.$route.name
      if (routeName === 'home') {
        this.highlight = 0
        if (window.scrollY >= this.targetTop) {
          this.highlight = 1
        }
      } else {
        if (this.$route.path.split('/')[1] === 'manage') {
          this.highlight = 2
        } else {
          this.highlight = 3
        }
      }
    },
    doExitLogin () {
      this.$cookie.set('CYUser', '', {
        expires: -1
      })
      let href = location.href
      location.href = `/api/accounts/logout/?next=${href}`
    }
  }
}
</script>

<style lang='scss' scoped>
  .cy-header{
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 60px;
    line-height: 60px;
    color:#333;
    font-size: 16px;
    font-weight: 400;
    background: #FFFFFF;
    box-shadow: 0 8px 16px 0 #E5ECF6;
    border-bottom: 1px solid #f3f3f3;
  }
  .company{
    width: 124px;
    height: 60px;
  }
  .cy-logo{
    display: block;
    margin-top: 17px;
    height: 21px;
    line-height: 30px;
    border-right: 1px solid $mainColor;
    padding-right: 8px;
  }
  .hide-shadow{
    box-shadow: none;
  }
  .web-nature{
    font-size: 18px;
    margin-left: 8px;
  }
  .web-info-wrap{
    width: 240px;
  }
  .header-nav-wrap{
    margin-right: 70px;
  }
  .header-nav{
    a{
      display: block;
    }
    span{
      padding: 0 30px;
      display: block;
    }
  }
  .login-info-wrap{
    font-size: 14px;
  }
  .user-name{
    position: relative;
    margin: 0 10px 0 6px;
    font-size: 16px;
    &:after{
      content: '';
      width: 1px;
      height: 12px;
      position: absolute;
      top: 4px;
      right: -7px;
      background: #333;
    }
  }
  .header-nav-current{
    background: #F2F6FF;
  }
  .exit-login{
    &:hover{
      color: $subjectColor;
    }
  }
</style>
