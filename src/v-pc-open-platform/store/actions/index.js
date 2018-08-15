import axios from 'axios'
export default {
  getOverallInfo ({commit, state}) {
    return axios.get('/cooperation/enterprise/admin/get_overall_info/')
      .then(res => {
        if (res.success && res.data) {
          commit('setOverallInfo', res.data)
        }
        return res.data || state.overallInfo
      })
  },
  getFinanceInfo ({commit, state}) {
    return axios.get('/cooperation/enterprise/admin/get_finance_info/')
      .then(res => {
        if (res.success && res.data) {
          res.data.hasLoad = true // 判断是否请求过
          commit('setFinanceInfo', res.data)
        }
        return res.data || state.financeInfo
      })
  }
}
