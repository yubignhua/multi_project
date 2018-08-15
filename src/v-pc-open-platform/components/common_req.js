import axios from 'axios'

export default {
  getUserInfo (...args) {
    return axios.get('/cooperation/enterprise/admin/get_admin_name/', args)
  }
}
