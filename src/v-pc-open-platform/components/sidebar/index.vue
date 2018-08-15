<template>
    <ul class="sidebar-ul">
      <li class="sidebar-nav"
          :class="menu.iconClass"
          v-for="(menu,index) in menuList"
          :key="index">

        <div class="sidebar-item" v-if="!menu.routerName">{{ menu.text }}</div>
        <div class="sidebar-item" v-else :class="currentNav.length?'':'current'">
          <router-link :to="{ name : menu.routerName }">{{ menu.text }}</router-link>
        </div>

        <div class="sidebar-child-item"
          v-for="child in menu.children"
          :class="currentNav.includes(child.routerName)?'current':''"
          :key="child.routerName">
          <router-link :to="{ name : child.routerName }">{{ child.text }}</router-link>
        </div>
      </li>
    </ul>
</template>

<script>
let menuList = [
  {
    text: '仪表盘',
    iconClass: 'sidebar-nav-icon1',
    routerName: 'dashBoard',
    children: []
  },
  {
    text: '服务规则',
    iconClass: 'sidebar-nav-icon2',
    children: [
      {
        text: '分组管理',
        routerName: 'groupList'
      }
    ]
  },
  {
    text: '人员管理',
    iconClass: 'sidebar-nav-icon3',
    children: [
      {
        text: '员工列表',
        routerName: 'staffList'
      }
    ]
  },
  {
    text: '财务管理',
    iconClass: 'sidebar-nav-icon4',
    children: [
      {
        text: '充值对账',
        routerName: 'rechargeList'
      },
      {
        text: '使用记录',
        routerName: 'consumeList'
      },
      {
        text: '开票管理',
        routerName: 'invoiceList'
      }
    ]
  }
]

export default {
  data () {
    return {
      menuList
    }
  },
  computed: {
    currentNav () {
      return this.$route.meta.breads
    }
  }
}
</script>

<style lang='scss' scoped>
  .sidebar-ul{
    padding:20px 0;
    background: #fff;
  }
  .sidebar-nav{
    width: 240px;
    padding-left: 80px;
    box-sizing: border-box;
  }
  .sidebar-item{
    height: 48px;
    line-height: 48px;
    font-size:18px ;
    font-weight: 500;
    color: $mainColor;
  }
  .sidebar-child-item{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    color:#323232;
  }
  .sidebar-nav-icon1{
    background: url('./img/icon1.png') 44px 14px no-repeat;
    background-size:22px auto ;
  }
  .sidebar-nav-icon2{
    background: url('./img/icon2.png') 44px 14px no-repeat;
    background-size:22px auto ;
  }
  .sidebar-nav-icon3{
    background: url('./img/icon3.png') 44px 14px no-repeat;
    background-size:22px auto ;
  }
  .sidebar-nav-icon4{
    background: url('./img/icon4.png') 44px 15px no-repeat;
    background-size:22px auto ;
  }
  .current{
    a{
      color:$subjectColor
    }
  }
</style>
