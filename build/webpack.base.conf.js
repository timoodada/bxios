const {resolve} = require('path')

module.exports = {
  entry: {
    'bxios.umd': resolve(__dirname, '../src/index.ts'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'bxios',
    libraryExport: 'default',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'tslint-loader',
          options: {
            configFile: resolve(__dirname, '../tslint.json'),
            tsConfigFile: resolve(__dirname, '../tsconfig.json'),
            emitErrors: true,
            failOnHint: true
          }
        }]
      }
    ]
  }
}
