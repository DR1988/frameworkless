const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './app/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'build.js'
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
}