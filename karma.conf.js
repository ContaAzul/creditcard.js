module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*.js',
      'specs/**/*.js'
    ],
    exclude: [
      'node_modules',
      'dist'
    ],
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'specs/**/*.js': ['browserify']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    browserify: {
      debug: true,
      transform: ['babelify']
    }
  })
}
