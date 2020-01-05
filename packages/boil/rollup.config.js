import rollupEnvironment from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  rollupEnvironment(pkg, {
    input: 'src/program/program.ts',
    env: ['node', 'typescript'],
    output: {
      format: 'cjs',
    },
  }),
  rollupEnvironment(pkg, {
    input: 'src/program/program.ts',
    env: ['node', 'typescript'],
    output: {
      format: 'es',
    },
  }),
];
