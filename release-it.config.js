/* eslint-disable no-template-curly-in-string */
module.exports = {
  git: {
    tagName: 'v${version}',
    commitMessage: 'chore: release v${version}',
    pushRepo: 'git@github.com:ContaAzul/creditcard.js.git',
    tagAnnotation: 'v${version}',
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    tokenRef: 'GH_TOKEN',
  },
  npm: {
    // Publicação por trusted publishing (OIDC) não tem token: o `npm whoami`
    // dos checks do release-it responde 401 e aborta o release. O release-it
    // não permite desligar só esse check; a garantia equivalente é o passo
    // "Verify provenance" do deploy-npm.yml.
    skipChecks: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
        // Por padrão o preset só lista feat, fix e breaking changes
        types: [
          { type: 'feat', section: 'Features' },
          { type: 'fix', section: 'Bug Fixes' },
          { type: 'chore', section: 'Chores' },
        ],
      },
      // Mantém o comportamento anterior: todo commit gera release, no mínimo patch
      whatBump: commits => {
        if (commits.some(commit => commit.notes.length > 0)) return { level: 0 };
        if (commits.some(commit => commit.type === 'feat')) return { level: 1 };
        return { level: 2 };
      },
      writerOpts: {
        headerPartial: () => '',
      },
    },
  },
};
