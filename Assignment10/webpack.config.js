const path = require('path');

module.exports = {
  optimization : {
  minimize:false},
  entry: './src/javascript/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};