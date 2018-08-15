import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$http = axios

axios.defaults.withCredentials = true

axios.defaults.baseURL = process.env.BASE_URL || axios.defaults.baseURL
// axios.defaults.timeout = 3000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default {}
