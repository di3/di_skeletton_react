var webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

const MINIFY = process.env.MINIFY;
const uglifyJsPluginParams = MINIFY ? undefined : { beautify: true, compress: { dead_code: true, warnings: true }, mangle: false };

const GZ = process.env.GZ;

var entry = __dirname + '/' + require("./package.json").entry;
var plugins = [
    new webpack.DefinePlugin({
      __DEBUG: false,
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    }),
    new webpack.optimize.UglifyJsPlugin(uglifyJsPluginParams),
    new webpack.ProvidePlugin({
      //React: 'react'
    })
];

if (GZ) plugins.push(new CompressionPlugin({test:/\.js/}));

var output = {
  path: __dirname + '/' + require("./package.json").output.path,
  filename: MINIFY ? require("./package.json").output.filenameMin : require("./package.json").output.filename,
  library: require("./package.json").output.library
};

module.exports = {
  entry,
  output,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.svg$/, loader: 'svg-react-loader', exclude: /node_modules/ }
    ]
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  }
}
