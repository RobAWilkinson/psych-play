var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      'babel-polyfill',
      './client/main'
    ],
  },
  output: {
    path: path.join(__dirname, './public/'),
    filename: "[name].js",
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    }),
  ],
  module: {
    loaders: [
     {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel',"strip-loader?strip[]=debug,strip[]=console.log"],
      include: path.join(__dirname)
    },
    { test: /\.scss$/,  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
    { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader',"css-loader!less-loader") },
    { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
    { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },
    ]
  }
};
