var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

var webpackConfig = {
  mode: 'none',
  context: __dirname, // to automatically find tsconfig.json
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // Neither of the following solves the issue:
      // tsconfig: './tsconfig.json'
      // tsconfig: require('path').join(__dirname, './tsconfig.json')
    })
  ]
}

module.exports = webpackConfig
