<template>
  <div class="footer">
    <div class="cy-container clearfix wrap">
      <div class="fl info hot-num">
        <div>合作洽谈</div>
        <div class="big">open@chunyu.me</div>
      </div>
      <ul class="fr link-list clearfix">
        <li class="link"><a href="https://www.chunyuyisheng.com/" target="_blank">春雨医生</a></li>
        <li class="link"><a href="https://www.chunyuyisheng.com/cooperation/open_api/" target="_blank">开放平台</a></li>
        <li class="link"><a href="https://www.chunyuyisheng.com/api/news/chunyu/list/" target="_blank">公司动态</a></li>
        <li class="link"><a href="https://www.chunyuyisheng.com/about_us/" target="_blank">关于春雨</a></li>
      </ul>
    </div>
    <div class="copy-right">
      <div class="cy-container clearfix">
        <div class="enterprise fl"><img src="../img/footer_logo.png" alt="春雨医生" title="春雨医生" class="footer-logo"></div>
        <div class="fr">Copyright © 2011-2018 北京春雨天下软件有限公司 All Rights Reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
  .footer{
    background: #202E4F;
    color: #fff;
    margin-bottom:-74px;
  }
  .wrap{
    height: 150px;
    padding-top: 60px;
    box-sizing: border-box;
    font-size: 16px;
  }
  .info{
    padding-left: 72px;
    line-height: 26px;
    .big{
      font-size: 24px;
    }
  }
  .hot-num{
    background:url('../img/email.png') top left no-repeat;
    background-size:40px 40px ;
  }
  .link{
    float: left;
    margin-top: 30px;
    margin-left: 60px;
    a{
      color: #d7d7d7;
    }
  }
  .copy-right{
    border-top: 1px solid #2B395C;
    height:69px ;
    line-height: 69px;
    color: #9b9b9b;
    .fr{
      font-size: 12px;
    }
    .footer-logo{
      width: 94px;
      height: 23px;
      display: block;
      margin-top: 23px;
    }
  }
</style>
