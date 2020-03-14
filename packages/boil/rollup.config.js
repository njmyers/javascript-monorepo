import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/program/program.ts',
    env: ['node', 'typescript'],
    external: ['fs', 'path'],
    output: {
      format: 'cjs',
    },
  }),
  rollupEnvironment(pkg, {
    input: 'src/program/program.ts',
    env: ['node', 'typescript'],
    external: ['fs', 'path'],
    output: {
      format: 'es',
    },
  }),
];
