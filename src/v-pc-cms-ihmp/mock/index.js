let Mock = require('mockjs')

// 登录相关
// 获取图形验证码
Mock.mock('/refresh_captcha',
  {
    'captcha_string': '<img src="/captcha/image/1016d86b147a62f2d0beff3db37850a971b5b04c/" alt="captcha" class="captcha" /> <input type="hidden" name="captcha_0" value="1016d86b147a62f2d0beff3db37850a971b5b04c" id="id_captcha_0" /> <input type="text" name="captcha_1" id="id_captcha_1" />',
    'result': 'success'
  }
)

// 获取短信验证码
Mock.mock('/get_verify_code',
  {
    'result': 'success',
    'msg': '',
    'error_code': 0
  }
)

// 登录
Mock.mock('/cooperation/enterprise/admin/login/',
  {
    success: true
  }
)

// 分组相关
// 分组列表
Mock.mock('/cooperation/enterprise/group_search/',
  {
    success: true,
    'data|10-20': [
      {
        group_name: 'string',
        group_people: 'string',
        billing_cycle: 'string',
        money_limit: 'string',
        last_modify: 'string',
        id: 'string'
      }
    ]
  }
)

// 编辑分组-获取分组详情
Mock.mock('/cooperation/enterprise/admin/group_operation/',
  {
    success: true,
    data: {
      group_name: 'string',
      group_people: 'string',
      group_description: 'string',
      billing_cycle: 'string',
      amount: 'string'
    }
  }
)
module.exports = {}
