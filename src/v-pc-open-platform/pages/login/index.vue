<template>
  <div class="login-wrap">
    <el-form class="form-wrap" ref="loginInfo" :rules="rules" :model="loginInfo">
      <div class="form-title">企业管理员登录</div>
      <el-form-item prop="phone">
        <el-input
          placeholder="注册手机号"
          maxlength="11"
          v-model="loginInfo.phone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          class="ipt-sm"
          placeholder="请输入短信验证码"
          v-model="loginInfo.code"
        ></el-input>
        <span class="get-captcha" @click="getImgCode" :class=" countDownInfo.disabled ? 'get-disabled':''">{{ countDownInfo.text }}</span>
      </el-form-item>
      <div class="mt50">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
      <div class="mt20 tc">
        <router-link class="register-link" to="/public/register">申请入驻</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
import { regexps } from '@/v-pc-open-platform/assets/global'
import {mapMutations} from 'vuex'
import captcha from "static/widget/sm_captcha/sm_captcha"

let errMsgs = {
  getPcError: '获取图形验证码失败，请重新获取',
  getNcError: '获取短信验证码失败，请重试',
  loginError: '登录失败，请重试'
}

let defaultNum = 60
export default {
  beforeCreate () {
    const that = this
    const script = document.createElement('script')
    script.src = '//castatic.fengkongcloud.com/pr/v1.0.1/smcp.min.js'
    script.onload = () => { // 初始化图形验证码
      captcha({width: '460px'}, (SMCaptcha) => {
        SMCaptcha.onSuccess(function (captchaResult) {
          let pass = captchaResult.pass
          let rid = captchaResult.rid
          let data = {rid: rid}
          if (!pass) return
          that.getVerifyCode(rid)
        });
        that.SMCaptcha = SMCaptcha;
      });
    }
    document.body.appendChild(script);
  },
  data () {
    return {
      SMCaptcha: '',
      loginInfo: {
        phone: '',
        code: '',
        picCode: ''
      },
      countNum: defaultNum,
      pcImg: '点击重新获取', // 图形验证码标签
      rules: {
        phone: [
          {required: true, message: '请输入注册手机号', trigger: 'blur'},
          {message: '手机号格式错误，请输入11位手机号', trigger: 'blur', pattern: regexps.mobile}
        ],
        picCode: [
          {required: true, message: '请输入图形验证码', trigger: 'blur'}
        ],
        code: [
          {required: true, message: '请输入短信验证码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...mapMutations([
      'doLogin'
    ]),
    getImgCode () {
      if (this.countDownInfo.disabled) {
        return
      }
      if (!this.loginInfo.phone) {
        return this.$message.warning('请先输入手机号')
      }
      if (!regexps.mobile.test(this.loginInfo.phone)) {
        return this.$message.warning('手机号格式错误，请输入11位手机号')
      }
      const SMCaptcha = this.SMCaptcha;
      const captchaResult = SMCaptcha.getResult();
      const pass = captchaResult.pass;
      if (pass) SMCaptcha.reset();
      SMCaptcha.verify();
    },
    getVerifyCode(rid) {
      let data = `rid=${rid}&phone_num=${this.loginInfo.phone}`
      this.$http.post('/get_verify_code', data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(res => {
          if (res.result === 'success') {
            this.startCountDown()
          } else {
            this.$message.error(res.msg || errMsgs.getNcError)
          }
        })
        .catch(e => {
          this.$message.error(errMsgs.getNcError)
          console.log(e)
        })
    },
    /**
     * 登录
     */
    login () {
      this.$refs['loginInfo'].validate((valid) => {
        if (valid) {
          let data = this.loginInfo
          this.$http.post('/cooperation/enterprise/admin/login/', data)
            .then(res => {
              if (res.success) {
                this.doLogin({
                  hasLogin: true,
                  userName: res.data.name
                })
                this.$router.push({name: 'dashBoard'})
              } else {
                this.$message.error(res.error_msg)
              }
            })
            .catch(e => {
              console.log(e)
              this.$message.error(errMsgs.loginError)
            })
        }
      })
    },
    /**
     * 倒计时
     */
    startCountDown () {
      this.countNum--
      let countDown = setInterval(() => {
        if (!this.countNum--) {
          this.countNum = defaultNum
          clearInterval(countDown)
          this.getCaptcha()
        }
      }, 1000)
    }
  },
  computed: {
    countDownInfo () {
      let text = '获取验证码'
      let disabled = false
      if (this.countNum !== defaultNum) {
        disabled = true
        text = `重发（${this.countNum}）`
      }
      return {
        text,
        disabled
      }
    }
  }
}
</script>

<style lang='scss'>
  .login-wrap {
    margin-top: -40px;

    .form-wrap {
      margin: 170px auto;
      width: 380px;
      height: 373px;
      padding: 0 40px;
      background: #fff;
      border-radius: 7px;
    }

    .form-title {
      height: 97px;
      line-height: 97px;
      color: $subjectColor;
      font-size: 26px;
      text-align: center;
    }

    .el-button {
      width: 100%;
    }

    .ipt-sm {
      width: 190px;
      margin-right: 20px;
    }

    .register-link {
      text-decoration: underline;
      color: #999;
    }

    .get-captcha {
      color: $subjectColor;
      cursor: pointer;
    }

    .get-disabled {
      color: #999999;
      cursor: default;
    }
    .pc-img-wrap{
      img{
        vertical-align: middle;
        height: 23px;
      }
    }
  }
</style>
