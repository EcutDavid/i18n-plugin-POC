'use strict'

let path = require('path')
let webpack = require('webpack')
let baseConfig = require('./base')
let defaultSettings = require('./defaults')
var I18nPlugin = require('i18n-webpack-plugin')
var languages = {
    'en': null,
    'ch': require('./ch.json')
}

module.exports = Object.keys(languages).map(function(language) {
  return Object.assign({}, baseConfig, {
    name: language,
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    output: {
      path: path.join(__dirname, '/../dist/assets'),
      filename: language + '.app.js',
      publicPath: `.${defaultSettings.publicPath}`
    },
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new I18nPlugin(languages[language])
    ],
    module: defaultSettings.getModules([{
      test: /\.(js|jsx)$/,
      loader: 'react-hot!babel',
      include: [].concat(
        path.join(__dirname, '/../src')
      )
    }])
  })
})
