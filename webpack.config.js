var HtmlWebpackPlugin = require('html-webpack-plugin');
//moves the html file as well so links with js files
//inject js script link tag into the body
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  //main file
  entry: [
    './app/index.js'
  ],
  //location of output file
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      //  run on all js files, minus node modules, the transformation is going to be babel loader
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
