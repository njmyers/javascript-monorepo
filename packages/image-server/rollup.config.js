import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'es',
    },
    env: ['typescript', 'node'],
    external: ['util', 'process', 'stream', 'url', 'buffer'],
  }),
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
    },
    env: ['typescript', 'node'],
    external: ['util', 'process', 'stream', 'url', 'buffer'],
  }),
];
