export default {
  /**
   * 更改页面的loading状态
   * @param state
   * @param status true | false
   */
  setPageLoading (state, status) {
    state.pageLoading = status
  },
  /**
   * 缓存登录信息
   * @param state
   * @param loginInfo
   */
  doLogin (state, loginInfo) {
    state.loginInfo = loginInfo
  },
  /**
   * 设置企业信息总览
   * @param state
   * @param overallInfo
   */
  setOverallInfo (state, overallInfo) {
    state.overallInfo = overallInfo
  },
  /**
   * 设置企业基本信息
   * @param state
   * @param financeInfo
   */
  setFinanceInfo (state, financeInfo) {
    state.financeInfo = financeInfo
  }
}
