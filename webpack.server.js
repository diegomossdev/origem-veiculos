const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './api/src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_server.js'
  },
  target: 'node',
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  ]
  },
  externals: [nodeExternals()]
};