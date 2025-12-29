const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');

const banner = `/**
 * @name creditcard.js ${pkg.version}
 * @license MIT
 * @author ContaAzul (contaazul.com)
 */`;

module.exports = {
  input: 'src/creditcard.js',
  output: [
    {
      banner,
      compact: true,
      file: 'dist/creditcard.js',
      format: 'umd',
      name: 'CreditCard',
    },
    {
      banner,
      file: 'dist/creditcard.min.js',
      format: 'cjs',
      name: 'CreditCard',
      plugins: [terser],
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
  watch: {
    exclude: 'node_modules/**',
  },
};
