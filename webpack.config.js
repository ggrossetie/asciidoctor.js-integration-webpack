const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  node: {
    fs: 'empty',
    child_process: 'empty'
  },
  performance: {
    hints: false
  }
};

module.exports = config;
