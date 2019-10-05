import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/program/program.ts',
    env: 'node',
    output: {
      format: 'cjs',
    },
    external: ['fs', 'path'],
  }),
  rollupEnvironment(pkg, {
    input: 'src/program/program.ts',
    env: 'node',
    output: {
      format: 'es',
    },
    external: ['fs', 'path'],
  }),
];
