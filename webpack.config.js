var Encore = require('@symfony/webpack-encore');

Encore
// directory where all compiled assets will be stored
    .setOutputPath('public/build/')
    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')
    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()
    // will output as web/build/app.js
    .addEntry('app', ['babel-polyfill', 'whatwg-fetch', './assets/js/app.js'])
    // will output as web/build/app.css
    .addStyleEntry('css/main', './assets/scss/styles.scss')
    .enablePostCssLoader()
    // allow sass/scss files to be processed
    .enableSassLoader()
    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .enableSourceMaps(!Encore.isProduction())
    .autoProvideVariables({
        'window.Translator': 'Translator',
    })

// export the final configuration
module.exports = Encore.getWebpackConfig()
