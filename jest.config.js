module.exports = {
  coverageDirectory: '.coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['html', 'lcovonly'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
