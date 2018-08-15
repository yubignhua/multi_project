// 登录权限控制
import store from '@/v-pc-open-platform/store'
import router from '@/v-pc-open-platform/router'
import commonReq from '@/v-pc-open-platform/components/common_req'
import cookie from 'browser-cookies'

let filters = ['manage'] // 需要校验过滤的路径

router.beforeEach(async (to, from, next) => {
  let path = to.path.split('/')[1]
  let hasLogin = store.state.loginInfo.hasLogin
  if (filters.includes(path)) { // 不需要登录的直接放行
    if (!hasLogin) { // store判断
      let logininfo = JSON.parse(cookie.get('CYUser')) || {}
      if (!logininfo.hasLogin) { // cookie判断
        let res = await commonReq.getUserInfo()
        if (res.success && res.data && res.data.name) { // 接口判断
          let data = {
            hasLogin: true,
            userName: res.data.name
          }
          store.commit('doLogin', data)
          cookie.set('CYUser', JSON.stringify(data))
          next()
        } else {
          next({name: 'login'})
        }
      } else {
        next()
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

// loading状态更改
router.afterEach((to, from, next) => {
//  store.commit('setPageLoading', true)
})

export default {}
