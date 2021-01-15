const { readFileSync } = require('fs');
const { resolve } = require('path');
const getPresetConfig = require('conventional-changelog-conventionalcommits');
const ConventionalChangelogPlugin = require('@release-it/conventional-changelog');

function loadTemplate(path) {
  return readFileSync(resolve(__dirname, path), 'utf-8');
}

function getTypes() {
  /**
   * Overrides hidden types. By default, only fix, feat and breaking
   * changes are logged on release notes and changelog.
   * https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/writer-opts.js
   */
  return [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Chores' },
  ];
}

function getConfig() {
  const config = {
    types: getTypes(),
  };

  return getPresetConfig(config).then(presetConfig => {
    /**
     * Overrides preset templates:
     * See conventional-changelog-writer API
     * https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-writer
     */
    presetConfig.writerOpts.footerPartial = loadTemplate('./templates/footer.hbs');
    presetConfig.writerOpts.headerPartial = '';
    return presetConfig;
  });
}

/**
 * Customize configs by creating our own plugin overriding the official one
 * Official plugin: https://github.com/release-it/conventional-changelog
 * Creating plugins: https://github.com/release-it/release-it/blob/master/docs/plugins/README.md#creating-a-plugin
 */
class ConventionalChangelog extends ConventionalChangelogPlugin {
  getInitialOptions(options, pluginName) {
    return { ...options[pluginName], config: getConfig() };
  }
}

module.exports = ConventionalChangelog;
