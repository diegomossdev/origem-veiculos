const path = require('path');

module.exports = {
  dependencies: [
    path.join(__dirname, "..", "node_modules")
  ],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle_client.js'
  },
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
  }
};