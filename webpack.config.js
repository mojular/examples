var webpack = require("webpack");

module.exports = {
  entry: {
    app: './app/assets/javascripts/application.js',
    polyfills: ['JSON2', 'html5shiv']
  },
  output: {
    path: './app/assets/javascripts',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { include: /\.json$/, loaders: ['json-loader'] }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'node_modules/mojular/node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};
