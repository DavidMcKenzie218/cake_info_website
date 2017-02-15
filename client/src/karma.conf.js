const webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], 
    singleRun: true, 
    frameworks: [ 'mocha' ], 
    files: [
      'tests.webpack.js' 
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] 
    },
    reporters: [ 'dots' ], 
    webpack: { 
      devtool: 'inline-source-map', 
      module: {
        loaders: [
          { test: /\.jsx$/, loader: 'babel-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true 
    }
  });
};