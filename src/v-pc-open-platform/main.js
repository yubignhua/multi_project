import './assets/css/index.scss'
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import store from './store'

/* eslint-disable-next-line */
import {axios,utils,cookie,filters} from './assets/global'

import ElementUI from 'element-ui'

import App from './App'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$goBack = function () {
  window.history.length > 1 ? router.go(-1) : router.push('/')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
