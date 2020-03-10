import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'es',
    },
  }),
  rollupEnvironment(pkg, {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
    },
  }),
  rollupEnvironment(pkg, {
    env: ['typescript', 'node'],
    external: ['fs', 'path'],
    input: 'src/program.ts',
    output: {
      format: 'cjs',
      file: 'build/program.cjs.js',
    },
  }),
  rollupEnvironment(pkg, {
    env: ['typescript', 'node'],
    external: ['fs', 'path'],
    input: 'src/program.ts',
    output: {
      format: 'cjs',
      file: 'build/program.esm.js',
    },
  }),
];
