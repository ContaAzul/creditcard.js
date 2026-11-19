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
    './.github/workflows/scripts/conventional-changelog.js': {},
  },
};
