import Vue from 'vue'

let utils = {
  formatPrice (price) {
    return Number.parseFloat(price).toFixed(2)
  },
  formatDate (date) {
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 + '').padStart(2, '0')
    let day = ('' + date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
}
Vue.prototype.$utils = utils

export default {}
