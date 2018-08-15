<template>
  <div class="home-wrap">
    <div class="carousel-wrap">

      <el-carousel  height="550px" v-if="bannerList.length > 1">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <a class="banner-link"
             :class="item.url?'':'cursor'"
             :href="item.url?item.url:'javascript:void(0);'"
             target="_blank"
             :style="getBannerStyle(item)"></a>
        </el-carousel-item>
      </el-carousel>

      <a class="banner-link"
         :class="bannerList[0].url?'':'cursor'"
         v-if="bannerList.length === 1"
         :href="bannerList[0].url?bannerList[0].url:'javascript:void(0);'"
         target="_blank"
         :style="getBannerStyle(bannerList[0])">
      </a>
    </div>

    <div class="floor" id="1f">
      <div class="text-desc-wrap">
        <h2 class="title">真实，快速响应健康诉求</h2>
        <div class="desc">
          <p>图文、语音、电话等多种方式进行健康咨询</p>
          <p>公立医院医生提供专业问诊服务</p>
          <p>首次响应时间3分钟</p>
        </div>
        <ul class="advantage-list clearfix">
          <li class="advantage-item">
            <div class="a-item-bg bg1"></div>
            <div><em>50</em>万</div>
            <div>真实医生</div>
          </li>
          <li class="advantage-item">
            <div class="a-item-bg bg2"></div>
            <div><em>3</em>分钟</div>
            <div>快速响应</div>
          </li>
          <li class="advantage-item">
            <div class="a-item-bg bg3"></div>
            <div><em>97</em>%</div>
            <div>用户满意度</div>
          </li>
        </ul>
      </div>
      <div class="img-desc-wrap left"></div>
    </div>

    <div class="floor floor-revert">
      <div class="text-desc-wrap">
        <h2 class="title">体系完善，一站式服务平台</h2>
        <div class="desc">
          <p>员工使用，企业开票，无需报销</p>
          <p>注重保护隐私，个人信息不会泄露</p>
          <p>企业加入门槛低，员工额度可控</p>
        </div>
        <ul class="advantage-list clearfix">
          <li class="advantage-item">
            <div class="a-item-bg bg6"></div>
            <div>专属客服体系</div>
          </li>
          <li class="advantage-item ">
            <div class="a-item-bg bg5"></div>
            <div>无需报销</div>
          </li>
          <li class="advantage-item ">
            <div class="a-item-bg bg4"></div>
            <div>隐私保护</div>
          </li>
        </ul>
      </div>
      <div class="img-desc-wrap right"></div>
    </div>

    <div class="floor">
      <home-superiorty></home-superiorty>
    </div>

    <div class="floor" style="height:620px">
      <div class="text-desc-wrap">
        <h2 class="title">轻松管理，轻松使用</h2>
        <div class="desc">
          <p>人员、服务、财务信息，尽在掌握</p>
          <p>使用微信小程序承载，方便快捷</p>
        </div>
        <div class="identity-wrap clearfix">
          <div class="identity-compute fl enterprise"></div>
          <div class="fl">
            <h3 class="i-title">我是管理者</h3>
            <p class="i-desc">登录春雨医生企业版官网，可体验全面的管理功能，包括管理企业员工、设置服务规则、查看订单记录、财务管理、数据分析等。</p>
          </div>
        </div>
        <div class="identity-wrap clearfix">
          <div class="identity-compute fl staff"></div>
          <div class="fl">
            <h3 class="i-title">我是员工</h3>
            <p class="i-desc i-desc-mid">无需安装，微信扫一扫，即可进行健康咨询。</p>
          </div>
          <img class="fr sm-app" src="./img/sm_app.png" title="春雨医生企业开放平台小程序"/>
        </div>
      </div>
      <div class="img-desc-wrap useful"></div>
    </div>

    <div class="join-wrap">
      <div class="join-title">协助您的企业投资员工健康</div>
      <div class="join-btn-wrap">
        <router-link :to="{name:'register'}">立即入驻</router-link>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeFooter from './components/footer'
import homeSuperiorty from './components/superiorty'

export default {
  created () {
    this.getBannerList()
  },
  mounted () {
  },
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    homeFooter,
    homeSuperiorty
  },
  methods: {
    getBannerList () {
      this.$http.get('/cooperation/enterprise/admin/get_banner_info/')
        .then(res => {
          if (res.success) this.bannerList = res.data || []
        })
        .catch(e => {
          console.log(e)
        })
    },
    getBannerStyle (obj) {
      return {
        background: `url(${obj.image}) center center no-repeat`,
        'background-size': '1920px 550px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-wrap{
    background: #fff;
    font-weight: 300;
  }
  .carousel-wrap{
    height: 500px;
    margin-bottom: 54px;
    .banner-link{
      display: block;
      width: 100%;
      height: 100%;
      &.cursor{
        cursor: default;
      }
    }
  }
  .floor{
    position: relative;
    margin: 0 auto 120px;
    width: 1170px;
    background: #fff;
    .text-desc-wrap{
      height: 500px;
      width: 50%;
      .title{
        padding-top: 30px;
        font-size: 40px;
        color: #50505C;
        margin-bottom: 30px;
        font-weight: 500;
      }
      .desc{
        line-height: 32px;
        font-size: 16px;
        color: $regularColor;
        margin-bottom: 70px;
        font-weight: 300;
      }
      .advantage-item{
        float: left;
        width: 110px;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        color: $regularColor;
        &:not(:last-child){
          margin-right: 50px;
        }
        em{
          font-size: 26px;
          font-weight: 400;
          margin-right: 6px;
        }
        .a-item-bg{
          width: 100px;
          height: 90px;
          margin-bottom: 30px;
          box-shadow: 6px 4px 22px 0 #f5f8ff;
          border-radius: 12px;
          &.bg1{
            background: url('./img/item1.png') top left no-repeat;
            background-size:100px auto;
          }
          &.bg2{
            background: url('./img/item2.png') top left no-repeat;
            background-size:100px auto;
          }
          &.bg3{
            background: url('./img/item3.png') top left no-repeat;
            background-size:100px auto;
          }
          &.bg4{
            background: url('./img/item4.png') top left no-repeat;
            background-size:100px auto;
          }
          &.bg5{
            background: url('./img/item5.png') top left no-repeat;
            background-size:100px auto;
          }
          &.bg6{
            background: url('./img/item6.png') top left no-repeat;
            background-size:100px auto;
          }
        }
      }
    }
    .img-desc-wrap{
      position: absolute;
      top: 0;
      width: 1000px;
      &.left{
        height: 500px;
        left: 560px;
        background: #F5F8FD url('./img/bg1.png') top left no-repeat;
        background-size:auto 100%;
      }
      &.right{
        height: 500px;
        right: 579px;
        background: #F5F8FD url('./img/bg2.png') top right no-repeat;
        background-size:auto 100%;
      }
      &.useful{
        height: 620px;
        left: 617px;
        background: #fff url('./img/bg3.png') top left no-repeat;
        background-size:auto 100%;
      }
    }
    &.floor-revert{
      .text-desc-wrap{
        height: 500px;
        margin-left: 50%;
        text-align: right;
        .advantage-item{
          margin-right: 0;
          margin-left:50px;
          float: right;
        }
      }
    }
  }
  .identity-wrap{
    margin-bottom: 15px;
    width: 560px;
    height: 150px;
    background: #F5F8FD;
    border-radius: 18px;
    padding:30px;
    box-sizing: border-box;
    .identity-compute{
      width: 80px;
      height: 80px;
      margin-right: 30px;
      &.staff{
        background: url('./img/phone.png') no-repeat;
        background-size: 100%;
      }
      &.enterprise{
        background: url('./img/computer.png') no-repeat;
        background-size: 100%;
      }
    }
    .i-title{
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 400;
      color: $regularColor;
    }
    .i-desc{
      line-height: 22px;
      font-size: 13px;
      color: $minorColor;
      width: 390px;
    }
    .i-desc-mid{
      width: 260px;
    }
  }
  .join-wrap{
    min-width: 1170px;
    height: 180px;
    padding-top: 30px;
    background:#5290F2 url('img/join_bg.png') center center no-repeat;
    background-size:1920px 180px ;
    box-sizing: border-box;
    text-align: center;
  }
  .join-title{
    font-size: 28px;
    color: #FFF;
  }
  .join-btn-wrap{
    a{
      margin-top: 43px;
      width: 152px;
      height: 48px;
      line-height: 48px;
      display: inline-block;
      font-size: 20px;
      color: #598AE9;
      font-weight: 400;
    }
  }
  .sm-app{
    position: relative;
    margin-top: -8px;
    width: 106px;
    height: 105px;
  }
</style>
