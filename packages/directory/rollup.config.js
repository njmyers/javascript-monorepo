import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'es',
    },
    external: ['fs', 'path', 'util'],
    env: ['typescript', 'node'],
  }),
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
    },
    external: ['fs', 'path', 'util'],
    env: ['typescript', 'node'],
  }),
];
