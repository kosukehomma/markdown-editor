const path = require('path');
const { getTsBuildInfoEmitOutputFilePath } = require('typescript');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },
  devServer: {
    port: 3003,
    static: {
      directory: path.join(__dirname, '/'),
    },
    hot: true,
    open: true,
    watchFiles: ['dist'],
  },
  target: ['web', 'es5']
}