import { es6, cjs } from '@njmyers/rollup-config';
import pkg from './package.json';

const external = ['uuid/v1'];

const cjsConfig = cjs(pkg);
const es6Config = es6(pkg);

export default [
  {
    input: 'src/index.ts',
    ...cjsConfig,
    external: [...cjsConfig.external, ...external],
  },
  {
    input: 'src/index.ts',
    ...cjsConfig,
    external: [...cjsConfig.external, ...external],
  },
];
