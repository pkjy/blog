const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: '/',

  // where to output built files
  outputDir: 'dist',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  // lintOnSave: true,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    // config.output
    //   .filename('./layout/body.ejs');


    // const inlineLimit = 10000;
    // const assetsPath = './source';
    // config
    //   .output
    //   .filename(path.join(assetsPath, 'js/[name].[hash:8].js'))
    //   .chunkFilename(path.join(assetsPath, 'js/[id].[hash:8].js'))

    // config.plugin('extract-css')
    //   .use(ExtractTextPlugin, [{
    //     filename: path.join(assetsPath, 'css/[name].[contenthash:8].css'),
    //     allChunks: true
    //   }])

    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .options({
    //     limit: inlineLimit,
    //     name: path.join(assetsPath, 'img/[name].[hash:8].[ext]')
    //   })

    // config.module
    //   .rule('fonts')
    //   .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .options({
    //     limit: inlineLimit,
    //     name: path.join(assetsPath, 'fonts/[name].[hash:8].[ext]')
    //   })

    // config.plugin('html').tap(args => {
    //   return [{ filename: './layout/body.ejs' }]
    // })
  },

  // generate sourceMap for production build?
  productionSourceMap: true,

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: true,

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {}
  },

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // configure webpack-dev-server behavior
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => { }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, './__mock__'),
        to: '.',
        ignore: ['.*']
      }]),
      // // copy theme assets
      // new CopyWebpackPlugin([
      //   {
      //     from: path.resolve(__dirname, './theme'),
      //     to: '.',
      //     ignore: ['.*']
      //   }
      // ]),
    ]
  },
  // options for 3rd party plugins
  pluginOptions: {
    // copy mocked api

    // ...
  }
}
