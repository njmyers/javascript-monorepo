/* eslint-disable */
import { es6, cjs } from '@njmyers/rollup-config';
import pkg from './package.json';

export default [
  {
    ...cjs(pkg),
    input: 'src/index.ts',
  },
  {
    ...es6(pkg),
    input: 'src/index.ts',
  },
];
