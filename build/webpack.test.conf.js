'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = require('../config/test.env')

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.test.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.test.productionSourceMap ? config.test.devtool : false,
  output: {
    path: config.test.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),    //普通名
    chunkFilename: utils.assetsPath('js/[id].js'), //按需加载时的名
    publicPath: config.test.assetsPublicPath
  },
  plugins: ([
    new webpack.DefinePlugin({
      'process.env': env.NODE_ENV
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.test.productionSourceMap,
      parallel: true
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].css'),
      allChunks: true,
    }),
    
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.test.productionSourceMap
        ? {safe: true, map: {inline: false}}
        : {safe: true}
    }),
    
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
    
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.test.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ].concat(config.html.map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page.filename,
      template: page.template,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency',
      chunks: [page.name, 'vendor', 'manifest']
    });
  })))
})

if (config.test.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.test.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.test.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
