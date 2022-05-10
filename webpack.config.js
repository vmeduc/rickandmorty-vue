const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: { 
    filename: 'bundle.js',
    path: path.join(__dirname, 'out')
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 9000
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },

  resolve: {
    alias: { 
      vue: 'vue/dist/vue.js',
      '@': path.join(__dirname, 'src')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html')}),
    new VueLoaderPlugin()
  ]
}