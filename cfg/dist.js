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
    entry: path.join(__dirname, '../src/index'),
    cache: false,
    devtool: 'sourcemap',
    output: {
      path: path.join(__dirname, '/../dist/assets'),
      filename: language + '.app.js',
      publicPath: `.${defaultSettings.publicPath}`
    },
    plugins: [
      new I18nPlugin(languages[language]),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: defaultSettings.getModules([{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: [].concat(
        path.join(__dirname, '/../src')
      )
    }])
  })
})
