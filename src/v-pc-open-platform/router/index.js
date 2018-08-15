import Vue from 'vue'
import Router from 'vue-router'

// 两套模板
import content from '@/v-pc-open-platform/components/container/index'
import contentTwoColumn from '@/v-pc-open-platform/components/container/two_column'

// 懒加载部分
// 不需要登录部分
const home = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/home')), 'home') // 首页
const login = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/login')), 'login') // 登陆
const register = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/register')), 'register') // 注册
const agreement = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/agreement')), 'agreement') // 协议

// 需要登录部分
const dashBoard = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/dash_board')), 'dashBoard') // 仪表盘

const groupList = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/service_rule/group_list.vue')), 'groupList') // 分组列表
const groupRedact = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/service_rule/group_redact.vue')), 'groupRedact') // 分组新增／编辑

const staffList = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/staff_manage/staff_list.vue')), 'staffList') // 人员列表
const staffRedact = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/staff_manage/staff_redact.vue')), 'staffRedact') // 人员新增／编辑

const rechargeList = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/finance_manage/recharge_list')), 'rechargeList') // 企业充值、提现记录列表
const consumeList = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/finance_manage/consume_list')), 'consumeList') // 个人消费记录列表
const invoiceList = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/finance_manage/invoice_list')), 'invoiceList') // 开票记录列表
const invoiceAdd = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/finance_manage/invoice_add')), 'invoiceAdd') // 开票新增
const invoiceInfoRedact = r => require.ensure([], () => r(require('@/v-pc-open-platform/pages/finance_manage/invoice_info_redact')), 'invoiceInfoRedact') // 开票基本信息新增／编辑

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: '/v_pc_open_platform/',
  routes: [
    {path: '/', redirect: '/public/home'},
    {
      path: '/public',
      component: content,
      children: [
        // 新增页面增加此处配置
        {
          path: 'home',
          name: 'home',
          component: home,
          meta: {
            useOwnFooter: true, // 使用自己的底部
            hideShadow: true
          }
        },
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        },
        {
          path: 'agreement',
          name: 'agreement',
          component: agreement
        }
      ]
    },
    {
      path: '/manage', // manage 需要先登录，直接访问重定向到登陆页
      component: contentTwoColumn,
      children: [
        // 两列布局的写在这下面
        // 仪表盘
        {
          path: 'dashBoard',
          name: 'dashBoard',
          component: dashBoard,
          meta: {
            breads: [] // [] = 没有面包屑
          }
        },
        // 服务规则
        {
          path: 'service_rule/group/list',
          name: 'groupList',
          component: groupList,
          meta: {
            breads: [
              'service_rule', // 一级面包屑
              'groupList' // 二级面包屑 ，需指定为某个router的name，因为根据name做跳转
            ]
          }
        },
        {
          path: 'service_rule/group/add',
          name: 'groupAdd',
          component: groupRedact,
          meta: {
            breads: [
              'service_rule',
              'groupList',
              'groupAdd' // 三级面包屑，最后一级代表当前页面，不做跳转
            ]
          }
        },
        {
          path: 'service_rule/group/edit',
          name: 'groupEdit',
          component: groupRedact,
          meta: {
            breads: [
              'service_rule',
              'groupList',
              'groupEdit'
            ]
          }
        },
        // 人员管理
        {
          path: 'staff_manage/staff/list',
          name: 'staffList',
          component: staffList,
          meta: {
            breads: [
              'staff_manage',
              'staffList'
            ]
          }
        },
        {
          path: 'staff_manage/staff/add',
          name: 'staffAdd',
          component: staffRedact,
          meta: {
            breads: [
              'staff_manage',
              'staffList',
              'staffAdd'
            ]
          }
        },
        {
          path: 'staff_manage/staff/edit',
          name: 'staffEdit',
          component: staffRedact,
          meta: {
            breads: [
              'staff_manage',
              'staffList',
              'staffEdit'
            ]
          }
        },
        // 财务管理
        {
          path: 'finance_manage/recharge/list',
          name: 'rechargeList',
          component: rechargeList,
          meta: {
            breads: [
              'finance_manage',
              'rechargeList'
            ]
          }
        },
        {
          path: 'finance_manage/recharge/remind',
          name: 'rechargeRemind',
          component: consumeList,
          meta: {
            breads: [
              'finance_manage',
              'rechargeList',
              'rechargeRemind'
            ]
          }
        },
        {
          path: 'finance_manage/consume/list',
          name: 'consumeList',
          component: consumeList,
          meta: {
            breads: [
              'finance_manage',
              'consumeList'
            ]
          }
        },
        {
          path: 'finance_manage/invoice/list',
          name: 'invoiceList',
          component: invoiceList,
          meta: {
            breads: [
              'finance_manage',
              'invoiceList'
            ]
          }
        },
        {
          path: 'finance_manage/invoice/add',
          name: 'invoiceAdd',
          component: invoiceAdd,
          meta: {
            breads: [
              'finance_manage',
              'invoiceList',
              'invoiceAdd'
            ]
          }
        },
        {
          path: 'finance_manage/invoice_info/edit',
          name: 'invoiceInfoEdit',
          component: invoiceInfoRedact,
          meta: {
            breads: [
              'finance_manage',
              'invoiceList',
              'invoiceInfoAdd'
            ]
          }
        },
        {
          path: 'finance_manage/invoice_info/add',
          name: 'invoiceInfoAdd',
          component: invoiceInfoRedact,
          meta: {
            breads: [
              'finance_manage',
              'invoiceList',
              'invoiceInfoAdd'
            ]
          }
        }
      ]
    }
  ]
})
