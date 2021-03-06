/* eslint-env node */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    bundle: './js/bootstrapper.js',
    vendor: [
      'script-loader!jquery',
      'moment',
      'bootstrap',
      'bootstrap-touchspin',
      'imports-loader?moment,this=>window,define=>undefined,exports=>undefined!eonasdan-bootstrap-datetimepicker'
    ]
  },

  output: {
    path: path.resolve(__dirname),
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'amd'
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }, {
      exclude: [
        /\.js$/,
        /\.html$/,
        /\.css$/
      ],
      loader: 'url-loader',
      options: { limit: 10000 }
    }]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    })
  ],

  // devServer: {
  //   port: 8001,
  //   stats: 'verbose'
  // },

  performance: {
    hints: false
  },

  externals: [
    function(context, request, callback) {
      if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
        return callback(null, 'amd ' + request);
      }
      callback();
    }
  ],

  devtool: 'source-map'
};
