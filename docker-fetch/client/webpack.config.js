const path = require('path');
const webpack = require('webpack');

module.exports = (env, { mode }) => ({
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'static'),
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URI: mode === 'development' ? '"http://127.0.0.1:3000/api"' : '"http://127.0.0.1/api"'
    })
  ]
});