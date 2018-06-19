import babel from 'rollup-plugin-babel';
import { version } from './package.json';

const banner = `/**
 * @name creditcard.js ${version}
 * @license MIT
 * @author ContaAzul (contaazul.com)
 */`;

export default {
  name: 'CreditCard',
  input: 'src/creditCard.js',
  output: {
    banner: banner,
    file: 'dist/creditcard.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  watch: {
    exclude: 'node_modules/**'
  }
};
