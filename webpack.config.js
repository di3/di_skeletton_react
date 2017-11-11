var webpack = require('webpack');

var entry = __dirname + '/' + require("./package.json").entry;

var output = {
  path: __dirname + '/' + require("./package.json").output.path,
  filename: require("./package.json").output.filename,
  library: require("./package.json").output.library
};

module.exports = {
  entry,
  output,
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    hot: true,
    setup: function (app) {
      //hacks for post
      app.post('/api/index.json', function (req, res) {
        res.redirect('/api/index.json');
      });
    },
    proxy: {
      '/skeleton/api/': {
        target: 'http://localhost:8080/api/index.json',
        secure: false,
        ignorePath: true,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack', 'babel-loader'] },
      { test: /\.svg$/, loader: 'svg-react-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
   new webpack.DefinePlugin({
      '__DEBUG': true
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.svg'],
    modules: ['node_modules']
  }
}
