const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  node: {
    fs: 'empty'
  }
};

module.exports = config;
