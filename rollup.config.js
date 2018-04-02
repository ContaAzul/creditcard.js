import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { version } from './package.json';

const banner = `/**
 * @name creditcard.js ${version}
 * @license MIT
 * @author ContaAzul <fernahh@gmail.com> (contaazul.com)
 */`;

export default {
  name: 'CreditCard',
  input: 'src/creditCard.js',
  output: {
    banner: banner,
    file: 'dist/creditcard.min.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    (process.env.BUILD === 'production' && uglify({
      output: {
        comments: {
          preserveComments: /(?:^!|@(?:name|license|author))/
        }
      }
    }))
  ],
  watch: {
    exclude: 'node_modules/**'
  }
};
