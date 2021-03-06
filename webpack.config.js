var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: __dirname +'/src/app.js',
  output: { path: __dirname +'/public/', filename: 'app.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};