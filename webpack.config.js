/* global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'EtdComponents';

let plugins = [], outputFile;


if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new ExtractTextPlugin({
    filename: libraryName + '.css',
    allChunks: true
  }))
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        use: ['babel-loader', 'eslint-loader'],
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /.styl$/,
        exclude: /node_modules/,
        use: env === 'build' ?
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'stylus-loader'
            ]
          })
          :
          [
            'style-loader?sourceMap',
            'css-loader',
            'stylus-loader'
          ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.js', '.jsx']
  },
  plugins: plugins,
  externals: {
    react: {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    },
    'prop-types': {
      amd: 'prop-types',
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      root: ['React', 'PropTypes']
    },
    classnames: {
      amd: 'classnames',
      commonjs: 'classnames',
      commonjs2: 'classnames',
      root: 'classNames'
    },
    immutable: {
      amd: 'immutable',
      commonjs: 'immutable',
      commonjs2: 'immutable',
      root: 'Immutable'
    }
  }
};

module.exports = config;
