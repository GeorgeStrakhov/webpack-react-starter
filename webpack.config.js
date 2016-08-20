var path = require('path');

let src = path.resolve(__dirname + '/src');
let dist = path.resolve(__dirname + '/dist');

module.exports = {
  entry: src+'/index.js',
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test : /\.jsx?/,
      include : src,
      loader : 'babel'
    }
    ]
  }
};
