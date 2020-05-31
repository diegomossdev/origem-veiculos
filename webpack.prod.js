const merge = require('webpack-merge');
const webpackconfig = require('./webpack.config.js');

module.exports = merge(webpackconfig, {
  mode: 'production',
});