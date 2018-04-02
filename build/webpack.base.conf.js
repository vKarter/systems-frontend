var
  path = require('path'),
  webpack = require('webpack'),
  config = require('../config'),
  cssUtils = require('./css-utils'),
  env = require('./env-utils'),
  merge = require('webpack-merge'),
  projectRoot = path.resolve(__dirname, '../'),
  ProgressBarPlugin = require('progress-bar-webpack-plugin'),
  appConfig = require('../package.json').appConfig,
  apiHost = process.env.API_HOST || appConfig.apiHost,
  streamerHost = process.env.STREAMER_HOST || appConfig.streamerHost,
  useAuth0 = (process.env.USE_AUTH0) || (appConfig.useAuth0),
  useWebSockets = (process.env.USE_WEBSOCKETS) || (appConfig.useWebSockets),
  useCssSourceMap =
    (env.dev && config.dev.cssSourceMap) ||
    (env.prod && config.build.productionSourceMap)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

process.stdout.write(` idField:          ${appConfig.idField}\n`)
process.stdout.write(` Router mode:      ${env.routerMode}\n\n`)
process.stdout.write(` API_HOST:         ${apiHost}\n`)
process.stdout.write(` STREAMER_HOST:    ${streamerHost}\n\n`)
process.stdout.write(` USE_AUTH0:        ${useAuth0}\n`)
process.stdout.write(` USE_WEBSOCKETS:   ${useWebSockets}\n\n`)

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: config[env.prod ? 'build' : 'dev'].publicPath,
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: config.aliases
  },
  module: {
    rules: [
      { // eslint
        enforce: 'pre',
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        include: projectRoot,
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: cssUtils.postcss,
          loaders: merge({js: 'babel-loader'}, cssUtils.styleLoaders({
            sourceMap: useCssSourceMap,
            extract: env.prod
          }))
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config[env.prod ? 'build' : 'dev'].env,
      DEV: env.dev,
      PROD: env.prod,
      __THEME: '"' + env.platform.theme + '"',
      ROUTER_MODE: '"' + env.routerMode + '"'
    }),
    new webpack.DefinePlugin({
      API_HOST: JSON.stringify(apiHost),
      STREAMER_HOST: JSON.stringify(streamerHost),
      ID_FIELD: JSON.stringify(appConfig.idField),
      USE_AUTH0: JSON.stringify(useAuth0),
      USE_WEBSOCKETS: JSON.stringify(useWebSockets)
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: env.prod,
      options: {
        context: path.resolve(__dirname, '../src'),
        postcss: cssUtils.postcss
      }
    }),
    new ProgressBarPlugin({
      format: config.progressFormat
    })
  ],
  performance: {
    hints: false
  }
}
