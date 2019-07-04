import { es6, cjs } from '@njmyers/rollup-config';
import pkg from './package.json';

const cjsConfig = cjs(pkg);
const es6Config = es6(pkg);

export default [
  {
    input: 'src/index.js',
    ...cjsConfig,
  },
  {
    input: 'src/index.js',
    ...cjsConfig,
  },
];
