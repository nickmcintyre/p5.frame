const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'pframe.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    p5: 'p5'
  }
};
