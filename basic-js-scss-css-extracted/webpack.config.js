const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }

          }],
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]

  },
  plugins: [
    new MiniCssExtractPlugin()
  ]

}