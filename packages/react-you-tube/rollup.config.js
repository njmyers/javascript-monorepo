import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
    },
  }),
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'es',
    },
  }),
];
