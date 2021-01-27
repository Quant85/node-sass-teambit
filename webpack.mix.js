//webpack.mix.js

let mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'js').vue()
  .sass('resources/sass/styles.scss', 'css').options(
      {processCssUrls:false}
      ).setPublicPath('public/assets');