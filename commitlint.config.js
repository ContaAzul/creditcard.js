// @ts-check
module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  /**
   * * Overrides default allowed types
   * ? https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js
   */
  rules: {
    'type-enum': [2, 'always', ['chore', 'feat', 'fix']],
  },
};
