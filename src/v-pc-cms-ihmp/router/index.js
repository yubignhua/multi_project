import Vue from 'vue'
import Router from 'vue-router'

// 两套模板
import Layout from '../pages/layout/layout'
// import contentTwoColumn from '@/v_pc_cms_ihmp/components/container/two_column'

// 懒加载部分
// 不需要登录部分
// const home = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/home')), 'home') // 首页
const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login') // 登陆
// const register = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/register')), 'register') // 注册
// const agreement = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/agreement')), 'agreement') // 协议
//
// // 需要登录部分
// const dashBoard = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/dash_board')), 'dashBoard') // 仪表盘
//
// const groupList = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/service_rule/group_list.vue')), 'groupList') // 分组列表
// const groupRedact = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/service_rule/group_redact.vue')), 'groupRedact') // 分组新增／编辑
//
// const staffList = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/staff_manage/staff_list.vue')), 'staffList') // 人员列表
// const staffRedact = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/staff_manage/staff_redact.vue')), 'staffRedact') // 人员新增／编辑
//
// const rechargeList = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/finance_manage/recharge_list')), 'rechargeList') // 企业充值、提现记录列表
// const consumeList = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/finance_manage/consume_list')), 'consumeList') // 个人消费记录列表
// const invoiceList = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/finance_manage/invoice_list')), 'invoiceList') // 开票记录列表
// const invoiceAdd = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/finance_manage/invoice_add')), 'invoiceAdd') // 开票新增
// const invoiceInfoRedact = r => require.ensure([], () => r(require('@/v_pc_cms_ihmp/pages/finance_manage/invoice_info_redact')), 'invoiceInfoRedact') // 开票基本信息新增／编辑



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/v_pc_cms_ihmp/',
  routes: [
    {path: '/', redirect: '/public/home'},
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        // 新增页面增加此处配置
        // {
        //   path: 'home',
        //   name: 'home',
        //   component: home,
        //   meta: {
        //     useOwnFooter: true, // 使用自己的底部
        //     hideShadow: true
        //   }
        // },
        
        
      ]
    },
    
  ]
})
