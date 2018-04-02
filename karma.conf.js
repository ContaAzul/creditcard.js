module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'specs/**/*.js'
    ],
    exclude: [
      'node_modules',
      'dist'
    ],
    preprocessors: {
      'src/**/*.js': ['rollup'],
      'specs/**/*.js': ['rollup']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    rollupPreprocessor: {
      plugins: [require('rollup-plugin-babel')()],
      output: {
        format: 'iife',
        name: 'CreditCard',
        sourcemap: 'inline'
      }
    }
  })
}
