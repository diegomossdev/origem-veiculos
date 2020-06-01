const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body',
  base: '/',
  favicon: __dirname + '/public/favicon.ico',
});

module.exports = {
  dependencies: [
    path.join(__dirname, "..", "node_modules")
  ],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    HTMLWebpackPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
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
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  // optimization:{
  //   minimizer: [new UglifyJsPlugin({
  //       uglifyOptions: {
  //         compress: {
  //           inline: 1, // this right here
  //           // keep_fnames: true
  //         },
  //         mangle: {
  //           // keep_fnames: true
  //         }
  //       }
  //     })]
  // }
};