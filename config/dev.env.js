'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"https://test.chunyu.me"',
//  BASE_URL: '"http://192.168.0.180:8000"'
})
