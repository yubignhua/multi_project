export default {
  pageLoading: false,
  // 登录信息
  loginInfo: {
    hasLogin: false,
    userName: null
  },
  // 企业总览
  overallInfo: {
    available_balance: 0,
    employee_num: 0,
    last_invoice_time: '无',
    rest_invoice_limit: 0,
    total_invoice_amount: 0
  },
  // 开票的基本信息
  financeInfo: {
    invoice_title: '',
    taxpayer_id_no: '',
    is_general_taxpayer: 0,
    general_taxpayer_url: '',
    bank_name: '',
    bank_account_url: '',
    bank_account: '',
    register_address: '',
    register_phone: '',
    qualification_url: '',
    receiver_name: '',
    phone: '',
    post_address: '',
    post_code: '',
    email: ''
  }
}
