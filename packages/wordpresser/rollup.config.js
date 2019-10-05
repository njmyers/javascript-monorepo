import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/index.js',
    output: {
      format: 'es',
    },
  }),
  rollupEnvironment(pkg, {
    input: 'src/index.js',
    output: {
      format: 'cjs',
    },
  }),
];
