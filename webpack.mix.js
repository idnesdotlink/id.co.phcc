let mix = require('laravel-mix')
let webpack = require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
    host: '0.0.0.0:3000',
    proxy: 'localhost:8000',
    files: [
        'resources/**/*',
        'app/**/*.php',
        'config/*.php',
        'routes/**/*.php',
        'public/js/*.js',
        'public/css/*.css',
        'public/storage/**/*'
    ]
})

mix.js('resources/assets/js/common.js', 'public/js')
mix.sass('resources/assets/scss/app.scss', 'public/css')

mix.js('resources/assets/js/page1.js', 'public/js')
//.extract('vue')
//    .sass('resources/assets/scss/app.scss', 'public/css')

mix.js('resources/assets/js/page2.js', 'public/js')
// .extract('vue')
    //.sass('resources/assets/sass/page2.scss', 'public/css');
mix.copyDirectory('resources/assets/img', 'public/img')

mix.webpackConfig({
  entry: {
    '/js/vendor': [
      'vue',
      'vuebar',
      'vuex',
      // 'swiper',
      'holderjs',
      'axios',
      'aos'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "/js/vendor",
      minChunks: function(module){
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
      filename: '/js/vendor.js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "/js/manifest",
      minChunks: Infinity,
      filename: '/js/manifest.js'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  ]
})
