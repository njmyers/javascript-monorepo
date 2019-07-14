import { es6, cjs } from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    ...cjs(pkg),
  },
  {
    input: 'src/index.ts',
    ...es6(pkg),
  },
];
