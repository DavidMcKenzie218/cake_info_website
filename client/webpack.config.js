const HtmlWebpackPlugin = require('html-webpack-plugin');

config = {
  entry: "./src/index.js",
  output: {
    path: 'dist',
    filename: "bundle.js",
    path: "./build"
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Cake Information"
  })],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', 
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;