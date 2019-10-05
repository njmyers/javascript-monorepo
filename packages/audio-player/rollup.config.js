import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'es',
    },
    env: ['postcss', 'typescript', 'browser'],
  }),
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
    },
    env: ['postcss', 'typescript', 'browser'],
  }),
];
