const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, { mode }) => ({
  entry: './src/index.tsx',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new NodemonPlugin(),
    new webpack.DefinePlugin({
      API_URI: mode === 'development' ? '"http://127.0.0.1:3001"' : '"http://api"'
    })
  ]
});