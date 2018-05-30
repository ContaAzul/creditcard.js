module.exports = {
  coverageDirectory: '.coverage',
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 97,
      branches: 95,
      functions: 100,
      lines: 97
    },
  },
};
