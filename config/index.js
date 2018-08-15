'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
const fs=require('fs')
const packageConfig = require('../package.json');

let entry;
const pages = [];
const dirs = fs.readdirSync(path.join(__dirname, '../src'));
const rHyphen = /-([a-zA-Z])/g;
for(const dir of dirs) {
  if (dir.startsWith('v-pc-')) {
    pages.push({
      rurl: new RegExp(`^/${dir.replace(/-/g, '_')}`),
      name: dir.replace(rHyphen, '$1'),
      entry: `./src/${dir}/main.js`,
      template: `src/${dir}/index.html`,
      filename: `templates/${dir.replace(/-/g, '_')}/index.html`
    });
  }
}

const getEntry = function () {
  if (entry) return entry;
  entry = {};
  for (const page of pages) {
    entry[page.name] = page.entry;
  }
  return entry;
}


module.exports = {
  entry: getEntry(),
  html: pages,
  dev: {
    assetsSubDirectory: 'static', //目录
    assetsPublicPath: '/',
    proxyTable: {},
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: false,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: false,
    historyApiFallback: {
      rewrites: pages.map(function(page) {
        return {
          from: page.rurl,
          to: `/${page.filename}`
        };
      })
    }
  },
  
  test:{
    assetsRoot: path.resolve(__dirname, `../dist`), //静态资源输出目录
    assetsSubDirectory: 'static/vue/vue_medeweb_pc',  //静态资源目录
    assetsPublicPath: `/`, //发布后的地址，指html中 script 的src链接
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,  //是否启用gzip
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },

  build: {
    assetsRoot: path.resolve(__dirname, `../dist/`),
    assetsSubDirectory: 'static/vue/vue_medweb_pc',
    assetsPublicPath: `//static.chunyuyisheng.com/@/`,
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
